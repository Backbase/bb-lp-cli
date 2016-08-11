'use strict';
/*----------------------------------------------------------------*/
/* Start local server
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var colors = utils.colors();
var config = require('../../config');
var path = require('path');
var fs = require('fs');

module.exports = function start(v) {
    config.server.port = v.options.port;
    config.server.logLevel = v.options.logLevel;
    config.data.useApiVersion = v.options.apiVersion;
    config.build.withModuleId = v.options.withModuleId;
    config.build.noMinify = v.options.expand;
    config.deploy = v.options.deploy;
    if(v.options.template) {
        var tplPath = path.resolve(v.options.template);
        fs.access(tplPath, fs.F_OK, function(err) {
            if (err) {
                display.error('Template not found: ', tplPath);
                process.exit(1)
            }
        });
        config.paths.index = v.options.template;
    }
    if(!/\.html$/.test(config.paths.index)){
        config.paths.index += '.html';
    }

    tasks.start();
};
