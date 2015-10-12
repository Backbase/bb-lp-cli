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
var webpack = require('webpack-stream');
var g = require('gulp-load-plugins')();
var proxy = require('proxy-middleware');
var server = require('browser-sync');
var url = require('url');
var runSeq = require('run-sequence').use(gulp);
var config = require('./config');
var shell = utils.shell();
var colors = utils.colors();
var modRewrite = require('connect-modrewrite');
var pkg = require('../package.json');
var yaml = require('js-yaml');

var prependBanner = function() {
    var BANNER = ['/**',
    '* Build with ${ pkg.name }',
    '* @version v${ pkg.version }',
    '* @link ${ pkg.homepage }',
    '*/',
    ''].join('\n');
    return g.header(BANNER, {
        pkg : pkg,
        sys : {
            date: new Date()
        }
    });
}

gulp.task('compile:scripts', [], function() {

    var main = utils.bowerMainJs(config.main);

    var webpackConf = utils.deepMerge(require(path.resolve(__dirname, './configs/webpack.conf.js')), {
        entry: utils.orderMain(config.main),
        output: {
            filename: main,
            library: config.name
        }
    });
    webpackConf.externals.unshift(/^[a-z\-0-9]+$/);
    return gulp.src( path.resolve(main) )
        .pipe(webpack(webpackConf))
        .pipe(g.ngAnnotate())
        .pipe(gulp.dest(config.paths.target));
});

gulp.task('server', [], function() {
    var proxies = config.proxies;
    var paths = config.paths;
    var middleWares = [];
    Object.keys(proxies).forEach(function(k){
        var proxyOptions = url.parse(proxies[k]);
        proxyOptions.route = k;
        middleWares.push(proxy(proxyOptions));
    });
    // Rewrite all bower_components to /bower_components
    middleWares.push(modRewrite([
        '.+/bower_components/(.*)$ /bower_components/$1 [L]',
        '.+launchpad/modules/(.*)$ /bower_components/$1 [L]',
        '.+features/.BBHOST./(.*)$ /bower_components/$1 [L]'
    ]));
    server({
        open: false,
        //files: [ paths.scripts ],
        server: {
            baseDir: ['./', paths.target],
            minify: true,
            index: paths.index,
            // proxy: 'localhost:7777',
            middleware: middleWares
        }
    });
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

    if(! utils.isUndefined(customConfig)) {
        if( utils.fileIs(customConfig, 'yaml')) {
            yamlCustomConfigPath = utils.projectPath(customConfig);
        } else if( utils.fileIs(customConfig, 'json') ) {
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
    } else if(shell.test('-f', jsonCustomConfigPath)) {
        customConfigPath = jsonCustomConfigPath;
        configOptions = require(customConfigPath);
    }
    if(customConfigPath) {
        display.info('Using custom karma config file:',  colors.info(customConfigPath));
    }
    rules = utils.assign(rules, configOptions);

    var cache = require('gulp-cached');
    var src = [
        config.paths.scripts + '/**/*.js',
        '!**/node_modules/**/*.js',
        '!**/bower_components/**/*.js',
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
        config.paths.styles + '/**/*.less',
        config.paths.scripts + '/**/*.less',
        config.paths.scripts + '/**/*.js'
    ], ['test:lint', 'build:scripts', 'server:reload']);

    gulp.watch([
        config.paths.styles + '/**/*.less',
        config.paths.scripts + '/**/*.less'
    ], ['build:styles']);


    gulp.watch([
        config.paths.index,
        config.paths.templates + '/**/*.html'
    ], ['server:reload']);

});


gulp.task('build:scripts', ['compile:scripts'], function() {
    var main = utils.bowerMainJs(config.main);

    return gulp.src([
            path.resolve(config.paths.target, main)
        ])
        .pipe(g.uglify({
            mangle: {
                except: ['require']
            }
        }))
        .pipe(prependBanner())
        .pipe(gulp.dest(config.paths.target + '/scripts'));
});

