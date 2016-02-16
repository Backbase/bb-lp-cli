var modRewrite = require('connect-modrewrite');

module.exports = modRewrite([
    '.+/bower_components/(.*)$ /bower_components/$1 [L]',
    '.+/node_modules/(.*)$ /node_modules/$1 [L]',
    '.+launchpad/modules/(.*)$ /bower_components/$1 [L]',
    '.+launchpad/modules/(.*)$ /node_modules/$1 [L]',
    '.+features/.{1,3}BBHOST.{1,3}/(.*)$ /bower_components/$1 [L]',
    '.+features/.{1,3}BBHOST.{1,3}/(.*)$ /node_modules/$1 [L]',
    '.+itemRoot./(.*)$ /$1 [L]'
]);
