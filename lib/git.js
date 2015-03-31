'use strict';
/*----------------------------------------------------------------*/
/* Git related functions
/*----------------------------------------------------------------*/
var git = require('nodegit');

exports.cloneRepo = function(url, name) {
    var cloneOptions = {
        remoteCallbacks: {
            certificateCheck: function() {
                return 1;
            }
        }
    };
    return git.Clone.clone(url, name, cloneOptions);
};
