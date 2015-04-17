'use strict';
var config = require('../config');
var webpack = require('webpack');

module.exports = {
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
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jQuery'
        }),
    ],
    externals: [
        // Every non-relative module is external
        function(context, request, callback) {

            // bypass requirejs plugins
            // #TODO remove when drop support for requirejs plugins
            // Every module prefixed with "async|font|goog|image|json" use the requirejs
            var m = request.match(/^(async|font|goog|image|json|text)!/);
            if(Object.prototype.toString.call(m) !== '[object Null]' && typeof m.input !== 'undefined') {
                //console.log(m.input);
                return callback(null, m.input );
            }
            callback();
        }
    ]
};
