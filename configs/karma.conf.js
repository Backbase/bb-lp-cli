'use strict';
var path = require('path');
var webpack = require('webpack');
var config = require('../lib/config');

module.exports = function(karmaConfig) {
    var preprocessors = {};
    preprocessors[path.resolve(config.paths.test, 'unit/index.js')] = ['webpack'];

    karmaConfig.set({
        // ... normal karma configuration
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            '../node_modules/jasmine-expect/dist/jasmine-matchers.js',
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
        logLevel: karmaConfig.LOG_ERROR,
        webpack: {
            resolve: {
                modulesDirectories: ['resources', 'node_modules', 'features', 'bower_components']
            },
            plugins: [
                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
                ),
                new webpack.ProvidePlugin({
                    jQuery: 'jQuery'
                })
            ],
            quiet: true,
            // It suppress everything except error, so it has to be set to false as well
            // to see success build.
            noInfo: false,
            stats: {
                // Config for minimal console.log mess.
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        },
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
