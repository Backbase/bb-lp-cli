var gulp = require('gulp');
var path = require('path');
var utils = require('../../utils');
var tasks = require('../../tasks');
var through = require('through2');
var plugins = require('gulp-load-plugins')();
var Promise = require('promise');

function distDirname(dirname, dist) {
    return dirname.replace('styles', path.join(dist, 'styles'));
}

function compile(entry, options) {
    return new Promise(function(resolve, reject) {
        var files = [];

        gulp.src(entry, { base: options.target })
            .pipe(plugins.if(function() { return !!options.sourcemaps; }, plugins.sourcemaps.init()))
            .pipe(plugins.debug({ title: 'compiling' }))
            .pipe(plugins.less({
                modifyVars: utils.merge({}, { // use options if defined.
                    edition: options.edition,
                    'base-path': options['base-path'] || undefined
                })
            }))
            .on('error', reject)
            .pipe(plugins.rename(function(path) {
                path.dirname = distDirname(path.dirname, options.dist);
                path.basename = 'base';
            }))
            .on('error', reject)
            .pipe(plugins.if(function() { return !!options.sourcemaps; }, plugins.sourcemaps.write('.')))

            // Save files for promise resolve.
            .pipe(through.obj(function(file, enc, cb) {
                if (file.path.substring(file.path.length - 4) !== '.map') {
                    files.push(file.path);
                }
                cb(null, file);
            }))

            .pipe(plugins.debug({ title: 'writing' }))
            .pipe(gulp.dest(options.target))
            .on('end', function() {
                resolve(files);
            });
    });
}

function reworkIe(files, options) {
    // Helper function to plugins.rework CSS for IE8.
    function reworkIe8(ast) {
        // Push custom rule for IE8 to prevent responsiveness.
        ast.rules.push({
            type: 'rule',
            selectors: ['.container-fluid'],
            declarations: [
                {
                    type: 'declaration',
                    property: 'min-width',
                    value: '1024px'
                }
            ]
        });
    }

    return new Promise(function(resolve, reject) {
        // Create .ie.css for ie8 support (TODO: drop ie8 support).
        gulp.src(files, { base: options.target })
            .pipe(plugins.debug({ title: 'reworking' }))
            .pipe(plugins.rename({
                suffix: '.ie',
                extname: '.css'
            }))
            .pipe(plugins.mqRemove({ width: '1024px' }))
            .pipe(plugins.rework(reworkIe8))
            .pipe(plugins.debug({ title: 'writing' }))
            // Save files for promise resolve.
            .pipe(through.obj(function(file, enc, cb) {
                files.push(file.path);
                cb(null, file);
            }))
            .pipe(gulp.dest(options.target))
            .on('error', reject)
            .on('end', function() {
                resolve(files);
            });
    });
}

function compress(entry, options) {
    return new Promise(function(resolve, reject) {
        gulp.src(entry, { base: options.target })
            .pipe(plugins.debug({ title: 'compressing' }))
            .pipe(plugins.if(function() { return !!options.sourcemaps; }, plugins.sourcemaps.init({ loadMaps: true })))
            .pipe(plugins.minifyCss({ keepBreaks: true }))
            .pipe(plugins.rename({
                suffix: '.min',
                extname: '.css'
            }))
            .pipe(plugins.if(function() { return true; }, plugins.sourcemaps.write('.')))
            .pipe(plugins.debug({ title: 'writing' }))
            .pipe(gulp.dest(options.target))
            .on('error', reject)
            .on('end', resolve);
    });
}

function copyAssets(entry, options) {
    var fontGlob = path.join('**', '*.{ttf,woff,woff2,eof,svg}');
    var imageGlob = path.join('**', '*.{jpg,jpeg,png,svg,gif}');
    var noDistGlob = path.join('!**', options.dist, '**'); // don't copy from `dist` directories
    var noBowerGlob = path.join('!bower_components', '**'); // don't copy from `bower_components` directories

    gulp.task('copyThemeAssets', [], function() {
        var basePath = path.join('bower_components', 'theme');
        var universalAssets = gulp.src([
            path.join(basePath, 'universal', fontGlob),
            path.join(basePath, 'universal', imageGlob)
        ], { follow: true });
        var retailAssets = gulp.src([
            path.join(basePath, 'retail', fontGlob),
            path.join(basePath, 'retail', imageGlob)
        ], { follow: true });
        return plugins.merge(universalAssets, retailAssets)
            .pipe(plugins.debug({ title: 'copying' }))
            .pipe(gulp.dest(options.dist));
    });

    gulp.task('copyBowerAssets', ['copyThemeAssets'], function() {
        var assets = gulp.src([
            path.join('bower_components', fontGlob),
            path.join('bower_components', imageGlob),
            path.join('!bower_components', 'theme', '**')
        ], { follow: true });
        return assets
            .pipe(plugins.debug({ title: 'copying' }))
            .pipe(plugins.rename(function(file) {
                // drop the module name from the path
                file.dirname = path.join.apply(null, file.dirname.split(path.sep).slice(1));
            }))
            .pipe(gulp.dest(options.dist));
    });

    return new Promise(function(resolve, reject) {
        gulp.task('copyAssets', ['copyThemeAssets', 'copyBowerAssets'], function() {
            var assetPaths = [
                fontGlob,
                imageGlob,
                noBowerGlob,
                noDistGlob
            ];
            return gulp.src(assetPaths, { follow: true })
                .pipe(plugins.debug({ title: 'copying' }))
                .pipe(gulp.dest(options.dist))
                .on('error', reject)
                .on('end', resolve);
        });

        gulp.start('copyAssets');
    });
}

function importItem(){
    return new Promise(function(resolve, reject) {
        gulp.start('deploy:item');
    });
}

module.exports = {
    compile: compile,
    ie: reworkIe,
    compress: compress,
    assets: copyAssets,
    'import': importItem
};