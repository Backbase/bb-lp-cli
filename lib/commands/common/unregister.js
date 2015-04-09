'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var colors = utils.colors();


module.exports = function test(v) {
    display.info('Unregistering bower package...');
    var registry = v.args[0];

    tasks.unregister(registry)
        .then(function(cmd){
            display.info('Exec: ' + colors.info(cmd));
        })
        .catch(function(err){
            utils.handleError(err);
        })
        .done(function(){

        })



};
