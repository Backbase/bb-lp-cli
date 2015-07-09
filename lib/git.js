'use strict';
/*----------------------------------------------------------------*/
/* Git related functions
/*----------------------------------------------------------------*/
// exports.cloneRepo = function(url, name) {
// var git = require('nodegit');
//     var cloneOptions = {
//         remoteCallbacks: {
//             certificateCheck: function() {
//                 return 1;
//             }
//         }
//     };
//     return git.Clone.clone(url, name, cloneOptions);
// };
//


exports.cloneRepo = function(url, name) {
    var utils = require('./utils');
    var shell = utils.shell();
    return shell.exec('git clone ' + url + ' ' + name );
};

exports.originUrl = function() {
    var url;
    var utils = require('./utils');
    var gitConfig = require('git-config');

    // Load gitconfig.
    try {
        var gitJson = gitConfig.sync( utils.projectPath('.git/config') );
        if (gitJson['remote "origin"']) {
            url = gitJson['remote "origin"'].url;
        }
    } catch (e) {
    }

    return url;
};
