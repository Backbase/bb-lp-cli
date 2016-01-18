'use strict';
/*----------------------------------------------------------------*/
/* Start local server
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var colors = utils.colors();
var config = require('../../config');

module.exports = function start(v) {
    display.info('Starting standalone server with configuration:', utils.logObj(config));
    config.server.port = v.options.port;
    tasks.start();
};
