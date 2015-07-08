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
var runSeq = require('run-sequence').use(gulp);
var config = require('./config');
var shell = utils.shell();

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
        .pipe(g.less())
        .pipe(gulp.dest(config.paths.styles));
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
