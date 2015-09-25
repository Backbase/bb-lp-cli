'use strict';
var config = require('../config');
var webpack = require('webpack');

var path = require('path');
var node_modules = path.resolve(__dirname, '../../node_modules');

var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    //devtool: 'source-map',
    output: {
        libraryTarget: 'umd'
    },
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
        modulesDirectories: ['resources', 'node_modules', 'features', 'bower_components']
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json'},
            { test: /\.html$/, loader: 'raw!html-minify'},
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&minetype=image/png' },
            { test: /\.(jpg|jpeg|gif)$/, loader: 'file-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    resolveLoader: { fallback: node_modules},
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jQuery'
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ["bower_components"],
            manifestFiles:      "bower.json",
            includes:           /\.js$/,
            excludes:           [],
            searchResolveModulesDirectories: true
        })
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     },
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require']
        //     }
        // })
    ],
    externals: [
        // Every non-relative module is external
        function(context, request, callback) {

            // bypass requirejs plugins
            // #TODO remove when drop support for requirejs plugins
            // Every module prefixed with 'async|font|goog|image|json' use the requirejs
            var m = request.match(/^(async|font|goog|image|json|text)!/);
            if(Object.prototype.toString.call(m) !== '[object Null]' && typeof m.input !== 'undefined') {
                return callback(null, m.input );
            }
            callback();
        }
    ]
};
