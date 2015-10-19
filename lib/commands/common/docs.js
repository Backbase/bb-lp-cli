'use strict';
var docs = require('../../tasks/docs/index');
var shell = require('shelljs');
var _ = require('lodash');
var display = require('../../utils').display();

module.exports = function build(config) {
    var defaultOption = !_.find(['generate', 'update'], function(option){ return config.options[option] });

    if (defaultOption || config.options.generate) {
        generate();
        return;
    }
};

function generate() {
    shell.exec('touch ./DEV.md');

    display.info('Analyzing code...');
    docs.register('code');
    docs.register('extensibility');
    docs.register('documentation');
    docs.register('mobile');

    display.info('Updating DEV.md in working directory.');
    docs.fflush('json');
}