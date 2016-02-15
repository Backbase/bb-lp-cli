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
    config.server.port = v.options.port;
    config.server.logLevel = v.options.logLevel;
    tasks.start();
};
