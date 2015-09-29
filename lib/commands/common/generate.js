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
/**
 * To refactor into more robust generators
 * @jira https://backbase.atlassian.net/browse/LF-152
 * @param  {[type]} v [description]
 * @return {[type]}   [description]
 */
module.exports = function generate(v) {
    var args = v.args;
    var templateRepo = args[0];
    var widgetPath;
    var widgetModel;
    var repoParts = templateRepo.split('#');
    var repoUrl = repoParts[0];
    var branchName = repoParts[1];
    utils.prompt(questions)
        .then(function(answers) {

            widgetPath = utils.projectPath(answers.name);
            widgetModel = answers;
             // tmp custom name transformations
            widgetModel.transforms =  {
                name: {
                    camelCase: utils.camelCase(widgetModel.name)
                }
            };
            return git.cloneRepo(repoUrl, widgetModel.name);
        })
        .then(function() {
            if(! utils.isUndefined(branchName) ) {
                shell.cd(widgetModel.name);
                display.info('Checkout ' + branchName);
                if (git.checkout(branchName).code !== 0) {
                    display.error('Unable to switch to ' + branchName + '. Does it exists?');
                    shell.exit(1);
                }
            }
            var gitFolder = path.resolve(widgetPath, '.git');
            return shell.rm('-rf', gitFolder);
        })
        .then(function() {
            var data = {
                module: widgetModel,
                widget: widgetModel,
                component: widgetModel
            };
            return tasks.template(widgetPath, data);
        })
        .catch(utils.handleError)
        .done(function() {
            shell.exit(0);
        });

};
