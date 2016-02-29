'use strict';
/*----------------------------------------------------------------*/
/* Import
/*----------------------------------------------------------------*/
var tasks = require('../../tasks');

module.exports = function start(v) {
    tasks.import(v.options.all);
};
