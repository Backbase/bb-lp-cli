'use strict';

/**
 * port existing theme build
 * https://github.com/Backbase/bb-cli/blob/nightly/commands/theme-build.js
 */

//
/*----------------------------------------------------------------*/
/* Build LP theme
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var config = require('../../config');
var shell = utils.shell();
var display = utils.display();

/*----------------------------------------------------------------*/
/*
/*----------------------------------------------------------------*/
module.exports = function build(v) {


    config.theme = utils.defaults(config.build || {}, {
        // options
    });

    utils.debug(v);
};
