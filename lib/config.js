'use strict';
/*----------------------------------------------------------------*/
/* Configs
/*----------------------------------------------------------------*/
var utils = require('./utils');
var git = require('./git');
var path = require('path');

// #TODO check for bower.json file
try{
    var bowerJson = require( utils.projectPath('bower.json'));

} catch(e) {
    bowerJson = {};
}
try{
    var packJson = require( utils.projectPath('package.json'));
} catch (e) {
    packJson = {};
}

var config = packJson.config || bowerJson.config || {};


exports.main = packJson.main || bowerJson.main; // #TODO show error if is missing
exports.name =  packJson.name || bowerJson.name; // #TODO show error if is missing
exports.version =  packJson.version || bowerJson.version;
exports.repository =  packJson.repository || bowerJson.repository;

if(bowerJson.main) {
    //temporary patch to search for main file in 'src/'  folder
    var mainJSFile = utils.bowerMainJs(exports.main);//;
    exports.mainOutPath = path.normalize(mainJSFile.replace('./src', './'))
}

if (exports.repository && exports.repository.url) {
    var repository = exports.repository; // #TODO show warning if is missing
}
else {
    // Find repo in .git/config
    var gitUrl = git.originUrl();

    // Only use SSH repos.
    if (gitUrl && gitUrl.match(/^ssh/)) {
        exports.repository = { url: gitUrl };
    }

    //utils.display().warn('bower.json is missing repository url! Please update it to ' + gitUrl + '\n');
}

exports.paths = utils.extend( {
    scripts: './scripts',
    docs: './docs',
    reports: './reports',
    target: './dist',
    media: './media',
    templates: './templates',
    styles: './styles',
    test: './test',
    index: [ './index.dev.html', './index.html' ]
}, config.paths || {} );

// RAML api configuration
exports.data = utils.extend({
    route :'/services/mock',
    files: ['./**/*.raml', '!./**/node_modules/**']
} , config.api);

exports.proxies = utils.extend( {
    '/api': 'http://localhost:3030/',
    '/services/rest': 'http://localhost:3030/'
}, config.proxies || {} );

exports.eslint = config.eslint;
exports.karma = config.karma;

exports.tests = {
    requestInternalRegExp: /(?:\.\.\/){2}scripts\//,
    includeInternalRegExp: /^(?!.*(?:node_modules|bower_components)).*\.spec(?:\.js)?$/
};
