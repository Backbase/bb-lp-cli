'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var colors = utils.colors();



module.exports = function test(params) {

    params.cmd = 'unpublish';
    tasks.registerPackage(params)
        .then(function(cmd) {
            display.info('Exec: ' + colors.info(cmd));
        })
        .catch(function(err) {
            display.error(err);
        })
        .done(function() {

        });
};

