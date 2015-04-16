'use strict';
/*----------------------------------------------------------------*/
/* Configs
/*----------------------------------------------------------------*/
var utils = require('./utils');

// #TODO check for bower.json file
try{
    var jsonFile = require( utils.projectPath('bower.json'));

} catch(e) {
    jsonFile = {};
}

var config = jsonFile.config || {};

exports.main = jsonFile.main; // #TODO show error if is missing

exports.name = jsonFile.name; // #TODO show error if is missing

exports.repository = jsonFile.repository; // #TODO show warning if is missing

exports.paths = utils.extend( {
    scripts: './scripts',
    docs: './docs',
    target: './dist',
    templates: './templates',
    styles: './styles',
    test: './test',
    index: './index.dev.html'
}, config.paths || {} );

exports.proxies = utils.extend( {
    '/api': 'http://localhost:3030/'
}, config.proxies || {} );
