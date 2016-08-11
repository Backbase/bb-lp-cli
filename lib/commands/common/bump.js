'use strict';
var fs = require('fs-extra-promise');
var path = require('path');
var semver = require('semver');
var config = require('../../config');
var git = require('../../git');
var Promise = require('promise');
var docs = require('../../tasks/docs/index');
var utils = require('../../utils');
var colors = utils.colors();
var shell = utils.shell();
var display = utils.display();
var moment = require('moment');
var xpath = require("xml2js-xpath");
/**
 * Final step to write all the files
 * @param  {object} params Chained params
 * @return {object} promise
 */
function writeFiles(params) {
    utils.each(params.files, function(file) {
        var fileType = path.extname(file.filePath);
        display.info('Write file: ', colors.info(file.filePath));
        switch (fileType) {
            case '.json':
                fs.writeJsonAsync(file.filePath, file.content, 'utf8');
                break;
            default:
                fs.writeFileAsync(file.filePath, file.content, 'utf8');
        };
    });

    return params;
}

/**
 * Check if is a valid semver version type
 * @param  {string} version package version
 * @param  {object} input   cli input args
 * @return {object}         Chained params + next version
 */
function checkVersion(version, input) {
    version = semver.valid(version);
    var inc = input.args[0] || 'patch';
    var suffix = input.options.suffix || 'pre';

    return new Promise(function(resolve, reject) {
        if (utils.isNull(version)) {
            var err = 'Invalid version. Visit ' + colors.info.underline('http://semver.org') + ' for more info.';
            throw new Error(err);
            shell.exit(1);
        }
        var output = utils.assign({
            currentVerison: version,
            nextVersion: semver.inc(version, inc, suffix)
        }, input);
        resolve(output);
        return output;
    });
}

/**
 * Prompt to verify the package version
 * @param  {object} params Chained params
 * @return {object}        Chained params + confirmed version
 */
function confirmNextVersion(params) {

    if (!params.options.interactive) {
        return new Promise(function(resolve, reject) {
            return resolve(params);
        });
    }
    display.info('Current version:', colors.info(params.currentVerison));
    var question = [{
        type: 'confirm ',
        name: 'nextVersion',
        message: 'Bump to next version',
        default: params.nextVersion,
        validate: function(value) {
            if (utils.isNull(semver.valid(value))) {
                return 'Invalid version';
            } else {
                return true;
            }
        }
    }];
    return utils.prompt(question).then(function(answer) {
        return utils.assign(params, answer);
    });
}
/**
 * Update package.json and bower.json
 * @param  {object} params Chained params
 * @return {object}        Chained params + .json's
 */
function updateXMLFiles(params) {
    var filename = 'model.xml';
    var modelXMLFilePath = utils.resolve(filename);
    var promiseModelXML = fs.readFileAsync(modelXMLFilePath);
    var contentXML;
    // Check if there a model.xml
    return promiseModelXML.then(utils.xml2json)
        .then(function(json) {
            var xml = utils.json2xml(json);
            var properties = xpath.find(json, '//properties')[0].property;
            var version = utils.find(properties, '$.name', 'version');
            if (!utils.isUndefined(version)) {
                version = version.value[0]._;
                contentXML = xml.replace(version, params.nextVersion);
            } else {
                // Create a version property;
                var warn = utils.template('Unable to find ${version} property! ... will create one.')({
                    version: colors.info('version')
                });
                display.warn(warn);
                properties.push({
                    '$': {
                        'label': 'Version',
                        'name': 'version',
                        'viewHint': 'text-input,admin,designModeOnly'
                    },
                    'value': {
                        '_': params.nextVersion,
                        '$': {
                            'type': 'string'
                        }
                    }
                });
                contentXML = utils.json2xml(json);
            }
            params.files.push({
                filePath: modelXMLFilePath,
                content: contentXML
            });

            return params;
        }).catch(function(err) {
            display.warn(colors.warn(err.name), err.message);
            return params;
        });
}

