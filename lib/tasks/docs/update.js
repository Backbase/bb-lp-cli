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
    try {
        return !!docs.find('marked#/backbase/manual');
    } catch(e) {
        return false;
    }
}

function getText(list) {
    return utils.reduce((list || []), function(acc, item) {
        if (item && item.text) {
            acc.push(item.text);
        }
        return acc;
    }, []);
}

function getName(property) {
    return property && property.length ? property.split(':')[0] : '';
}

function getValue(property) {
    return property && property.length ? property.split(':')[1] : '';
}

function hasTheSameName(prop1, prop2) {
    return getName(prop1).replace(/\s/g, '')  === getName(prop2).replace(/\s/g, '');
}

function mergeItem(existing, name) {
    return utils.reduce(existing, function(acc, item) {
        if (name === getName(item)) {
            acc.splice(1, 1, getValue(item));
        }
        return acc;
    }, [name, '``' ]).join(':');
}

function updateList(src, changed, cb) {
    src = getText(src);
    changed = getText(changed);
    var result = [];
    for (var i = 0; i < Math.max(src.length, changed.length); i++) {
        if (src[i] && changed[i] && hasTheSameName(src[i], changed[i])) {
            result.push(src[i]);
        } else {
            result.push(mergeItem(src, getName(changed[i])));
        }
    }
    return cb(result);
}

function updateSection(docs, update, sectionId) {
    var merged = updateList(
        docs.findList(sectionId),
        update.findList(sectionId),
        function(mergedList) {
            return docs.replace(docs.findList(sectionId), docs.createList(mergedList));
        }
    );
    return docs;
}

function prependSection(docs, template) {
    if (!hasValidStructure(docs) || !hasValidStructure(template)) {
        throw new Error('Wrong file structure...');
    }
    if (hasManualSection(docs)) {
        docs = updateSection(docs, template, 'marked#/backbase/manual');
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
            return fs.writeFileSync(opts.docsFilePath, docs);
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
