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

module.exports = function start(v) {
    config.server.port = v.options.port;
    config.server.logLevel = v.options.logLevel;
    config.data.useApiVersion = v.options.apiVersion;

    if(v.options.template) {
        config.paths.index = v.options.template;
    }
    if(!/\.html$/.test(config.paths.index)){
        config.paths.index += '.html';
    }

    config.paths.localTemplatesDir = path.dirname(config.paths.index);
    config.paths.index = path.relative(config.paths.localTemplatesDir, config.paths.index);

    tasks.start();
};
