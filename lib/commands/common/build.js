'use strict';

/*----------------------------------------------------------------*/
/* Build widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var shell = utils.shell();
var display = utils.display();

/*----------------------------------------------------------------*/
/* #TODO Refactor the flow
/*----------------------------------------------------------------*/
module.exports = function build(v) {

    var skipTests = v.options.skipTests;
    var skipClean = v.options.skipClean;
    var withTemplates = v.options.withTemplates;
    var withModuleId = v.options.withModuleId;
    var withConfig = v.options.withConfig;
    var withCustomEntry = v.options.withCustomEntry;
    var withExcludes = v.options.withExcludes;
    var withPerformance = v.options.withPerformance;

    var args = (function(argsArray) {
        if (withConfig) {
            return { configPath: argsArray[0] };
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

    tasks.lint()
        .then(function() {
            if (!skipTests) {
                return tasks.test(v);
            } else {
                display.info('Clean up ...');
                return tasks.clean();
            }
        })
        .then(function() {
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
                withModuleId: withModuleId,
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
        .done(function(){
            shell.exit(0);
        });

};

