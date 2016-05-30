'use strict';
var path = require('path');
var fs = require('fs');
var utils = require('../../utils');
var git = require('../../git');
var tasks = require('../../tasks');
var shell = utils.shell();
var display = utils.display();
var colors = utils.colors();
var questions = require('../../questions').widget;

function repoResolver(template, widgetModel) {

    var repoParts = template.split('#');
    var repoUrl = repoParts[0];
    var branchName = repoParts[1];
    if (!shell.which('git')) {
        display.warn('This command requires git to be installed on the system');
        shell.exit(1);
    }

    git.cloneRepo(repoUrl, widgetModel.target);

    if (!utils.isUndefined(branchName)) {
        shell.cd(widgetModel.name);
        display.info('Checkout ' + branchName);
        if (git.checkout(branchName).code !== 0) {
            display.error('Unable to switch to ' + branchName + '. Does it exists?');
            shell.exit(1);
        }
    }
    var gitFolder = path.resolve(widgetModel.target, '.git');
    shell.rm('-rf', gitFolder);
}

function localResolver(localPath, widgetModel) {
    var fromPath = path.resolve(localPath);
    var toPath = path.resolve(widgetModel.target);
    var gitFolder = path.resolve(toPath, '.git');
    var cmd = utils.template('cp -Rf ${fromPath} ${toPath}')({
        fromPath: fromPath,
        toPath: toPath
    });
    shell.exec(cmd);
    return shell.rm('-rf', gitFolder);
}
/**
 * To refactor into more robust generators
 * @jira https://backbase.atlassian.net/browse/LF-152
 */
module.exports = function generate(v) {

    var args = v.args;

    var prcessImages = v.options.prcessImages;

    var template = args[0];
    var target = args[1];
    var widgetModel;


    utils.prompt(questions)
        .then(function(answers) {
            var resolver = null;
            widgetModel = answers;
            widgetModel.target = (path.resolve(target) !== utils.projectPath()) ? utils.projectPath(target) : utils.projectPath( widgetModel.name);
            // tmp custom name transformations
            widgetModel.transforms = {
                name: {
                    camelCase: utils.camelCase(widgetModel.name),
                    capitalizeFirstLetter: utils.capitalizeFirstLetter(widgetModel.name)
                }
            };
            // Check if the argument is folder
            try {
                if (fs.lstatSync(template).isDirectory()) {
                    resolver = localResolver(template, widgetModel);
                }
            } catch (err) {
                resolver = repoResolver(template, widgetModel);
            }

            return widgetModel;
        })
        .then(function(widgetModel) {

            if (widgetModel.standalone === false) {
                display.info('Deleting standalone files');
                var toDelete = [
                    path.resolve(widgetModel.target, '.*'),
                    path.resolve(widgetModel.target, '*.json'),
                    path.resolve(widgetModel.target, 'icon.png'),
                    path.resolve(widgetModel.target, 'model.xml'),
                    path.resolve(widgetModel.target, 'Makefile'),
                    path.resolve(widgetModel.target, 'CHANGELOG.md'),
                    path.resolve(widgetModel.target, 'LICENSE'),
                    path.resolve(widgetModel.target, 'README.md'),
                    path.resolve(widgetModel.target, 'index.dev.html')
                ]
                shell.rm('-rf', toDelete);
            }
            return widgetModel
        })
        .then(function(widgetModel) {
            var data = {
                module: widgetModel,
                widget: widgetModel,
                component: widgetModel
            };
            var options = {
                prcessImages: prcessImages
            };
            return tasks.template(widgetModel.target, data, options);
        })
        .catch(utils.handleError)
        .done(function() {
            shell.exit(0);
        });

};
