'use strict';
var utils = require('./utils');
var fs = require('fs');
var path = require('path');
var semver = require('semver');
var git = require('./git');

/*----------------------------------------------------------------*/
/* #TODO add more questions
/*----------------------------------------------------------------*/
var widget = [{
    type: 'input',
    name: 'name',
    message: 'Name',
    validate: function(value) {
        if (utils.isEmpty(value)) {
            return 'Name is required';
        } else {
            return true;
        }
    },
    filter: function(value) {
        return utils.chain(value).deburr().kebabCase().value();
    }
}, {
    type: 'input',
    name: 'description',
    message: 'Description',
    validate: function(value) {
        if (utils.isEmpty(value)) {
            return 'Description is required';
        } else {
            return true;
        }
    },
    filter: function(value) {
        return utils.trim(value);
    }
}, {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '0.1.0',
    validate: function(value) {
        if (utils.isNull(semver.valid(value)) && /v[0-9]+/gi.test(value) === false) {
            return 'Invalid version';
        } else {
            return true;
        }
    }
}, {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: function() {
       return git.getConfig('user.email','--global')
    }
}];

var login = [{
    type: 'input',
    name: 'login',
    message: 'Please enter your stash login',
    validate: function(value) {
        return !!value.length;
    }
}, {
    type: 'password',
    name: 'password',
    message: 'Please enter your stash password',
    validate: function(value) {
        return !!value.length;
    }
}];

var makeDocsQuestions = function(data) {
    var repos = data.values || [];
    return [{
        type: "list",
        name: "target",
        message: "Please select the target to update documents:",
        choices: utils.map(repos, function(repo) {
            return repo.name;
        }),
        filter: function(value) {
            return utils.find(repos, function(item) {
                return item.name && item.name === value;
            });
        }
    }, {
        type: 'input',
        name: 'folder',
        message: 'Please enter valid dist folder to store updated items',
        default: function() {
            return path.resolve('./');
        },
        validate: function(value) {
            return fs.existsSync(value) && fs.statSync(value).isDirectory();
        },
        filter: function(value) {
            return path.resolve(value);
        }
    }, {
        type: 'input',
        name: 'template',
        message: 'Please enter custom template path (if needed)',
        default: function() {
            //TODO: remove hadcoded template to config.
            return path.resolve(path.join(__dirname, 'tasks/docs/templates/manual.tpl'));
        }
    }];
};

exports.widget = widget;
exports.login = login;
exports.makeDocsQuestions = makeDocsQuestions;
