'use strict';
/*----------------------------------------------------------------*/
/* Build custom widgets bundles
/*----------------------------------------------------------------*/

var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var path = require('path');
var shell = utils.shell();
var fs = require('fs');
var Promise = require('promise');

// TODO: add templates processing
// TODO: create map for bundles
module.exports = function customBuild(v) {
    var withTemplates = v.options.withTemplates;
    var withPerformance = v.options.withPerformance;
    var useUnminified = !!v.options.useUnminified;
    var verboseFlag = !!v.options.verbose;

    function createRequireConf(config) {
        var bundlePrefix = '-bundle';
        return (Object.keys(config.bundles) || []).reduce(function(rjsConf, bundleName) {
            var bundle = config.bundles[bundleName];
            var bundleFileName = bundleName + bundlePrefix;
            rjsConf.paths[bundleFileName] = path.join(config.base, config.dist, bundleFileName);
            rjsConf.bundles[bundleFileName] = [];

            bundle.widgets.forEach(function(widget) {
                var widgetIsObject = typeof widget === "object" && widget.hasOwnProperty('path') && widget.hasOwnProperty('name');
                var widgetPath = widgetIsObject
                    ? path.join(config.base, widget.path, config.componentDistModule)
                    : path.join(config.base, config.componentBase, widget, config.componentDistModule);
                var widgetName = widgetIsObject ? widget.name : widget;

                rjsConf.bundles[bundleFileName].push(widgetName);
                rjsConf.map['*'][widgetPath] = widgetName;
            });
            return rjsConf;
        }, {
            "paths": {},
            "bundles": {},
            "map": { "*": {} }
        });
    }

    tasks.clean()
    .then(function() {
        display.info('Prepearing environment...');
        var config = utils.getJsonFromFile(path.resolve(v.args[0]));
        var target = path.resolve(config.dist);

        config.withTemplates = withTemplates || false;
        config.withPerformance = withPerformance || false;

        !fs.existsSync(target) && fs.mkdir(target);
        return config;
    })
    .then(function(config) {
        display.info('Creating requirejs conf...');
        var rjsConfPath = config.bundlesConfigPath;
        var isValidConfig = rjsConfPath
            && config.dist && config.dist.length
            && config.base && config.base.length
            && config.componentBase && config.componentBase.length
            && config.componentDistModule && config.componentDistModule.length;
        if (isValidConfig) {
            fs.writeFileSync(
                path.resolve(rjsConfPath), [
                    'requirejs.config(',
                    JSON.stringify(createRequireConf(config), null, '  '),
                    ');'
                ].join('')
            );
        }
        config.verbose = verboseFlag;
        return config;
    })
    .then(function(config) {
        display.info('Building...');
        return Promise.all(Object.keys(config.bundles).reduce(function(steps, name) {
            steps.push(Promise.resolve(tasks.createBundle(config, name, useUnminified)));
            return steps;
        }, []));
    })
    .catch(function(err) {
        utils.handleError(err);
    })
    .done(function(){
        shell.exit(0);
    });
};
