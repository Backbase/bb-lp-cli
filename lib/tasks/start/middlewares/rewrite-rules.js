var modRewrite = require('connect-modrewrite');

module.exports = modRewrite([
    '.?itemRoot.?/(.*)$ /$1 [L]',
    '.+services/rest(.*)$ /$1 [L]'
]);
