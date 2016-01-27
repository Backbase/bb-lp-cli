'use strict';
/*----------------------------------------------------------------*/
/* Gulp Tasks
/*----------------------------------------------------------------*/
var utils = require('./utils');
var display = utils.display();
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var Promise = require('promise');
var del = require('del');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var g = require('gulp-load-plugins')();
var proxy = require('proxy-middleware');
var server = require('browser-sync').create('stand-alone-server');
var url = require('url');
var runSeq = require('run-sequence').use(gulp);
var config = require('./config');
var webpack = require('webpack');
var shell = utils.shell();
var colors = utils.colors();
var CustomLibraryTemplatePlugin = require('./plugins/custom-lib-template.js');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var NGAnnotatePlugin = require('ng-annotate-webpack-plugin');

var named = require('vinyl-named');
var through = require('through2');
var globalWebpackConf = require(path.resolve(__dirname, './configs/webpack.conf.js'));
var pkg = require('../package.json');
var yaml = require('js-yaml');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');

function createNewEntry(excludes, mainPath, targetFile) {
    var mainFileContent = fs.readFileSync(mainPath);
    var entryPath = './' + path.join(config.paths.scripts, path.basename(targetFile));
    var excludesRegExp = new RegExp(
        '\\s*require\\([\'\"]{1}[\\.\\\/\\\\\\w]+(' + excludes.join('|') + ')[\\\/\\\\\\w]+[\'\"]\\)\\.name,?', 'ig');
    fs.writeFileSync(entryPath, mainFileContent.toString().replace(excludesRegExp, ''), 'utf8');
    return entryPath;
}

function getPerformanceLoaderOptions(enabled) {
    return {
        enabled: enabled,
        events: {
            start: 'cxp.performance.start',
            end: 'cxp.performance.end'
        }
    };
}

var prependBanner = function() {
    return g.header(utils.banner(pkg));
};

var gulpEmpty = function() {
    return through.obj(function(file, enc, cb) {
        cb(null, file);
    });
};

gulp.task('build:scripts', [], function() {
    var mainJS = utils.bowerMainJs(config.main);

    if (utils.isUndefined(mainJS) || mainJS.indexOf('.js') < 0) {
        return false;
    }
    var target = config.customTarget ? utils.bowerMainJs(config.customTarget) : config.mainOutPath;
    var excludes = config.excludes;
    var entry = config.main;

    if (excludes && excludes.length) {
        var modifiedEntryFile = createNewEntry(excludes, mainJS, target);
        if (typeof entry === 'string') {
            entry = modifiedEntryFile;
        } else {
            entry[entry.indexOf(mainJS)] = modifiedEntryFile;
        }
    }
    var webpackConf = utils.deepMerge(globalWebpackConf, {
        entry: entry,
        output: {
            filename: target
        },
        plugins: [
            new NGAnnotatePlugin({
                add: true
            }),
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map",
                moduleFilenameTemplate: "webpack:///" + config.name + "/[resourcePath]",
                fallbackModuleFilenameTemplate: "webpack:///" + config.name + "/[resourcePath]?[hash]",
                append: "\n//# sourceMappingURL=[url]",

                module: true,
                columns: true,
                lineToLine: false
            })
        ]
    });
    /**
     * Example patterns exclusions
     * ./includethis
     * ./include-this-one
     * include/this-one
     * include-this/one-also
     * @include/this/one
     *
     * excludethis
     * exclude-this
     * @exclude/this
     * @exclude/this-one
     */
    webpackConf.externals.unshift(/^(@[^\/]+\/)?[a-z-]+$/);

    if (config.withModuleId) {
        webpackConf.plugins.push(new CustomLibraryTemplatePlugin('umd', config.name));
        webpackConf.output.id = config.name;
    } else {
        webpackConf.output.libraryTarget = 'umd';
        webpackConf.output.library = config.name;
    }
    if (config.isBuild === true) {

        webpackConf.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMaps: true,
                mangle: {
                    keepFnames: true,
                    except: ['exports', 'require']
                }
            })
        );
        webpackConf.plugins.push(
            new webpack.BannerPlugin(utils.banner(pkg), {
                raw: true,
                entryOnly: true
            })
        );
    }

    return gulp.src(path.resolve(mainJS))
        .pipe(g.webpack(webpackConf))
        .pipe(g.size({
            title: 'File size:',
            showFiles: true
        }))
        .pipe(gulp.dest(config.paths.target));
});

