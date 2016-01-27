'use strict';
/*----------------------------------------------------------------*/
/* Git related functions
/*----------------------------------------------------------------*/
// @todo check nodegit modules
var utils = require('./utils');
var shell = utils.shell();
exports.cloneRepo = function(url, name) {
    return shell.exec('git clone ' + url + ' ' + name);
};

exports.checkout = function checkout(branch) {
    return shell.exec('git checkout ' + branch);
};

exports.originUrl = function originUrl() {
    var url;
    var gitConfig = require('git-config');
    // Load gitconfig.
    try {
        var gitJson = gitConfig.sync(utils.projectPath('.git/config'));
        if (gitJson['remote "origin"']) {
            url = gitJson['remote "origin"'].url;
        }
    } catch (e) {}

    return url;
};

exports.getLatestCommitHash = function getLatestCommitHash(url, branch) {
    return shell.exec('git ls-remote ' + url + ' ' + branch).output.split('\t')[0];
};

/**
 * Get the last tag name
 * @todo
 *     - handle errors
 *     - log command
 * @return {string} tag name
 */
exports.getLastTag = function getLastTag() {
    var cmd = 'git describe --abbrev=0 --tags';
    var out = shell.exec(cmd, {silent: true});
    if(out.code !== 0) {
        return null;
    }
    return utils.trim(out.output);

};
/**
 * GetCommitMessages
 * @todo
 *     - include commit hash
 * @param  {string} tag Tag name
 * @return {array}     Array of messages
 */
exports.getCommitMessages = function getCommitMessages (tag) {
    var cmd = 'git log ${tag}..HEAD --pretty=format:%s --no-merges';
    cmd = utils.template(cmd)({tag: tag});
    var out = shell.exec(cmd, {silent: true});
    if(out.code !== 0) {
        return [];
    }
    return out.output.split('\n');
};

/**
 * Get git configuration properties
 */
exports.getConfig = function (prop, glob) {
    var cmd = 'git config ${glob} ${prop}';
    cmd = utils.template(cmd)({prop: prop, glob: glob});
    var out = shell.exec(cmd, {silent: true});
    if(out.code !== 0) {
        return '';
    }
    return utils.trim(out.output);
}
