'use strict';

/*----------------------------------------------------------------*/
/* Build widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var config = require('../../config');
var shell = utils.shell();
var display = utils.display();

/*----------------------------------------------------------------*/
/* #TODO Refactor the flow
/*----------------------------------------------------------------*/
module.exports = function build(v) {
    var fullTest = v.options.fullTest;

    config.build = utils.defaults(config.build || {}, {
        all: v.options.all,
        noMinify : v.options.expand
    });

    var withTemplates = v.options.withTemplates;

    config.build.withModuleId = v.options.withModuleId;
    var withConfig = v.options.withConfig;
    var withCustomEntry = v.options.withCustomEntry;
    var withExcludes = v.options.withExcludes;
    var withPerformance = v.options.withPerformance;

    var args = (function(argsArray) {
        if (withConfig) {
            return {
                configPath: argsArray[0]
            };
        }
        var result = {};
        if (withExcludes) {
            result.excludes = argsArray[0].split(',');
        }
        if (withCustomEntry) {
            result.destination = argsArray[withExcludes ? 1 : 0];
        }
        return result;
    })(v.args);
    display.info('Clean up ...');

    tasks.clean().then(! fullTest || function() {
            display.info('Running full test ...');
            return tasks.lint().then(function() {
              return tasks.test(v)
            });

        }).then(function() {
            var buildConfig = args.configPath && args.configPath.length && withConfig ? utils.getJsonFromFile(args.configPath) : null;
            var excludesArray = args.excludes && args.excludes.length && withExcludes ? args.excludes : null;
            var entryPoint = args.destination && args.destination.length && withCustomEntry ? args.destination : null;

            var infoMessageArray = ['Building...'];
            if (withConfig || withExcludes) {
                infoMessageArray.push('\n\x1b[36m Excluded components:\x1b[0m [' + (withConfig ? buildConfig.excludes : excludesArray).toString() + ']');
                infoMessageArray.push('\n\x1b[36m Entry point:\x1b[0m ' + (withConfig ? buildConfig.entryPoint : entryPoint));
            }
            display.info(infoMessageArray.join(' '));


            return tasks.build({
                config: buildConfig,
                excludes: excludesArray,
                entryPoint: entryPoint,
                withModuleId: config.build.withModuleId,
                withPerformance: withPerformance
            });
        })
        .then(function() {
            if (withTemplates) {
                display.info('Bundling templates ...');
                return tasks.build.bundleTemplates();
            }
        })
        .catch(function(err) {
            utils.handleError(err);
        })
        .done(function() {
            shell.exit(0);
        });


};