gulp.task('server', [], function() {

    var rewriteRuleMiddleWare = require('./server-middlewares/rewrite-rules');
    var ramlMiddleWare = require('./server-middlewares/raml');
    var proxies = config.proxies;
    var paths = config.paths;
    var middleWares = [];
    var port = config.server.port;

    var defaultOption = {
        open: false,
        files: ['**/*.raml'],
        server: {
            baseDir: ['./', './src', paths.target],
            minify: true,
            index: paths.index,
            // proxy: 'localhost:7777',
            middleware: middleWares,
            routes: {

            }
        }
    };
    if (!utils.isNull(port)) {
        defaultOption.port = port;
    }
    middleWares.push(rewriteRuleMiddleWare);
    middleWares.push(ramlMiddleWare);
    Object.keys(proxies).forEach(function(k) {
        var proxyOptions = url.parse(proxies[k]);
        proxyOptions.route = k;
        middleWares.push(proxy(proxyOptions));
    });
    display.info('Starting standalone server with configuration:', utils.logObj(config));
    var bs = server.init(defaultOption);
});

gulp.task('server:reload', function() {
    server.reload();
});

gulp.task('test:lint', function() {
    // var defaultPath = config.eslint || 'configs/eslint.conf.yaml';
    // var customConfig = utils.projectPath(defaultPath);
    var fallBack = path.resolve(__dirname, 'configs/eslint.conf.json');
    var rules = require(fallBack);

    var customConfig = config.eslint;
    var configOptions = {};
    var customConfigPath;
    var yamlCustomConfigPath;
    var jsonCustomConfigPath;

    if (!utils.isUndefined(customConfig)) {
        if (utils.fileIs(customConfig, 'yaml')) {
            yamlCustomConfigPath = utils.projectPath(customConfig);
        } else if (utils.fileIs(customConfig, 'json')) {
            jsonCustomConfigPath = utils.projectPath(customConfig);
        }
    } else {
        customConfig = path.resolve('configs', 'eslint.conf');
        yamlCustomConfigPath = utils.projectPath(customConfig) + '.yaml';
        jsonCustomConfigPath = utils.projectPath(customConfig) + '.json';
    }


    if (shell.test('-f', yamlCustomConfigPath)) {
        customConfigPath = yamlCustomConfigPath;
        configOptions = yaml.safeLoad(fs.readFileSync(yamlCustomConfigPath, 'utf8'));
    } else if (shell.test('-f', jsonCustomConfigPath)) {
        customConfigPath = jsonCustomConfigPath;
        configOptions = require(customConfigPath);
    }
    if (customConfigPath) {
        display.info('Using custom karma config file:', colors.info(customConfigPath));
    }
    rules = utils.assign(rules, configOptions);

    var cache = require('gulp-cached');
    var src = [
        config.paths.scripts + '/**/*.js',
        '!**/node_modules/**/*.js',
        '!**/bower_components/**/*.js',
        '!**/dist/**/*.js',
        '!**/test/**/*.js', // ignore linting tests
        '!**/deprecated/**/*.js',
        '!**/migration/**/*.js'
    ];
    gulp.src(src)
        .pipe(cache('linting'))
        .pipe(g.eslint(rules))
        .pipe(g.eslint.formatEach())
        .pipe(g.eslint.failOnError())
        .on('error', g.notify.onError());
});


gulp.task('start', ['test:lint', 'build:scripts', 'build:styles', 'server'], function() {
    // watch scripts
    gulp.watch([
        config.paths.scripts + '/**/*.js'
    ], ['test:lint', 'build:scripts', 'server:reload']);

    gulp.watch([
        config.paths.styles + '/**/*.less',
        config.paths.styles + '/**/*.scss',
        config.paths.scripts + '/**/*.less',
        config.paths.scripts + '/**/*.scss'
    ], ['build:styles']);

    gulp.watch([
        config.paths.index,
        config.paths.index,
        config.paths.templates + '/**/*.html'
    ], ['server:reload']);

});


