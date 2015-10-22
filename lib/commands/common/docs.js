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

module.exports = function build(config) {
    var defaultOption = !utils.find(['generate', 'update'], function(option){ return config.options[option] });

    if (defaultOption || config.options.generate) {
        generate();
        return;
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

    display.info('Updating DEV.md in working directory.');
    docs.fflush('json');
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

