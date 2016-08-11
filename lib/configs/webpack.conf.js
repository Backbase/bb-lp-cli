'use strict';
var config = require('../config');
var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, '../../node_modules');
var customLoadersPath = path.resolve(__dirname, '../loaders');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var autoprefixer = require('autoprefixer');

function getPerformanceLoaderOptions(enabled) {
    return {
        enabled: enabled,
        events: {
            start: 'cxp.performance.start',
            end: 'cxp.performance.end'
        }
    };
}
var modulesDirectories = [
    'resources',
    'node_modules',
    'features',
    'bower_components',
    'target/bower_components'
];

module.exports = {
    output: {},
    cache: true,
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
    },
    resolve: {
        modulesDirectories: modulesDirectories,
        root:[
          node_modules,
        ],
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'raw!html-minify' },
            { test: /\.xml$/, loader: 'raw' },
            { test: /\.(scss|sass)$/, loader: 'style!raw!sass!postcss' },
            { test: /\.less$/, loader: 'style!css!less!postcss' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.(jpg|jpeg|gif|png)$/, loader: 'file' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
            { test: /\.js$/, loader: 'performance' }, {
                test: /[\/]angular\.js$/,
                loader: 'exports?angular' // angular doesn't play nicely with CommonJS
            }, {
                test: /\.jsx?$/, // optional reactjs
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    retainLines: true,
                    presets: [
                        path.resolve(node_modules, 'babel-preset-es2015'),
                        path.resolve(node_modules, 'babel-preset-react')
                    ],
                    plugins: [
                        path.resolve(node_modules, 'babel-plugin-add-module-exports')
                    ]
                }
            }
        ]

    },
    postcss: function() {
        return [autoprefixer(config.autoprefixer)];
    },
    performanceLoader: getPerformanceLoaderOptions(config.withPerformance),
    resolveLoader: {
        modulesDirectories: [customLoadersPath, node_modules],
        // fallback: node_modules
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jQuery'
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: 'bower.json',
            includes: /\.js$/,
            excludes: [],
            searchResolveModulesDirectories: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.IgnorePlugin(/vertx/)
    ],
    externals: [
        // Every non-relative module is external
        function(context, request, callback) {

            // bypass requirejs plugins
            // Every module prefixed with 'async|font|goog|image|json' use the requirejs
            var m = request.match(/^(async|font|goog|image|json|text)!/);
            if (Object.prototype.toString.call(m) !== '[object Null]' && typeof m.input !== 'undefined') {
                return callback(null, m.input);
            }
            callback();
        }
    ],
    node: {
        fs: 'empty',
        child_process: 'empty'
    }
};