gulp.task('compile:scss', [], function() {

    return gulp.src(utils.resolve(config.paths.styles, 'index.scss'))
        .pipe(g.sourcemaps.init())
        // Use sass compiler
        .pipe(g.sass({
            outputStyle: 'compressed'
        }).on('error', g.notify.onError()))
        .pipe(server.reload({
            stream: true
        }))
        .pipe(prependBanner())
        .pipe(g.size({
            title: 'File size:',
            showFiles: true
        }))
        .pipe(g.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.styles))
        .pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
});
// Build styles
gulp.task('build:styles', ['build:images', 'compile:scss'], function() {

    return gulp.src(utils.resolve(config.paths.styles, 'base.less'))
        // Use less compiler
        .pipe(g.sourcemaps.init())
        .pipe(g.less({
            compress: true
        })).on('error', g.notify.onError())
        .pipe(server.reload({
            stream: true
        }))
        .pipe(prependBanner())
        .pipe(g.size({
            title: 'File size:',
            showFiles: true
        }))
        .pipe(g.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.styles))
        .pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
});

// Build images
gulp.task('build:images', [], function() {
    var src = utils.resolve(config.paths.media, '**/*');
    var target = utils.resolve(config.paths.target);
    var base = config.paths.media.indexOf('src') > 0 ? './src' : './';

    return gulp.src(src, {
            base: base
        })
        .pipe(g.changed(target))
        .pipe(gulp.dest(target));
});

// Bundle HTML templates into JS

