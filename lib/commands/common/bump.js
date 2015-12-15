'use strict';
var fs = require('fs-extra-promise');
var semver = require('semver');
var shell = require('shelljs');
var _ = require('lodash');
var Promise = require('promise');
var moment = require('moment');
var colors = require('colors');
var docs = require('../../tasks/docs/index');

module.exports = function build(options) {
    fs.readJsonAsync('bower.json')
    .then(function(bowerJson) {
        var version = semver.valid(bowerJson.version);
        var message = options.args[1];
        var commits = [];
        var lastTag;

        if (version === null) {
            throw new Error('version value wrong! ' + bowerJson.version.gray + ' is not valid semver. See semver.org');
        }

        version = semver.inc(version, options.args[0]);

        var result = shell.exec('git describe --abbrev=0 --tags', {silent: true});
        if (result.code === 0) {
            lastTag = _.trim(result.output);
        }

        if (lastTag) {
            commits = getCommitMessages(lastTag);
        } else {
            message = 'Initial release';
        }

        bowerJson.version = version;
        return Promise.all([writeBower(bowerJson), updateReadme(version, options.options['readme-only']), updateChangelog(version, message, commits)])
        .then(function() {
            console.log('OK.'.green + ' Bumped to version ' + version.green);
        });
    })
    .catch(function(e) {
        var r = 'Error: '.red;
        if (e.code === 'ENOENT') {
            console.log(r + 'Can\'t open ' + e.path.gray);
        } else {
            var errString = e.toString();
            var errWord = errString.substring(0, errString.indexOf(':') + 1);
            console.log(errString.replace(errWord, errWord.red));
        }
    });
};

function getCommitMessages(tag) {
    var r = shell.exec('git log ' + tag + '..HEAD --pretty=format:%s --no-merges', {silent: true});
    r = r.output.split('\n').map(_.trim);
    return r;
}

function writeBower(s) {
    return fs.writeJsonAsync('./bower.json', s);
}

function updateReadme(version, silent) {
    docs.register('version', version);
    if(!silent) {
        docs.register('dependencies');
        docs.register('dev-dependencies');
        docs.register('preferences');
        docs.register('components');
    }

    return docs.fflush().then(function(doc){
        fs.writeFileAsync('./README.md', doc);
    });
}

function updateChangelog(version, message, commits) {
    var output = '### v' + version + ' - `' + moment().format('DD/MM/YYYY, h:mma') + '`\n';
    if (message) output += '#### ' + message + '\n';
    _.each(commits, function(msg, i) {
        if (!msg || msg.toLowerCase().substring(0, 4) === 'bump') return;
        output += '* ' + msg + '\n';
    });

    return fs.readFileAsync('./CHANGELOG.md')
        .then(function(s) {
            s = s.toString();
            output += '\n' + s;
            return fs.writeFileAsync('./CHANGELOG.md', output);
        })
        .catch(function() {
            return fs.writeFileAsync('./CHANGELOG.md', output);
        });
}