/**
 * Update package.json
 * @param  {object} params Chained params
 * @return {object}        Chained params + package.json's
 */

function updatePackageJSONFile(params) {

    var packageJsonFilePath = utils.resolve('package.json');
    var promisePackageJson = fs.readJsonAsync(packageJsonFilePath);
    params.files = params.files || [];
    return Promise.all([
        promisePackageJson,
    ]).then(function(arr) {
        var packageJson = arr[0];
        packageJson.version = params.nextVersion;
        params.files.push({
            filePath: packageJsonFilePath,
            content: packageJson
        });
        return params;
    }).catch(function(err) {
        display.warn(colors.warn(err.name), err.message);
        return params;
    })
}
/**
 * Update bower.json
 * @param  {object} params Chained params
 * @return {object}        Chained params + bower.json
 */
function updateBowerJSONFile(params) {

    var bowerJsonFilePath = utils.resolve('bower.json');
    var promiseBowerJson = fs.readJsonAsync(bowerJsonFilePath);
    params.files = params.files || [];
    return Promise.all([
        promiseBowerJson,
    ]).then(function(arr) {
        var bowerJson = arr[0];
        bowerJson.version = params.nextVersion;
        params.files.push({
            filePath: bowerJsonFilePath,
            content: bowerJson
        });
        return params;
    }).catch(function(err) {
        display.warn(colors.warn(err.name), err.message);
        return params;
    })
}

/**
 * Update the version in the Readme file
 * @param  {object} params Chained params
 * @return {object}        Chained params + README
 */
function updateREADME(params) {
    var READMEFilePath = utils.resolve('README.md');
    docs.register('version', params.nextVersion);
    return docs.fflush().then(function(doc) {
        params.files.push({
            filePath: READMEFilePath,
            content: doc
        });
        return params;
    });
}

/**
 * @todo define some exclusions
 * @param  {object} params Chained params
 * @return {object}        [description]
 */
function updateCHANGELOG(params) {
    if(params.options.changelog === 'false'){
        return new Promise((resolve, reject) => {
            resolve(params);
            return params;
        });
    }
    var CHANGELOGFilePath = utils.resolve(params.options.changelog);
    var lastTag = git.getLastTag();
    var headerTpl = utils.template('### `v${version} - ${date}`');
    var inputMessage = params.args[1];
    var messageTpl = utils.template('* ${message}');
    var messages = []; // commit messages
    var excludesMessages = ['bump'];
    return fs.readFileAsync(CHANGELOGFilePath)
        .then(function(content) {
            if (!utils.isNull(lastTag)) {
                messages = git.getCommitMessages(lastTag);
            } else {
                messages.push('Initial release');
            }
            content = utils(messages)
                .unshift(inputMessage)
                .filter(function(message) {
                    // exclude empty and banned ones
                    return !message.includes(excludesMessages) && !utils.isEmpty(utils.trim(message));
                })
                .map(function(message) {
                    return messageTpl({
                        message: message
                    })
                })
                .unshift(headerTpl({
                    version: params.nextVersion,
                    date: moment().format('DD/MM/YYYY')
                }))

            .push('\n' + content.toString())
                .value()
                .join('\n');

            params.files.push({
                filePath: CHANGELOGFilePath,
                content: content
            });
            return params;
        });
}

function success(params) {
    display.info('Bumped to version:', colors.info(params.nextVersion));
}
/**
 * Main entry
 * @param  {object} input cli input args
 * @return {object}       Promise
 */
module.exports = function build(input) {
    return checkVersion(config.version, input)
        .then(confirmNextVersion)
        .then(updateBowerJSONFile)
        .then(updatePackageJSONFile)
        .then(updateXMLFiles)
        .then(updateREADME)
        .then(updateCHANGELOG)
        .then(writeFiles)
        .then(success)
        .catch(function(err) {
            display.error(err.message);
            shell.exit(1);
        });
};
