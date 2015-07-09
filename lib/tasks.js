'use strict';
/*----------------------------------------------------------------*/
/* Gulp Tasks
/*----------------------------------------------------------------*/
var utils = require('./utils');
var display = utils.display();
var gulp = require('gulp');
var path = require('path');
var Promise = require('promise');
var del = require('del');
var g = require('gulp-load-plugins')();
var proxy = require('proxy-middleware');
var server = require('browser-sync');
var url = require('url');
var runSeq = require('run-sequence').use(gulp);
var config = require('./config');
var shell = utils.shell();
var modRewrite = require('connect-modrewrite');

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
        .pipe(g.webpack(webpackConf))
        .pipe(g.ngAnnotate())
        .pipe(gulp.dest(config.paths.target));
});

gulp.task('compile:styles', [], function() {
    return gulp.src(config.paths.styles + '/base.less')
        // Use less compiler
        .pipe(g.less()).on('error', g.notify.onError())
        // Use sass compiler
        .pipe(server.reload({
            stream: true
        }))
        .pipe(gulp.dest(config.paths.styles));
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
        '.+/bower_components/(.*)$ /bower_components/$1 [L]'
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
    var rules = require(path.resolve(__dirname, './configs/eslint.conf.json'));
    var src = [
        config.paths.scripts + '/**/*.js',
        '!**/_migration/**/*.js'
    ];
    gulp.src(src)
        .pipe(g.eslint(rules))
        .pipe(g.eslint.format())
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


gulp.task('build:html', function () {

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
        // .pipe(g.concat('main.min.js'))
        .pipe(gulp.dest(config.paths.target + '/scripts'));
});

// Build styles
gulp.task('build:styles', ['compile:styles'], function() {
    var src = path.resolve(config.paths.styles, 'base.css');
    var target = path.resolve(config.paths.target, 'styles');

    return gulp.src(src)
        // .pipe(g.changed(target))
        .pipe(g.less({
            compress: true
        }))
        .pipe(gulp.dest(target));

});

// Build images
gulp.task('build:images', [], function() {
    var src = path.resolve(config.paths.media, '*');
    var target = path.resolve(config.paths.target);
    return gulp.src(src,{base: '.'})
        .pipe(g.changed(target))
        .pipe(gulp.dest(target));

});
// Build all
gulp.task('build', ['build:images', 'build:scripts', 'build:styles', 'build:html'], function(done) {
    done();
});




exports.build = function() {
    return new Promise(function(resolve) {
        runSeq(['build'], resolve);
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
exports.test = function(watch) {
    var karma = require('karma').server;

    var karmaConf = path.resolve(__dirname, './configs/karma.conf.js');
    var reporters = ['mocha'];
    if(/^darwin/.test(process.platform)) {
        reporters.push('osx');
    }
    var opts = {
        configFile: karmaConf,
        singleRun: !watch,
        reporters: reporters
    };
    // display.info('Using options:' + utils.logObj(opts) );
    return new Promise(function(resolve, reject) {
        karma.start(opts, function(code){
            if(code > 0) { reject(new Error('Testing failed!')); }
            else { resolve(); }
        });
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
    var endpoint;
    switch(flag) {
        case 'register':
            endpoint = '/registerPackage';
        break;
        case 'remove':
            endpoint = '/removePackage';
        break;
    }

    var url = utils.trimRight(registry, '/') + endpoint;

    var repo = config.repository.url || undefined;
    var name = config.name;
    var error;

    var tpl = utils.template('curl --request POST "${url}" -d name="${name}" -d repo="${repo}"');
    var cmd = tpl({
        url: url,
        name: name,
        repo: repo
    });
    return new Promise(function(resolve, reject) {
        if (!name) {
            error = 'Repository name is missing';
            reject(error);
            throw new Error(error);
        }
        if ( ! shell.which('curl')) {
            error = 'Sorry, this script requires curl';
            reject(error);
            throw new Error(error);
        }
        // # TODO test for valid repos
        if( utils.isUndefined(repo) ) {
            error = 'Repository url is missing.';
            reject(error);
            throw new Error(error);
        }
        if(utils.isUndefined(registry) || !utils.isString(registry)) {
            error = 'Invalid registry format.';
            reject(error);
            throw new Error(error);
        }

        shell.exec(cmd, {},function(code, output) {
            if(code > 0) {
                reject(output);
                throw new Error(output);
            }
            resolve(cmd);
            return cmd;
        });

    });
}

exports.register = function(registry) {
    return setPackage(registry, 'register');
};
exports.unregister = function(registry) {
    return setPackage(registry, 'remove');
};
