var cliparse = require('cliparse');
var parsers = cliparse.parsers;
var colors = require('colors');
var utils = require('../../utils');
var config = require('../../config');

module.exports = {
    description: 'Launchpad theme subcommands',
    commands: [

        cliparse.command('build', {
            description: 'Build launchpad theme',
            args: [
                cliparse.argument('collection', {
                    description: 'Collection type',
                    parser: function(v) {
                        if (['retail', 'universal'].indexOf(v) !== -1) return {
                            success: v
                        };
                        else return {
                            error: 'Collection name!'.red
                        };
                    },
                    default: 'universal'
                }),
                cliparse.argument('target', {
                    description: 'Target folder path. Default path is ' + colors.info(config.paths.target),
                    default: utils.resolve(config.paths.target)
                })
            ],
            options: [
                cliparse.option('watch', {
                    aliases: ['w'],
                    description: 'Watch theme changes and trigger a build'
                })

                /// Add more
            ]
        }, require('./build'))

    ]
};
