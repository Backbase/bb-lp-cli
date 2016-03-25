'use strict';

/**
 * port existing theme build
 * https://github.com/Backbase/bb-cli/blob/nightly/commands/theme-build.js
 */

//
/*----------------------------------------------------------------*/
/* Build LP theme
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var gulp = require('gulp');
var tasks = require('./gulp');
var fs = require('fs-extra-promise');
var glob = require('promise').denodeify(require('glob'));
var Promise = require('promise');
var path = require('path');

/*----------------------------------------------------------------*/
/*
/*----------------------------------------------------------------*/
module.exports = function build(v) {
    var config = getConfig(v);
    if (config.watch) {
        gulp.watch(config.watchFiles, run.bind(null, utils.defaults({
            assets: false
        }, config)));
    }

    return run(config);
};

function getConfig(cmdArguments) {
    var target = cmdArguments.args[1];
    var config = utils.defaults({
        edition: cmdArguments.args[0],
        target: target,
        bowerFiles: target + '/**/bower.json',
        watchFiles: cmdArguments.options.watch && target + '/**/*.less',
        ignore: [
            target + '/**/bower_components/**',
            target + '/**/node_modules/**'
        ],
        ie: !!cmdArguments.options.ie,
        compress: !cmdArguments.options['disable-compress'],
        assets: !cmdArguments.options['disable-assets'],
        dist: cmdArguments.options.target
    }, cmdArguments.options);

    return config;
}

function run(config) {
    // Find bower.json files, as entry for themes.
    return glob(config.bowerFiles, { ignore: config.ignore })
        .then(utils.partial(buildAll, utils, config))
        .catch(function(err) {
            utils.handleError('Error: ' + err.message || err.error);
        });
}

function buildAll(files, options) {
    return Promise.all(
        files.map(function(f) {
            return fs.readJsonAsync(f)
                .then(utils.partial(buildTheme, utils, options));
        })
    );
}

function buildTheme(bowerJson, options) {
    // Normalise main to an array.
    // Prefix with target.
    var entry = [].concat(bowerJson.main).map(function(f) {
        return path.join(options.target, f);
    });

    return utils.reduce(['ie', 'compress', 'assets', 'deploy'], function(promise, action) {
        return promise.then(function(entry) {
            if (!options[action]) {
                return entry;
            }

            return tasks[action](entry, options);
        });
    }, tasks.compile(entry, options));
}