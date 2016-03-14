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

function repoResolver(template, widgetPath, widgetModel) {

    var repoParts = template.split('#');
    var repoUrl = repoParts[0];
    var branchName = repoParts[1];
    if ( !shell.which('git')) {
        display.warn('This command requires git to be installed on the system');
        shell.exit(1);
    }

    git.cloneRepo(repoUrl, widgetModel.name);

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
}

function localResolver(localPath, widgetPath, widgetModel) {
    var fromPath = path.resolve(localPath);
    var toPath = path.resolve(widgetPath);
    var fromPath = path.resolve(localPath);
    var gitFolder = path.resolve(widgetPath, '.git');
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
    var widgetPath;
    var widgetModel;


    utils.prompt(questions)
        .then(function(answers) {
            var resolver = null;
            widgetPath = utils.projectPath(answers.name);
            widgetModel = answers;
            widgetModel.path = widgetPath;
             // tmp custom name transformations
            widgetModel.transforms =  {
                name: {
                    camelCase: utils.camelCase(widgetModel.name),
                    capitalizeFirstLetter: utils.capitalizeFirstLetter(widgetModel.name)
                }
            };
             // Check if the argument is folder
            try {
                if(fs.lstatSync(template).isDirectory()) {
                   resolver = localResolver(template, widgetPath, widgetModel);
                }
            } catch(err) {
                resolver = repoResolver(template, widgetPath, widgetModel);
            }

            return widgetModel;
        })
        .then(function(widgetModel) {

            if(widgetModel.standalone === false) {
                display.info('Deleting standalone files');
                var toDelete = [
                    path.resolve(widgetModel.path, '.*'),
                    path.resolve(widgetModel.path, '*.json'),
                    path.resolve(widgetModel.path, 'model.xml'),
                    //path.resolve(widgetModel.path, 'README.md'),
                    path.resolve(widgetModel.path, 'CHANGELOG.md'),
                    path.resolve(widgetModel.path, 'LICENSE'),
                    path.resolve(widgetModel.path, 'index.dev.html')
                ]
                console.log(toDelete);
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
            return tasks.template(widgetModel.path, data, options);
        })
        .catch(utils.handleError)
        .done(function() {
            shell.exit(0);
        });

};
