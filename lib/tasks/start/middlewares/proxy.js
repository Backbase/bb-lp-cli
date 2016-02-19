var fs = require('fs');
var modRewrite = require('connect-modrewrite');

var bowerUrls = [
    '.+/bower_components/(.*)$ /bower_components/$1 [L]',
    '.+launchpad/modules/(.*)$ /bower_components/$1 [L]',
    '.+features/.{1,3}BBHOST.{1,3}/(.*)$ /bower_components/$1 [L]'
];

var nodeUrls = [
    '(.*)bower_components(.*)$ $1node_modules$2 [L]'
];

var bowerRewrite = modRewrite(bowerUrls),
    nodeRewrite = modRewrite(nodeUrls);

module.exports = function(req, res, next){
    bowerRewrite(req, res, function(){
        if(/bower_components/.test(req.url) && !fs.existsSync('./' + req.url)){
            nodeRewrite(req, res, next);
        } else {
            next();
        }
    });
};