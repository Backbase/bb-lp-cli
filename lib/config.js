'use strict';
/*----------------------------------------------------------------*/
/* Configs
/*----------------------------------------------------------------*/
var utils = require('./utils');
var git = require('./git');

// #TODO check for bower.json file
try{
    var bowerJson = require( utils.projectPath('bower.json'));

} catch(e) {
    bowerJson = {};
}

var config = bowerJson.config || {};

exports.main = bowerJson.main; // #TODO show error if is missing

exports.name = bowerJson.name; // #TODO show error if is missing

if (bowerJson.repository && bowerJson.repository.url) {
    var repository = bowerJson.repository; // #TODO show warning if is missing
}
else {
    // Find repo in .git/config
    var gitUrl = git.originUrl();

    // Only use SSH repos.
    if (gitUrl && gitUrl.match(/^ssh/)) {
        repository = { url: gitUrl };
    }

    utils.display().warn('bower.json is missing repository url! Please update it to ' + gitUrl + '\n');
}

exports.repository = repository;

exports.paths = utils.extend( {
    scripts: './scripts',
    docs: './docs',
    target: './dist',
    media: './media',
    templates: './templates',
    styles: './styles',
    test: './test',
    index: [ './index.dev.html', './index.html' ]
}, config.paths || {} );

exports.proxies = utils.extend( {
    '/api': 'http://localhost:3030/'
}, config.proxies || {} );
