var UmdTemplatePlugin = require('./umd-template-plugin.js');
var BlankTemplatePlugin = require('./blank-template-plugin.js');

function CustomLibraryTemplatePlugin(target, name) {
        this.name = name;
        this.target = target || "umd";
}

module.exports = CustomLibraryTemplatePlugin;
CustomLibraryTemplatePlugin.prototype.apply = function(compiler) {
        compiler.plugin('this-compilation', function(compilation) {
            switch(this.target) {
                case 'umd':
                    compilation.apply(new UmdTemplatePlugin(this.name, true));
                    break;
                case 'blank':
                    compilation.apply(new BlankTemplatePlugin(this.name, true));
                    break;
                default:
                    throw new Error(this.target + ' is not a valid Library target');
            }
        }.bind(this));
};