gulp.task('build:html', [], function() {

    var src = utils.resolve(config.paths.templates, '*.html');
    var dest = utils.resolve(config.paths.target, 'scripts');
    var moduleName = ['launchpad', config.name, 'templates'].join('.');
    var prefix = path.normalize(config.paths.templates + '/');

    return gulp.src(src)
        .pipe(g.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(g.debug({
            title: 'process file:'
        }))
        .pipe(g.ngHtml2js({
            moduleName: moduleName,
            prefix: prefix,
            template: "templateCacheInjector.put('<%= template.url %>', '<%= template.prettyEscapedContent %>');\n"
        }))
        .pipe(g.concat('templates.js'))
        .pipe(g.insert.wrap(
            "(function(module) {\n" +
            "  try {\n" +
            "    module = angular.module('" + moduleName + "');\n" +
            "  }\n" +
            "  catch(e) {\n" +
            "    module = angular.module('" + moduleName + "', []);\n" +
            "  }\n" +
            "  module.run(['templateCacheInjector', function(templateCacheInjector) {\n",
            // ngHtml2js output is wrapped here
            "  }]);\n" +
            "})();\n"
        ))
        .pipe(g.uglify())
        .pipe(gulp.dest(dest));

});

gulp.task('build:concat', ['build:html'], function(callback) {

    var src = [
        utils.resolve(config.paths.target, 'scripts/main.js'),
        utils.resolve(config.paths.target, 'scripts/templates.js')
    ];
    var dest = path.resolve(config.paths.target, 'scripts');

    gulp.src(src)
        .pipe(g.concat('main.js'))
        .pipe(gulp.dest(dest))
        .on('end', del.bind(null, src[1], callback));
});

// Only bundle templates
gulp.task('build:bundleTemplates', ['build:html', 'build:concat'], function(done) {
    done();
});

// Build all
gulp.task('build', ['build:images', 'build:scripts', 'build:styles'], function(done) {
    done();
});

var gulpDocs = function() {
    var params = {
        //template: fs.readFileSync(path.resolve(__dirname, './tasks/docs/templates/README.hbs'), 'utf8' )  // not used
    };
    var src = [
        config.paths.scripts + '/**/*.js',
        '!**/node_modules/**/*.js',
        '!**/bower_components/**/*.js',
        '!**/dist/**/*.js',
        '!**/test/**/*.js', // ignore linting tests
        '!**/deprecated/**/*.js',
        '!**/migration/**/*.js'
    ];
    return gulp.src(src)
        .pipe(g.concat('api-dev.md'))
        .pipe(gulpJsdoc2md(params))
        .pipe(gulp.dest(config.paths.docs))
};

gulp.task('build:docs', [], gulpDocs);
// not supporting params yet
exports.docs = function(params) {
    return new Promise(function(resolve, reject) {
        return gulpDocs(resolve, reject);
    });
};

exports.build = function(args) {
    var customConfig = args.config || {};
    config.withModuleId = args.withModuleId || false;

    config.excludes = customConfig.excludes ? customConfig.excludes : args.excludes ? args.excludes : null;

    config.customTarget = customConfig.entryPoint ? customConfig.entryPoint : args.entryPoint ? args.entryPoint : undefined;

    config.withPerformance = args.withPerformance || false;
    // dirty fix for know to add production plugins for webpack config
    config.isBuild = true;
    return new Promise(function(resolve) {
        runSeq(['build'], resolve);
    });
};

/*
 * @function createBundle - it creates bundle of widgets with (optional)
 * customised dependencies
 *
 * @param [Object] customConfig - custom build configuration JSON-object
 *
 * @param [String] customConfig.dist - bundles destination folder
 *
 * @param [Array] customConfig.externals - array of [String]s or [Object]s which represents
 * set of modules to exclude from every bundle (frameworks, libs, etc.)
 *
 * @param [Boolean] customConfig.verbose - it turns on/off additional output
 * (including set of modules included into each bundle)
 *
 * @param [String] customConfig.componentsBase - bundle components base path
 *
 * @param [String] customConfig.componentMain - component main script path
 *
 * @param [Object] customConfig.bundles - set of bundle [Object]s. Bundle names are used to
 * define bundle file name ([name]-bundle.js, e.g. my-awesome-bundle.js)
 *
 * @param [Array] customConfig.bundles[name].widgets - set of included widget names
 *
 * @param [Object] customConfig.bundles[name].customComponents - set of modules with
 * custom components under the hood
 *
 * @param [String] customConfig.bundles[name].customComponents[name]
 * [name] of component should be the same as in bower.json
 *
 * @param [Array] customConfig.bundles[name].customComponents[name].excludes-
 * components to exclude (e.g.  require('./components/[COMPONENT]/scripts/main').name)
 * should be similar to nested component path
 *
 * @Example
 *
 * {
 *   "dist": "./bundles",
 *   "bundles": {
 *       "login-page": {
 *           "widgets": ["widget-login-multifactor-engage", "widget-device-dna"],
 *           "customComponents": {
 *               "ui": {
 *                   "excludes": ["timer", "smartsuggest"]
 *               },
 *           }
 *       },
 *       "home-page": {
 *           "widgets": ["widget-home-page", "widget-transactions"]
 *       }
 *   },
 *   "externals": ["angular", {"name": "jquery", "value": "jQuery"}],
 *   "verbose": true
 * }
 */

exports.createBundle = function(customConfig, bundleName, useDist) {
    customConfig = customConfig || {};
    var componentBase = customConfig.componentBase || 'bower_components';
    var componentMain = customConfig.componentMain || 'scripts/main.js';

    // check if bundle exists & not empty
    var bundle = customConfig.bundles[bundleName];
    if (!bundle.widgets || !bundle.widgets.length) {
        throw new Error('Bundle can`t be empty');
    }

    var sources = [];
    // we have to use core as a default value.
    var entries = bundle.widgets.reduce(function(entries, widget) {
        if (typeof widget === "string") {
            entries[widget] = './' + path.join(componentBase, widget, componentMain);
            sources.push(entries[widget]);
        } else if (typeof widget === "object" && widget.hasOwnProperty('name') && widget.hasOwnProperty('path')) {
            entries[widget.name] = widget.path;
            sources.push(entries[widget.name]);
        }
        return entries;
    }, {
        "core": ["./bower_components/core/scripts/main.js"]
    });

    return new Promise(function(resolve, reject) {
        gulp.src(sources)
            .pipe(named())
            .pipe(webpackStream(createBundleConfig({
                entries: entries,
                verbose: customConfig.verbose,
                externals: customConfig.externals || [],
                bundle: bundle,
                componentBase: componentBase,
                componentMain: componentMain,
                withPerformance: customConfig.withPerformance
            })))
            .pipe(g.ngAnnotate())
            .pipe(useDist ? gulpEmpty() : g.uglify({
                mangle: {
                    except: ['require']
                }
            }))
            .pipe(g.concat(bundleName + '-bundle.js'))
            .pipe(g.size({
                title: bundleName,
                showFiles: false
            }))
            .pipe(gulp.dest(path.resolve(customConfig.dist || './bundles')));
    });
};

/**
 * @todo refactor to use special webpack-config file
 */
function createBundleConfig(options) {
    var conf = utils.deepMerge(globalWebpackConf, {
        entry: options.entries,
        output: {
            filename: "[name].js",
            id: "[name]"
        },
        verbose: !!options.verbose,
        quiet: !options.verbose,
        externals: options.externals.reduce(function(externals, widget) {
            var widgetIsObject = typeof(widget) === "object";
            if (widgetIsObject && (!widget.name || !widget.value)) return externals;

            externals[widgetIsObject ? widget.name : widget] = widgetIsObject ? widget.value : true;
            return externals;
        }, {}),
        module: {
            loaders: [{
                test: /bower_components(\/|\\)([\w\-\d]+)(\/|\\)scripts(\/|\\)main\.js/,
                loader: "custom-deps-loader"
            }, {
                test: /bower_components(\/|\\)([\w\-\d]+)(\/|\\)scripts(\/|\\)main\.js/,
                loader: "injecting-loader"
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.js$/,
                loader: 'performance'
            }]
        },
        customDepsLoader: {
            customComponents: options.bundle.customComponents || [],
            componentBase: options.componentBase,
            componentMain: options.componentMain
        },
        injectingLoader: {
            condition: function() {
                // not a widget-* file
                return !~this.resource.indexOf('widget-');
            },
            injectingDependency: '../dist/styles/base.css'
        },
        performanceLoader: getPerformanceLoaderOptions(options.withPerformance)
    });

    // using custom plugins set
    conf.plugins = [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jQuery'
        }),
        new BowerWebpackPlugin({
            modulesDirectories: [path.resolve("./bower_components"), "bower_components"],
            manifestFiles: "bower.json",
            includes: /\.js$/,
            excludes: [],
            searchResolveModulesDirectories: true
        }),
        new CustomLibraryTemplatePlugin("umd", "[name]"),
        // base should be placed in a chunk
        new webpack.optimize.CommonsChunkPlugin("base", "base.js")
    ];

    return conf;
}

