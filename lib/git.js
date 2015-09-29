'use strict';
/*----------------------------------------------------------------*/
/* Git related functions
/*----------------------------------------------------------------*/
// @todo check nodegit modules
var utils = require('./utils');
var shell = utils.shell();
exports.cloneRepo = function(url, name) {
    return shell.exec('git clone ' + url + ' ' + name );
};

exports.checkout = function(branch) {
    return shell.exec('git checkout ' + branch);
};

exports.originUrl = function() {
    var url;
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

exports.getLatestCommitHash = function (url, branch) {
    return shell.exec('git ls-remote ' + url + ' ' + branch).output.split('\t')[0];
};
