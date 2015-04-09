'use strict';
/*----------------------------------------------------------------*/
/* Link dependencies
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

module.exports = function link(v) {

    // #TODO check if is a .bowerc in $HOME or local and if there's a directory prop
    var defaultBowerDirectory = 'bower_components';//default bower_components dir
    var depsPath = utils.projectPath(defaultBowerDirectory);

    if ( ! shell.test('-d', depsPath)) {
        display.warn('Sorry, ' + colors.info(depsPath) + ' can\'t be found.');
        display.info('Make sure you, ' + colors.info('backbase install'));
        shell.exit(1);
    }
    var deps = utils.readDir(depsPath);
    var cmd = 'for c in ' + deps.join(' ') +'; do if [ -d "' + depsPath +'/$c" ]; then bower link $c; fi; done';
    display.info('Linking dependencies: ' + colors.info(cmd));
    shell.exec(cmd);
};
