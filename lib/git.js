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
