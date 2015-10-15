'use strict';

function BlankTemplatePlugin(name, optionalAmdExternalAsGlobal) {
    this.name = name;
    this.optionalAmdExternalAsGlobal = optionalAmdExternalAsGlobal;
}
module.exports = BlankTemplatePlugin;
BlankTemplatePlugin.prototype.apply = function(compilation) {
    var mainTemplate = compilation.mainTemplate;
    compilation.templatesPlugin('render-with-entry', function(source, chunk, hash) {
        return source;
    }.bind(this));
    mainTemplate.plugin('global-hash-paths', function(paths) {
        if(this.name) paths = paths.concat(this.name);
        return paths;
    }.bind(this));
    mainTemplate.plugin('hash', function(hash) {
        hash.update('blank');
        hash.update(this.name + '');
    }.bind(this));
};
