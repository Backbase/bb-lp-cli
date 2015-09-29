'use strict';
var utils = require('./utils');

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
    default: '1.0.0',
    validate: function(value) {
        // #TODO use semver syntax
        return true;
    }
}, {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: function() {
        // #TODO get values from system
    }
}];


exports.widget = widget;
