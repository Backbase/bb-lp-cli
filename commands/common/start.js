'use strict';
/*----------------------------------------------------------------*/
/* Start local server
/*----------------------------------------------------------------*/
var utils = require('../../lib/utils');
var tasks = require('../../lib/tasks');
var logger = utils.logger();

module.exports = function start(v) {
    logger.info('Using args:', utils.logObj(v));
    tasks.start();
};
