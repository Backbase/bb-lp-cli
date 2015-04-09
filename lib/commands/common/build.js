'use strict';
/*----------------------------------------------------------------*/
/* Build widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var gulp = require('gulp');
var shell = utils.shell();
var display = utils.display();

/*----------------------------------------------------------------*/
/* #TODO Refactor the flow
/*----------------------------------------------------------------*/
module.exports = function build(v) {

    var skipTests = v.options.skipTests;

    tasks.lint()
        .then(function() {
            if(! skipTests) {
                display.info('Running Testing ...')
               return tasks.test();
            } else {
                display.info('Clean up ...')
                return tasks.clean();
            }
        })
        .then(function() {
            display.info('Building ...')
            return tasks.build();
        })
        .catch(function() {

        })
        .done(function(){
            shell.exit(0);
        });

};
