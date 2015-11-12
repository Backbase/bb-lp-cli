var path = require('path');
var fs = require('fs');
var utils = require('../utils');
var defaults = {
    customComponents: [],
    componentBase: null,
    componentMain: null
};

module.exports = function(content) {
    this.cacheable();
    var callback = this.async();
    var options = this.options["customDepsLoader"] || defaults;
   
    var components = Object.keys(options.customComponents).reduce(function(components, name) {
        components[path.resolve(path.join(options.componentBase, name, options.componentMain))] = options.customComponents[name];
        return components;
    }, {});

    var tmpContent;
    if (!!~Object.keys(components).indexOf(this.resource)) {
        content = utils.excludeDependenciesByName(components[this.resource].excludes, this.resource);
    }
    callback(null, content);
};
