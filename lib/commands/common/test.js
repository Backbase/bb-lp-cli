'use strict';
/*----------------------------------------------------------------*/
/* Test widget
/*----------------------------------------------------------------*/
var utils = require('../../utils');
var tasks = require('../../tasks');
var display = utils.display();
var shell = utils.shell();
var colors = utils.colors();


module.exports = function test(v) {
    var watch = v.options.watch;
    var covarage = v.options.covarage;
    var options = utils.assign({
        config: null,
        watch: false,
        coverage: false,
        browsers: null
    }, v.options);

    return tasks.test(options)
        .catch(function(err){
            display.error( colors.error(err.message));
        })
        .done(function() {
            shell.exit(0);
        });


};
