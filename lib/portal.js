
var BBRest = require('mosaic-rest-js');
var bbConfig = require('@backbase/cli-config');
var utils = require('./utils');

function getConfig(options) {
    return bbConfig.getBbRc().then(function(bbRcConfig) {
        var configWhitelist = [
            'scheme', 'host', 'port', 'context',
            'username', 'password', 'portal' ];
        var config = utils.merge({}, options, bbRcConfig);
        config = utils.pick(config, configWhitelist);
        return config;
    });
}

// Create singleton factory for rest client (returns promise).
var getRestClient = utils.once(function getRestClient(options) {
    options = options || {};
    return getConfig(options).then(function(config) {
        return new BBRest(config);
    });
});

exports.getRestClient = getRestClient;
exports.getConfig = getConfig;
exports.BBRest = BBRest;