exports.build.bundleTemplates = function() {
    return new Promise(function(resolve) {
        runSeq(['build:bundleTemplates'], resolve);
    });
};

exports.start = function() {
    gulp.start('start');
};

exports.template = function(src, data, options) {
    var paths = [
        src + '/**'
    ];

    var processImages = options && options.processImages;
    if (!processImages) {
        var base = '!' + src + '/**/*.';
        paths = paths.concat([
            base + 'png',
            base + 'jpg',
            base + 'jpeg',
            base + 'webp',
            base + 'gif',
            base + 'tiff',
            base + 'bmp'
        ]);
    }

    return new Promise(function(resolve, reject) {
        gulp.src(paths)
            .pipe(g.template(data))
            .pipe(gulp.dest(src))
            .on('end', resolve)
            .on('error', reject);
    });
};

/*----------------------------------------------------------------*/
/* Clean up folders
/*----------------------------------------------------------------*/
exports.clean = function() {
    var paths = [
        config.paths.target,
        config.paths.reports
    ];
    return new Promise(function(resolve) {
        del(paths, resolve);
    });
};

/*----------------------------------------------------------------*/
/* Test
/*----------------------------------------------------------------*/
exports.test = function(params) {
    var Server = require('karma').Server;
    var defaultConfig = './configs/karma.conf.js';
    if (params.options.config) {
        defaultConfig = utils.projectPath(params.options.config);
    }
    var karmaConfPath = path.resolve(__dirname, defaultConfig);

    var params = utils.assign(params, {
        configFile: karmaConfPath,
        singleRun: !params.options.watch
    });

    return new Promise(function(resolve, reject) {
        // Until this is solved https://github.com/karma-runner/karma/issues/926
        // manually check for the test configuration folder
        try {
            var stats = fs.lstatSync(config.paths.test);
            // Is it a directory?
            if (stats.isDirectory()) {
                (new Server(params, function(code) {
                    // karama exits with 1 if no tests are found :( .
                    // https://github.com/karma-runner/karma/issues/926
                    if (code > 0) {
                        reject(new Error('Something went wrong while running the tests: exit code ' + code));
                    } else {
                        resolve();
                    }
                })).start();
            }
        } catch (err) {
            display.warn('Test folder not found at', colors.info(config.paths.test));
            resolve();
        }
    });
};

