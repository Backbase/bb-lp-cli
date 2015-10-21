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
var stash = require('../../node-stash')('https://stash.backbase.com');

var manifest = {
    configsFolder: path.join(__dirname, '../../tasks/docs/configs'),
    reposConf: 'update.json'
};

function generateDocs(options) {
    display.info('Generating docs...');
    shell.exec('touch ./DEV.md');

    docs.register('complexity');
    docs.register('extensibility');
    docs.register('documentation');
    docs.register('mobile');

    docs.fflush();
}

function printReport(report) {
//    display.info(report);
    return report;
}

function updateDocs(options) {
    display.info('Updating docs...');

    utils.prompt(login)
        .then(stash.connect)
        .then(stash.getProjectsList)
        .then(makeQuestions)
        .then(utils.prompt)
        .then(stash.cloneReposFromProject)
        .then(updateTask.updateDocs)
        .then(printReport)
        .done();
    
}

module.exports = function docs(v) {
    return v.options.update ? updateDocs(v) : generateDocs(v);
};
