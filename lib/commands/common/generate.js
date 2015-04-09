'use strict';
var path = require('path');
var utils = require('../../utils');
var git = require('../../git');
var tasks = require('../../tasks');
var shell = utils.shell();
var display = utils.display();
var colors = utils.colors();
var questions = require('../../questions').widget;

if ( !shell.which('git')) {
    display.warn('Sorry, this script requires git');
    shell.exit(1);
}

module.exports = function generate(v) {
    var args = v.args;
    var templateRepo = args[0];
    var widgetPath;
    var widgetModel;

    utils.prompt(questions)
        .then(function(answers) {
            widgetPath = utils.projectPath(answers.name);
            widgetModel = answers;
            return git.cloneRepo(templateRepo, widgetModel.name);
        })
        .then(function() {
            var gitFolder = path.resolve(widgetPath, '.git');
            return shell.rm('-rf', gitFolder);
        })
        .then(function() {
            var data = {
                widget: widgetModel
            };
            return tasks.template(widgetPath, data);
        })
        .catch(utils.handleError)
        .done(function() {
            shell.exit(0);
        });

};
