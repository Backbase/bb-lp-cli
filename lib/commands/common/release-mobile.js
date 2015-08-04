'use strict';

var fs = require('fs-extra-promise');
var bbRepoUrl = process.argv[4] || 'stash.backbase.com';
var path = require('path');
var Promise = require('promise');
var finder = require('findit');
var git = require('../../git');
var utils = require('../../utils');
var display = utils.display();
var colors = utils.colors();
var actionOnResolutions = {
    version: function (json, branch) {
        return json._resolution.tag;
    },
    last: function (json, branch) {
        return '#' + git.getLatestCommitHash(json._source, branch);
    },
    default: function (json, branch) {
        return '#' + json._resolution.commit;
    }
};

function getParentBower (){
    var promise = new Promise(function (resolve, reject) {
        var walker = finder(process.cwd());
        walker.on('file', function (file) {
            var dirname = path.dirname(file);
            var basename = path.basename(file);

            if(basename === 'bower.json'){
                resolve({
                    bowerComponentsPath: path.join(dirname, 'bower_components'),
                    json: require(file),
                    path: file
                });
                walker.stop();
            }
        });

        walker.on('error', function (error) {
            reject(error);
        });
    });
    return promise;
}

function getResolver(forceLatestVersion, repoUrl){
    return  function resolveCommit (json, branch){
        var repo = json._source;
        var resolution = json._resolution.type;
        var action = 'default';

        if(typeof actionOnResolutions[resolution] === 'function'){
            action = resolution;
        }
        if(forceLatestVersion && repo.indexOf(bbRepoUrl) !== -1) {
            action = 'last';
        }

        return actionOnResolutions[action](json, branch);
    }
}


function getHandler(forceLatestVersion, branch, repoUrl) {
    return function getBowerCommitsInfo(data) {
        var parentBowerJSON = data.json;
        var parentBowerJSONPath = data.path;
        var bowerComponentsPath = data.bowerComponentsPath;
        fs.writeFile(parentBowerJSONPath.replace('.json', '_back.json'), JSON.stringify(parentBowerJSON, null, '    '));
        var promise = new Promise(function (resolve, reject) {
            var packageNames = [];
            var json;
            var walker = finder(bowerComponentsPath);
            walker.on('file', function (file) {
                var dirname = path.dirname(file);
                var folderName = path.basename(dirname);
                var basename = path.basename(file);
                var resolver;
                if(basename === '.bower.json'){
                    packageNames.push(folderName);
                    json = require(file);
                    resolver = getResolver(forceLatestVersion, repoUrl);
                    parentBowerJSON.dependencies[folderName] = resolver(json, branch);
                }
            });
            walker.on('end', function () {
                delete parentBowerJSON.resolutions;
                fs.writeFile(parentBowerJSONPath, JSON.stringify(parentBowerJSON, null, '    '));
                resolve('done');
            });
            walker.on('error', function (error) {
                reject(error);
            });
        });
        return promise;
    };
}


module.exports = function build(v) {
    var forceLatestVersion = v.options.latest;
    var branch = v.args[0];
    var repoUrl = v.args[1];
    getParentBower()
        .then(getHandler(forceLatestVersion, branch, repoUrl))
        .then(function () {
            display.info('Bower dependencies have been fixed with the latest version in ' + colors.info(branch) + '.');
        });
};