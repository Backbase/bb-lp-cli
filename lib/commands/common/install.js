'use strict';
/*----------------------------------------------------------------*/
/* Install bower components
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var display = utils.display();
var colors = utils.colors();
var shell = utils.shell();

if ( !shell.which('bower')) {
    display.warn('Sorry, this script requires ' + colors.info('bower'));
    display.info('Use, ' + colors.info('npm i bower -g') + ' to install bower globally');
    shell.exit(1);
}

module.exports = function install(v) {

    display.warn( 'This method is deprecated. Please use `bower install` instead!');
    shell.exit(0);

    var linkCmd = require('./link');

    var verbose = v.options.verbose;
    var link = v.options.link;
    var dep = v.args[0];

    var cmd = utils.trim('bower install ' + dep + ' --config.interactive=false');
    display.info('Instaling  dependencies: ' + colors.info(cmd));
    shell.exec(cmd, function(code, output) {
        if(code > 0) {
            utils.handleError(output);
        } else {
            // AutoLink
            if(link) {
                linkCmd(v);
            }
        }
    });
};
