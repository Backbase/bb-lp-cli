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

    var options = utils.assign({
        config: null,
        watch: false,
        coverage: false,
        browsers: null,
        moduleDirectories: []
    }, v);

    return tasks.test(v)
        .catch(function(err){
            display.error( colors.error(err.message));
            shell.exit(1);
        })
        .done(function() {
            shell.exit(0);
        });


};
