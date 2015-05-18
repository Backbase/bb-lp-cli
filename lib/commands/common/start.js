'use strict';
/*----------------------------------------------------------------*/
/* Start local server
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();

module.exports = function start(v) {
    display.info('Starting local server.');
    tasks.start();
};
