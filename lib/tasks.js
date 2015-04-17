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



gulp.task('compile:scripts', [], function() {

    var webpackConf = utils.deepMerge(require(path.resolve(__dirname, './configs/webpack.conf.js')), {
        output: {
            filename: config.main,
            library: config.name
        }
    });
    webpackConf.externals.unshift(/^[a-z\-0-9]+$/);
    console.log(webpackConf);
    return gulp.src( path.resolve(config.main) )
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


gulp.task('start', ['test:lint', 'compile:scripts', 'compile:styles', 'server'], function() {
    // watch scripts
    gulp.watch([
        config.paths.scripts + '/**/*.js'
    ], ['test:lint', 'compile:scripts', 'server:reload']);

    gulp.watch([
        config.paths.styles + '/**/*.less',
        config.paths.scripts + '/components/**/*.less'
    ], ['compile:styles']);


    gulp.watch([
        config.paths.index,
        config.paths.templates + '/**/*.html'
    ], ['server:reload']);

});


gulp.task('build:html', function () {

});

gulp.task('build:scripts', ['compile:scripts'], function() {
    return gulp.src([
            path.resolve(config.paths.target, config.main)
        ])
        .pipe(g.uglify({
            mangle: {
                except: ['require']
            }
        }))
        // .pipe(g.concat('main.min.js'))
        .pipe(gulp.dest(config.paths.target + '/scripts'));
});

// Build
gulp.task('build:styles', ['compile:styles'], function() {

    return gulp.src(config.paths.styles + '/base.css')
        .pipe(g.less({
            compress: true
        }))
        .pipe(gulp.dest(config.paths.target + '/styles'));

});




exports.build = function() {
    return new Promise(function(resolve) {
        runSeq(['build:scripts', 'build:styles'], 'build:html', resolve);
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
