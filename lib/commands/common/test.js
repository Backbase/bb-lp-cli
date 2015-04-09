'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var shell = utils.shell();


module.exports = function test(v) {
    display.info('Running Unit Tests');
    var watch = v.options.watch;

    return tasks.test(watch)
        .catch(function(err){
            utils.handleError(err);
        })
        .done(function() {
            shell.exit(0);
        });


};
