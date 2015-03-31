'use strict';
var path = require('path');
var utils = require('../../lib/utils');
var git = require('../../lib/git');
var tasks = require('../../lib/tasks');
var shell = utils.shell();
var ui = require('clui');
var logger = utils.logger();
var colors = utils.colors();
var questions = require('../../lib/questions').widget;

if ( !shell.which('git')) {
    logger.warn('Sorry, this script requires git');
    shell.exit(1);
}

module.exports = function generate(v) {
    var args = v.args;
    var templateRepo = args[0];
    var widgetPath;
    var widgetModel;
    var loading = new ui.Spinner();

    logger.info('Using config:', utils.logObj(v));

    utils.prompt(questions)
        .then(function(answers) {
            loading.start();
            loading.message('Generating');
            widgetPath = utils.projectPath(answers.name);
            widgetModel = answers;
            loading.message('Cloning ' + colors.green(templateRepo));
            return git.cloneRepo(templateRepo, widgetModel.name);
        })
        .then(function() {
            loading.message('Finish cloning');
            var gitFolder = path.resolve(widgetPath, '.git');
            loading.message('Removing ' + colors.green(gitFolder));
            return shell.rm('-rf', gitFolder);
        })
        .then(function() {
            var data = {
                widget: widgetModel
            };
            loading.message('Replace template using: ' + colors.green(JSON.stringify(data)));
            return tasks.template(widgetPath, data);
        })
        .catch(utils.handleError)
        .done(function(){
            loading.stop('Done');
            shell.exit(0);
        });

};
