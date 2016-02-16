/**
 * Run the middleware on files that contain .raml
 *  @todo - some logging
 *        - watch and reload
 */
var ramlMocker = require('raml-mocker');
var routePattern = require('route-pattern');
var fs = require('fs');
var url = require('url');
var utils = require('../../../utils');
var config = require('../../../config');
var display = utils.display();
var colors = utils.colors();
var dataConf = config.data;

var options = {
    files: dataConf.files
};
var apiRoutes = {};
var callback = function(mockRoutes) {
    apiRoutes = utils(mockRoutes).map(function(mockRoute) {
        var responseFn = function() {
            var response = null;
            if (utils.isFunction(mockRoute.mock)) {
                response = JSON.stringify(mockRoute.mock());
                if (utils.isNull(response) || response === 'null') {
                    if (utils.isFunction(mockRoute.example)) {
                        response = mockRoute.example();
                    }
                }
            }
            return response;
        };
        return {
            uri: dataConf.route + mockRoute.uri,
            method: mockRoute.method,
            response: responseFn,
            statusCode: mockRoute.defaultCode || 200
        };
    }).uniq(function(route) {
        // remove duplicates
        return route.uri + route.method;
    }).value();

    if (utils.size(mockRoutes) > 0) {
        // Displays available API's
        display.info('Starting services API');
        utils.each(apiRoutes, function(apiRoute) {
            display.info(colors.info(apiRoute.uri), colors.warn(apiRoute.method));
        });
    }
};

ramlMocker.generate(options, callback);

module.exports = function ramlMiddleWare(req, res, next) {
    //console.info(req.method);
    var parsed = url.parse(req.url);
    utils.each(apiRoutes, function(apiRoute) {
        // Check if the route matches the pattern and the method
        var pattern = routePattern.fromString(apiRoute.uri);
        var isSameMethod = apiRoute.method.toLowerCase() === req.method.toLowerCase();
        var isSameUri = pattern.matches(parsed.pathname);
        if (isSameUri && isSameMethod) {
            res.setHeader('Content-Type', 'application/json');
            res.end(apiRoute.response());
        }
    });
    next();
}
