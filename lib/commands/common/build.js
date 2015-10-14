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
            display.info('Building ...');
            return tasks.build({
                config: args.configPath && args.configPath.length && withConfig ? utils.getJsonFromFile(args.configPath) : null,
                excludes: args.excludes && args.excludes.length && withExcludes ? args.excludes : null,
                entryPoint: args.destination && args.destination.length && withCustomEntry? args.destination : null,
                withModuleId: withModuleId
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

