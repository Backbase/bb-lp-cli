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
// var figlet = require('figlet');


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
/* Logger
/*----------------------------------------------------------------*/
exports.logger = function (config) {
    var Logger = require('logdown');
    Logger.disable('*');
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
    exports.logger().error(colors.error(err));
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