/*----------------------------------------------------------------*/
/* Lint
/*----------------------------------------------------------------*/
exports.lint = function() {
    return new Promise(function(resolve) {
        gulp.start('test:lint', resolve);
    });
};

/*----------------------------------------------------------------*/
/* Register
/*----------------------------------------------------------------*/
exports.registerPackage = function(params) {

    var endpoint, method, payload;
    var repo = config.repository.url || undefined;
    var manager = params.args[0];

    var registry = params.options.registry || 'http://launchpad.backbase.com:5678';
    var force = params.options.force ? '--force' : '';
    var name = config.name; // check for bower for scoped names
    var error, npmCmd;
    if (manager === 'npm') {
        registry = 'http://launchpad.backbase.com:8765';
    } else {
        // remove scoped names in case of bower
        name = path.basename(name);
    }
    switch (params.cmd) {
        case 'publish':
            method = 'POST';
            endpoint = '/packages/' + name;
            payload = '{"url":"' + repo + '"}';
            npmCmd = utils.template('npm publish --registry ${registry}');
            break;
        case 'unpublish':
            method = 'DELETE';
            endpoint = '/packages/' + name;
            npmCmd = utils.template('npm unpublish --registry ${registry} ${force}');
            break;
    }
    var url = utils.trimRight(registry, '/') + endpoint;
    display.info(params.cmd.toUpperCase() + ' ' + colors.bold(manager) + ' package...', colors.info(registry));
    if (manager === 'npm') {
        return new Promise(function(resolve, reject) {
            var cmd = npmCmd({
                registry: registry,
                force: force
            });
            return shell.exec(cmd, {
                silent: true
            }, function(code, output) {
                if (code > 0) {
                    display.error('Unable to register package using', colors.error(cmd));
                    reject(output);
                }
                resolve(cmd);
                return cmd;
            });
        });
    } else {
        return new Promise(function(resolve, reject) {
            var question = [{
                type: 'input',
                name: 'password',
                message: 'Password',
                validate: function(value) {
                    if (utils.isEmpty(value)) {
                        return 'Password is required';
                    } else {
                        return true;
                    }
                }
            }];
            utils.prompt(question).then(function(answers) {

                var tpl = 'curl -H "Auth-Key:${password}" -H "Content-Type: application/json" --request ${method} "${url}"';
                if (payload) {
                    tpl += ' -d \'${payload}\'';
                }
                var cmd = utils.template(tpl)({
                    url: url,
                    method: method,
                    name: name,
                    repo: repo,
                    payload: payload,
                    password: answers.password
                });

                if (!name) {
                    throw new Error('Repository name is missing');
                }
                if (!shell.which('curl')) {
                    throw new Error('Sorry, this script requires curl');
                }
                // # TODO test for valid repos
                if (utils.isUndefined(repo)) {
                    throw new Error('Repository url is missing.');
                }
                if (utils.isUndefined(registry) || !utils.isString(registry)) {
                    throw new Error('Invalid registry format.');
                }

                shell.exec(cmd, {}, function(code, output) {
                    if (code > 0) {
                        throw new Error(output);
                    }
                    resolve(cmd);
                    return cmd;
                });
            });

        });
    }
};

exports.register = function(registry) {
    return setPackage(registry, 'register');
};
exports.unregister = function(registry) {
    return setPackage(registry, 'remove');
};
