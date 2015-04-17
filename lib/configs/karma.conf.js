'use strict';
var path = require('path');
var webpack = require('webpack');
var utils = require('../utils');

var webpackConf = utils.merge( require(path.resolve(__dirname, './webpack.conf.js')), {});
webpackConf.externals.slice(0, 1); //remove externals

var config = require('../config');


module.exports = function(karmaConfig) {
    var preprocessors = {};
    preprocessors[path.resolve(config.paths.test, 'unit/index.js')] = ['webpack'];

    karmaConfig.set({
        // ... normal karma configuration
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            '../../node_modules/jasmine-expect/dist/jasmine-matchers.js',
            path.resolve(config.paths.test, 'unit/index.js')
        ],
        mochaReporter: {
          output: 'autowatch'
        },
        preprocessors: preprocessors,
        // karmaConfig.LOG_DISABLE
        // karmaConfig.LOG_ERROR
        // karmaConfig.LOG_WARN
        // karmaConfig.LOG_INFO
        // config.LOG_DEBUG
        // logLevel: karmaConfig.LOG_ERROR,
        webpack: webpackConf,
        webpackMiddleware: {
            noInfo: true,
            stats: {
                colors: true
            }
        },
        osxReporter: {
            activate: function(results, browser) {
                return results.failed > 0 ? 'com.apple.Terminal' : 'com.apple.Safari';
            }
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-mocha-reporter'),
            require('karma-webpack'),
            require('karma-osx-reporter')
        ]
    });
};
