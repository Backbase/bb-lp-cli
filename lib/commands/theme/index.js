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
                cliparse.argument('edition', {
                    description: 'Edition',
                    parser: function(v) {
                        if (['retail', 'universal'].indexOf(v) !== -1) return {
                            success: v
                        }; else return {
                            error: 'Edition!'.red
                        };
                    },
                    default: 'universal'
                }),
                cliparse.argument('target', {
                    description: 'Target folder path. Default path is ' + colors.info(config.paths.target),
                    default: utils.resolve('./')
                })
            ],
            options: [
                cliparse.option('watch', {
                    aliases: ['w'],
                    description: 'Watch theme changes and trigger a build'
                }),
                cliparse.option('dist', {
                    description: 'Dist folder',
                    parser: cliparse.parsers.stringParser,
                    default: 'dist'
                }),
                cliparse.option('base-path', {
                    description: 'Pass base-path var to less.',
                    parser: cliparse.parsers.stringParser
                }),
                cliparse.option('disable-compress', {
                    description: 'Don\'t compress CSS into .min files.'
                }),
                cliparse.option('disable-ie', {
                    description: 'Don\'t create reworked .ie files for IE8.'
                }),
                cliparse.option('disable-assets', {
                    description: 'Don\'t collect font/image assets.'
                }),
                cliparse.flag('sourcemaps', {
                    description: 'Whether to generate source maps.'
                }),
                cliparse.option('import', {
                    description: 'Run bb import after building.',
                    parser: cliparse.parsers.booleanParser
                })
            ]
        }, require('./build'))

    ]
};
