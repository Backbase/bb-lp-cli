'use strict';
var docs = require('../../tasks/docs/index');
var tasks = require('../../tasks');
var config = require('../../config');
var updateTask = require('../../tasks/docs/update');
var utils = require('../../utils');
var colors = utils.colors();
var shell = utils.shell();
var display = utils.display();
var Promise = require('promise');
var fs = require('fs-extra-promise');
var path = require('path');


// TODO refactor it
var makeQuestions = require('../../questions').makeDocsQuestions;
var login = require('../../questions').login;
var stash = require('../../node-stash')('http://stash.backbase.com:7990/rest/api/1.0/');

var manifest = {
    configsFolder: path.join(__dirname, '../../tasks/docs/configs'),
    reposConf: 'update.json'
};

var templatesPath = require('path').join(__dirname, '../../tasks/docs/templates/');

var Commands = [];
/**
* ------------------------------------------------------------------------
* Api Reference
* ------------------------------------------------------------------------
*/
Commands.api = function api(options) {
    // todo task docs here
    tasks.docs(options);
}
/**
* ------------------------------------------------------------------------
* Dev Statistics
* ------------------------------------------------------------------------
*/

Commands.stats = function stats(options) {
    var statsFile = path.resolve(config.paths.docs, 'stats-dev.md');
    display.info('Writing report:', colors.info(statsFile));
    shell.exec('touch ' + statsFile);
    display.info('Analyzing code...');
    docs.register('code');
    docs.register('extensibility');
    docs.register('documentation');
    docs.register('mobile');

    return docs.fflush().then(function(doc) {
        var template = utils.template(fs.readFileSync(templatesPath + 'DEV.tpl'), {
            imports: {
                category: utils.template(fs.readFileSync(templatesPath + 'category.tpl')),
                'boolean': utils.template(fs.readFileSync(templatesPath + 'boolean.tpl'))
            }
        });

        display.info('Updating', colors.info(statsFile));
        return fs.writeFileAsync(statsFile, template(doc.json));
    });
}

/**
* ------------------------------------------------------------------------
* Dev report
* ------------------------------------------------------------------------
*/

Commands.report = function report() {
    var reportFile = path.resolve(config.paths.docs, 'reports-dev.csv');

    display.info('Register resources...');

    var result = {
        projects: []
    };

    return utils.readDir('./').reduce(function(promise, folder) {
        return promise.then(function() {
            display.info('Analyzing data in', colors.info(folder) ,'...');

            shell.cd(folder);

            docs.register('code');
            docs.register('extensibility');
            docs.register('documentation');
            docs.register('mobile');

            return docs.fflush()
                .then(function(data) {
                    data.json.projectName = folder;

                    result.projects.push(data.json);
                    shell.cd('../');
                });
        });
    }, Promise.all(true)).then(function() {
        var template = utils.template(fs.readFileSync(templatesPath + 'dev-csv.tpl'), {
            imports: {
                'boolean': utils.template(fs.readFileSync(templatesPath + 'boolean.tpl')),
                'tryForEach': function(items, cb) {
                    utils.forEach(items, function() {
                        try {
                            cb.apply(this, arguments);
                        } catch (e) {
                            display.error(e);
                        }
                    }.bind(this));
                }
            }
        });

        shell.exec('touch ' + reportFile);
        display.info('Writing report: ', reportFile);
        return fs.writeFileAsync(reportFile, template(result));
    });
}

/**
* ------------------------------------------------------------------------
*
* ------------------------------------------------------------------------
*/
Commands.update = function update(options) {
    display.info('Updating docs...');

    utils.prompt(login)
        .then(stash.connect)
        .then(stash.getProjectsList)
        .then(makeQuestions)
        .then(utils.prompt)
        .then(updateTask.fetchTemplate)
        .then(stash.cloneReposFromProject)
        .then(updateTask.updateDocs)
        .done();
}
module.exports = function build(args) {

    var isCommand = function(fn) {
        return utils.isFunction(Commands[fn]);
    };
    var cmds = utils(args.options).keys().filter(function(option) {
        return args.options[option] === true;
    }).filter(isCommand).value();
    shell.mkdir('-p', config.paths.docs);
    utils.each(cmds, function(cmd) {
        try {
            display.info('Running docs', colors.info(cmd.toUpperCase()));
            Commands[cmd].call(Commands, args.options)
        } catch(e) {
            display.error(e);
        }
    })
};

