/*----------------------------------------------------------------*/
/* Utilities
/*----------------------------------------------------------------*/
'use strict';
var path = require('path');
var Promise = require('promise');
var shell = require('shelljs');
var utils = require('lodash').noConflict();
var colors = require('colors/safe');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});


exports.readDir = function (currDir) {
    var fs = require('fs');
    var dirs = [];
    var isVisible = function (path) {
        return (/(^|.\/)\.+[^\/\.]/g).test(path) === false;
    };
    fs.readdirSync(currDir).map(function(file) {
            return path.join(currDir, file);
        }).filter(function(file) {
            return fs.statSync(file).isDirectory();
        }).forEach(function(file) {
            dirs.push(file.slice(file.lastIndexOf(path.sep) + 1));
        });

    return dirs.filter(isVisible);
};


/*----------------------------------------------------------------*/
/* Colors
/*----------------------------------------------------------------*/
exports.colors = function() {
    return colors;
};
/*----------------------------------------------------------------*/
/* Paths
/*----------------------------------------------------------------*/
exports.projectPath = function(p){
    var cwd = path.join(shell.pwd(), '/');
    return path.resolve(cwd, p || '');
};
/*----------------------------------------------------------------*/
/* Display - Use a logging system
/*----------------------------------------------------------------*/
exports.display = function (config) {
    var Logger = require('logdown');
    // Logger.disable('*');
    var inst;
    return (inst instanceof Logger) ? inst : inst = new Logger(config);
};
/*----------------------------------------------------------------*/
/* Shell
/*----------------------------------------------------------------*/
exports.shell = function (config) {
    // TODO config;
    shell.config = config;
    return shell;
};

exports.handleError = function(err) {
    exports.display().error(colors.error(err));
    throw new Error(err);
};
/*----------------------------------------------------------------*/
/* Fetch #todo
/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
/* Input - Promise based on asking.ask module
/*----------------------------------------------------------------*/
exports.prompt = function (questions) {
    var inquirer = require('inquirer');
    return new Promise(function (resolve) {
        inquirer.prompt(questions, function (answers) {
            resolve(answers); return answers;
        });
    });

};

/*----------------------------------------------------------------*/
/* log Object
/*----------------------------------------------------------------*/
exports.logObj = function(obj) {
    return colors.info(JSON.stringify(obj, null, 4));
};

module.exports = utils.mixin(exports);
