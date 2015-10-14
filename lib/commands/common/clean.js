'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var shell = utils.shell();


module.exports = function test(v) {
    display.info('Running Clean');

    return tasks.clean()
        .catch(function(err){
            utils.handleError(err);
        })
        .done(function() {
            shell.exit(0);
        });


};
