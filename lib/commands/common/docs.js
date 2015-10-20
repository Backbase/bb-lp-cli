'use strict';
var docs = require('../../tasks/docs/index');
var shell = require('shelljs');
var _ = require('lodash');
var utils = require('../../utils');
var display = utils.display();
var Promise = require('promise');
var fs = require('fs-extra-promise');

var templatesPath = require('path').join(__dirname, '../../tasks/docs/templates/');

module.exports = function build(config) {
    var defaultOption = !_.find(['generate', 'update', 'report'], function (option) { return config.options[option] });

    if (defaultOption || config.options.generate) {
        generate();
    } else if (config.options.report) {
        report();
    }
};

function generate() {
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

            return docs.fflush('raw')
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