'use strict';

/*----------------------------------------------------------------*/
/* Build widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var shell = utils.shell();
var display = utils.display();

/*----------------------------------------------------------------*/
/* #TODO Refactor the flow
/*----------------------------------------------------------------*/
module.exports = function build(v) {

    var skipTests = v.options.skipTests;
    var withTemplates = v.options.withTemplates;

    tasks.lint()
        .then(function() {
            if (!skipTests) {
                display.info('Running Testing ...');
                return tasks.test(v);
            } else {
                display.info('Clean up ...');
                return tasks.clean();
            }
        })
        .then(function() {
            display.info('Building ...');
            return tasks.build();
        })
        .then(function() {
            if (withTemplates) {
                display.info('Bundling templates ...');
                return tasks.build.bundleTemplates();
            }
        })
        .catch(function() {

        })
        .done(function(){
            shell.exit(0);
        });

};
