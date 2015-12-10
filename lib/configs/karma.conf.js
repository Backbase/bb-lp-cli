'use strict';
var path = require('path');
var webpack = require('webpack');
var utils = require('../utils');
var fs = require('fs');
var display = utils.display();
var shell = utils.shell();
var colors = utils.colors();
var yaml = require('node-yaml-config');
var config = require('../config');

var webpackConf = utils.deepMerge(require(path.resolve(__dirname, './webpack.conf.js')),  {
    // extension
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['isparta'],
            // exclude node_modules and test files
            exclude: /node_modules|features|test|bower_components|\.test.js$|\.spec\.js$/
        }]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(config.tests.requestInternalRegExp, config.tests.includeInternalRegExp)
    ]
    devtool: 'inline-source-map'
});
webpackConf.externals.slice(0, 1); //remove externals

var reportsPath = path.join(config.paths.reports, config.name + '-v' +  config.version);

module.exports = function(karmaConfig) {
    display.info('Running tests with:', colors.info('Karma'));
    var options = utils.defaults(karmaConfig.options , {});

    var moduleDirectories = options.moduleDirectories && options.moduleDirectories.split(',') || [];
    moduleDirectories = webpackConf.resolve.modulesDirectories.concat(moduleDirectories);
    webpackConf.resolve.modulesDirectories = moduleDirectories

    var reporters = ['mocha'];
    var browsers = ['PhantomJS'];
    var preprocessors = {};

    var entry = utils
        .projectPath(config.paths.test + '/unit/index.js')
        .replace(/\[(.+?)\]/g, function($0, $1) {
            return '\\[' + $1 +'\\]';
        });

    preprocessors[entry] = ['webpack', 'sourcemap'];
    if(options.coverage) {
        reporters.push('coverage');
    }

    var defaultConfig = {
        // ... normal karma configuration
        basePath: '',
        frameworks: ['jasmine'],
        coverageReporter: {
            dir : path.resolve(reportsPath, 'coverage'),
            reporters: [
                {type: 'lcov'},
                {type: 'cobertura'},
                {type: 'text-summary'}
            ]
        },

        reporters: reporters,
        preprocessors: preprocessors,
        browsers: browsers,
        browserNoActivityTimeout: 60000,
        files: [
            '../shims/bind.js',
            '../../node_modules/jasmine-expect/dist/jasmine-matchers.js',
            entry
        ],
        mochaReporter: {
          output: 'autowatch'
        },
        logLevel: 'error',
        webpack: webpackConf,
        webpackMiddleware: {
            noInfo: true,
            stats: {
                colors: true
            }
        },
        plugins: ['karma-*']
    };

    var customConfig = config.karma;
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
        customConfig = path.resolve('configs', 'karma.conf');
        yamlCustomConfigPath = utils.projectPath(customConfig) + '.yaml';
        jsonCustomConfigPath = utils.projectPath(customConfig) + '.json';
    }

    if (shell.test('-f', yamlCustomConfigPath)) {
        customConfigPath = yamlCustomConfigPath;
        configOptions = yaml.load(customConfigPath, process.argv.NODE_ENV);
    } else if(shell.test('-f', jsonCustomConfigPath)) {
        customConfigPath = jsonCustomConfigPath;
        configOptions = require(customConfigPath);
    }

    defaultConfig = utils.assign(defaultConfig,configOptions);
    if(options.browsers) {
        utils.merge(browsers, options.browsers.split(','))
    }
    display.info('Launching browsers:', colors.info(defaultConfig.browsers));

    if(customConfigPath) {
        display.info('Using custom karma config file:',  colors.info(customConfigPath));
    }

    if(utils.includes(defaultConfig.reporters, 'coverage')) {
        display.info('Recording coverages:', colors.info(reportsPath));
    }


    karmaConfig.set(defaultConfig);

};
