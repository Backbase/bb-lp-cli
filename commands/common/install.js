'use strict';
/*----------------------------------------------------------------*/
/* Start local server
/*----------------------------------------------------------------*/
var utils = require('../../lib/utils');
var ui = require('clui');
var logger = utils.logger();
var colors = utils.colors();
var shell = utils.shell();

if ( !shell.which('bower')) {
    logger.warn('Sorry, this script requires ' + colors.info('bower'));
    logger.info('Use, ' + colors.info('npm i bower -g') + ' to install bower globally');
    shell.exit(1);
}

module.exports = function start(v) {
    logger.info('Using config:', utils.logObj(v));
    var loading = new ui.Spinner('Install dependencies');
    var verbose = v.options.verbose ? '-V' : '-s';
    var cmd = 'bower install ' + verbose;
    logger.info('Exec command: ' + colors.info(cmd));
    if( Boolean(verbose) ) { loading.start(); }
    shell.exec(cmd, function(code, output) {
        loading.stop('Done');
        if(code > 0) {
            utils.handleError(output);
        }
    });
};
