'use strict';

var fs = require('fs-extra-promise');
var path = require('path');
var Promise = require('promise');
var finder = require('findit');
var git = require('../../git');

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

function getBowerCommitsHandler (forceLatestVersion) {
    return function getBowerCommitsInfo(data) {
        var parentBowerJSON = data.json;
        var parentBowerJSONPath = data.path;
        var bowerComponentsPath = data.bowerComponentsPath;
        fs.writeFile(parentBowerJSONPath.replace('.json', '_back.json'), JSON.stringify(parentBowerJSON, null, '    '));
        var promise = new Promise(function (resolve, reject) {
            var packageNames = [];
            var bowerJSON;
            var walker = finder(bowerComponentsPath);
            walker.on('file', function (file) {
                var dirname = path.dirname(file);
                var folderName = path.basename(dirname);
                var basename = path.basename(file);
                var repo;
                var commit;
                if(basename === '.bower.json'){
                    packageNames.push(folderName);
                    bowerJSON = require(file);
                    repo = bowerJSON._source;

                    if(forceLatestVersion) {
                        commit = git.getLatestCommitHash(repo, 'master');
                    }else{
                        commit = bowerJSON._resolution.commit;
                    }
                    parentBowerJSON.dependencies[folderName] = '#' + commit;
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
    var forceLatestVersion = v.args[0];
    getParentBower()
        .then(getBowerCommitsHandler(forceLatestVersion))
        .then(function () {
            console.log('Bower dependencies have been fixed with the latest versions in master.');
        });
};