// Build styles
gulp.task('build:styles', [], function() {
    return gulp.src(config.paths.styles + '/base.less')
        // Use less compiler
        .pipe(g.lessSourcemap({
            compress: true,
            sourceMap: {
                sourceMapFileInline: false,
                sourceMapBasepath: path.resolve('./'),
                sourceMapRootpath: "/"
            }
        })).on('error', g.notify.onError())
        // Use sass compiler
        .pipe(server.reload({
            stream: true
        }))
        .pipe(prependBanner())
        .pipe(gulp.dest(config.paths.styles))
        .pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
});

// Build images
gulp.task('build:images', [], function() {
    var src = path.resolve(config.paths.media, '*');
    var target = path.resolve(config.paths.target);
    return gulp.src(src,{base: '.'})
        .pipe(g.changed(target))
        .pipe(gulp.dest(target));
});

// Bundle HTML templates into JS

gulp.task('build:html', [], function () {

    var src = path.resolve(config.paths.templates, '*.html');
    var dest = path.resolve(config.paths.target, 'scripts');
    var moduleName = ['launchpad', config.name, 'templates'].join('.');
    var prefix = path.normalize(config.paths.templates + '/');

    return gulp.src(src)
        .pipe(g.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(g.debug({title: 'process file:'}))
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
        path.resolve(config.paths.target, 'scripts/main.js'),
        path.resolve(config.paths.target, 'scripts/templates.js')
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




exports.build = function() {
    return new Promise(function(resolve) {
        runSeq(['build'], resolve);
    });
};

exports.build.bundleTemplates = function() {
    return new Promise(function(resolve) {
        runSeq(['build:bundleTemplates'], resolve);
    });
};

exports.start = function() {
    display.info('Using config:', utils.logObj(config));
    gulp.start('start');
};

exports.template = function(src, data) {
    // # TODO exclude some paths
    var paths = [
        src + '/**'
    ];
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
        config.paths.target
    ];
    return new Promise(function(resolve) {
        del( paths, resolve);
    });
};
/*----------------------------------------------------------------*/
/* Test
/*----------------------------------------------------------------*/
exports.test = function(options) {
    var Server = require('karma').Server;
    var defaultConfig = './configs/karma.conf.js';
    if( options.config ){
        defaultConfig = utils.projectPath(options.config);
    }
    var karmaConfPath = path.resolve(__dirname, defaultConfig);

    var opts = {
        configFile: karmaConfPath,
        singleRun: !options.watch,
        options: options
    };

    return new Promise(function(resolve, reject) {
        (new Server(opts, function(code) {
            if(code > 0) {
                reject(new Error('Something went wrong while running the tests: exit code ' + code));
            }
            else { resolve(); }
        })).start();
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

var setPackage = function(registry, flag) {
    var endpoint, method, payload;
    var repo = config.repository.url || undefined;
    var name = config.name;
    var error;

    switch(flag) {
        case 'register':
            method = 'POST';
            endpoint = '/packages/' + name;
            payload = '{"url":"' + repo + '"}';
        break;
        case 'remove':
            method = 'DELETE';
            endpoint = '/packages/' + name;
        break;
    }

    var url = utils.trimRight(registry, '/') + endpoint;

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
            if ( ! shell.which('curl')) {
                throw new Error('Sorry, this script requires curl');
            }
            // # TODO test for valid repos
            if( utils.isUndefined(repo) ) {
                throw new Error('Repository url is missing.');
            }
            if(utils.isUndefined(registry) || !utils.isString(registry)) {
                throw new Error('Invalid registry format.');
            }

            shell.exec(cmd, {},function(code, output) {
                if(code > 0) {
                    throw new Error(output);
                }
                resolve(cmd);
                return cmd;
            });
        });

    });
}

exports.register = function(registry) {
    return setPackage(registry, 'register');
};
exports.unregister = function(registry) {
    return setPackage(registry, 'remove');
};
