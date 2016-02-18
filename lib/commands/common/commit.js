'use strict';
var path = require('path');
var utils = require('../../utils');

var display = utils.display();


var gcz = path.resolve(__dirname, '../../../node_modules/commitizen/bin/git-cz');


module.exports = function link(v) {


    require('child_process')
        .spawn(gcz, [], {
            stdio: 'inherit' //preserve the std input / output
        })
        .on('exit', function(error) {
            //display.error(error);
        });
};
