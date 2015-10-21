var Promise = require('promise');
var fs = require('fs-extra-promise');
var path = require('path');
var utils = require('./../../utils');
var markdown = require('./../../markdown');
var display = utils.display();

'use strict';


function handleError(err) {
    display.error(err);
    return err;
}

function collectReport(args) {
    return {};
}

function parseDocsFile(buffer) {
    return markdown(buffer.toString());
}

function updateManualSection(docs, template) {
    return docs;
}

function updateRepo(opts) {
    return fs.readFileAsync(opts.docsFilePath)
        .then(parseDocsFile)
        .then(function(docs) {
            return updateManualSection(docs, opts.template);
        })
        .catch(handleError)
        .then(collectReport);
}

exports.updateDocs = function(project) {
    return Promise.all(project.repos.reduce(function(docs, repo) {
        docs.push(updateRepo({
            docsFilePath: path.join(project.folder, repo.slug, 'DEV.md'),
            template: project.template,
            slug: repo.slug
        }));
        return docs;
    }, []))
    .then(collectReport);
};
