var Command = require('ronin').Command;
var colors = require('colors');
var WidgetBuildCommand = module.exports = Command.extend({
    desc: 'This command adds application',

    run: function (name) {
        // create an app with name given in arguments
        console.log('Build widget CLI'.green);
    }
});
