'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../lib/utils');
var tasks = require('../../lib/tasks');
var logger = utils.logger();
var ui = require('clui');
var shell = utils.shell();
var loading = new ui.Spinner('Testing');

module.exports = function start(v) {
    logger.info('Using config:', utils.logObj(v));
    var watch = v.options.watch;

    loading.start();
    if(watch) {
        loading.message('Watching tests');
    }
    tasks.test(watch)
        .catch(function(err){
            loading.stop();
            utils.handleError(err);
        })
        .done(function() {
            loading.stop();
            shell.exit(0);
        });


};
