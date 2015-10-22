var Promise = require('promise');
var fs = require('fs-extra-promise');
var path = require('path');
var utils = require('./../../utils');
var markdown = require('./../../markdown');
var display = utils.display();

'use strict';

function handleError(err) {
    return err;
}

function parseDocsFile(buffer) {
    return markdown(buffer.toString());
}

function hasValidStructure(obj) {
    return obj && obj.structure instanceof Array;
}

function hasManualSection(docs) {
    return false;
}

function mergeManualSections(current, changed) {
    return docs;
}

function prependSection(docs, template) {
    if (!hasValidStructure(docs) || !hasValidStructure(template)) {
        throw new Error('Wrong file structure...');
    }
    if (hasManualSection(docs)) {
        docs = mergeManualSections(docs, template); 
    } else  {
        docs.structure.splice.apply(docs.structure, [1, 0].concat(template.structure));
    }
    return docs.toString();
}

function updateDocsItem(opts) {
    return fs.readFileAsync(opts.docsFilePath)
        .then(parseDocsFile)
        .then(function prependManualSection(docs) {
            return prependSection(docs, opts.template);
        })
        .then(function writeFile(docs) {
            return fs.writeFileAsync(opts.docsFilePath, docs);
        })
        .catch(function handleError(err) {
            display.error(['Error while updating', opts.slug, '...\n', err.toString()].join(' '));
            return err;
        });
}

exports.updateDocs = function(project) {
    return Promise.all(project.repos.reduce(function(docs, repo) {
        docs.push(updateDocsItem({
            docsFilePath: path.join(project.folder, repo.slug, 'DEV.md'),
            template: project.template,
            slug: repo.slug
        }));
        return docs;
    }, []));
};

exports.fetchTemplate = function(project) {
    project.template = markdown(fs.readFileSync(project.template).toString());
    return project;
};
