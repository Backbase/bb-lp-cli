'use strict';
/*----------------------------------------------------------------*/
/* Build widget
/*----------------------------------------------------------------*/
var utils = require('../../lib/utils');
var tasks = require('../../lib/tasks');
var gulp = require('gulp');
var shell = utils.shell();
var logger = utils.logger();
var ui = require('clui');
var loading = new ui.Spinner();

module.exports = function start(v) {
    logger.info('Using config:', utils.logObj(v));
    loading.start();
    loading.message('Testing');
    gulp.start('test:lint', function(err) {
        if(err) {
            utils.handleError(err);
        }
    });
    tasks.test()
        .then(function() {
            logger.info('Clean up...');
            loading.message('Clean up');
            return tasks.clean();
        })
        .then(function() {
            logger.info('Building...');
            loading.message('Building');
            return tasks.build();
        })
        .catch(function() {
            loading.stop();
        })
        .done(function(){
            loading.stop();
            shell.exit(0);
        });

};
