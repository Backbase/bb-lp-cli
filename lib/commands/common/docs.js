'use strict';
var docs = require('../../tasks/docs/index');
var shell = require('shelljs');

module.exports = function build(options) {
    shell.exec('touch ./DEV.md');

    docs.register('complexity');
    docs.register('extensibility');
    docs.register('documentation');
    docs.register('mobile');

    docs.fflush('json');
};