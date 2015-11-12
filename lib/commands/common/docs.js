'use strict';
var docs = require('../../tasks/docs/index');
var updateTask = require('../../tasks/docs/update');
var shell = require('shelljs');
var utils = require('../../utils');
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

module.exports = function build(config) {
    var defaultOption = !utils.find(['generate', 'update', 'report'], function(option){ return config.options[option] });

    if (defaultOption || config.options.generate) {
        generate();
        return;
    } else if (config.options.report) {
        report();
    } else {
        update()
    }
};

function generate(options) {
    shell.exec('touch ./DEV.md');

    display.info('Analyzing code...');
    docs.register('code');
    docs.register('extensibility');
    docs.register('documentation');
    docs.register('mobile');

    return docs.fflush().then(function (doc) {
        var template = _.template(fs.readFileSync(templatesPath + 'DEV.tpl'), {
            imports: {
                category: _.template(fs.readFileSync(templatesPath + 'category.tpl')),
                'boolean': _.template(fs.readFileSync(templatesPath + 'boolean.tpl'))
            }
        });

        display.info('Updating DEV.md in working directory.');
        return fs.writeFileAsync('./DEV.md', template(doc.json));
    });
}

function update(options) {
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

function report() {
    display.info('Register resources...');
    var result = {
        projects: []
    };

    return utils.readDir('./').reduce(function (promise, folder) {
        return promise.then(function () {
            display.info('Analyzing data in ' + folder + '...');

            shell.cd(folder);

            docs.register('code');
            docs.register('extensibility');
            docs.register('documentation');
            docs.register('mobile');

            return docs.fflush()
                .then(function (data) {
                    data.json.projectName = folder;

                    result.projects.push(data.json);
                    shell.cd('../');
                });
        });
    }, Promise.all(true)).then(function () {
        var template = _.template(fs.readFileSync(templatesPath + 'dev-csv.tpl'), {
            imports: {
                'boolean': _.template(fs.readFileSync(templatesPath + 'boolean.tpl')),
                'tryForEach': function(items, cb){
                    _.forEach(items, function(){
                       try {
                           cb.apply(this, arguments);
                       } catch(e){
                           display.error(e);
                       }
                    }.bind(this));
                }
            }
        });

        shell.exec('touch ./dev-report.csv');
        display.info('Updating dev-report.csv in working directory.');
        return fs.writeFileAsync('./dev-report.csv', template(result));
    });
}
