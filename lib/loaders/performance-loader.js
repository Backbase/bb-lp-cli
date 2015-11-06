'use strict';

var utils = require('../utils');
var defaults = {
    enabled: false,
    events: {
        start: 'performance.start',
        end: 'performance.end'
    }
};

function transformAllAnnotations (source, params) {
    var lines = source.split('\n');

    lines = lines.map(function (line) {
        if (line.indexOf('@performance:start') !== -1 ||
            line.indexOf('@performance:end') !== -1) {
            return transformAnnotation(line, params);
        } else {
            return line;
        }
    });

    return lines.join('\n');
}

function transformAnnotation (annotation, params) {
    var performanceParams = JSON.stringify(params);
    var performance = 'require(\'base\').performance(' + performanceParams + ')';
    var indent = annotation.split('//')[0];
    var annotationParams = parseAnnotation(annotation);

    return stringify(performance, annotationParams, indent);
}

function parseAnnotation (annotation) {
    annotation = annotation.split('//')[1].trim().replace('@performance:', '');

    var chunks = annotation.split(' ');
    var message = chunks.shift();
    var sender = chunks.shift();
    var operation = chunks.shift();
    var id = chunks.shift();
    var tags = parseTags(chunks.join(' '));
    var params = {
        message: message,
        operation: operation,
        sender: sender,
        tags: tags
    };

    if (id !== '-') {
        params.id = id;
    }

    return params;
}

function stringify (performance, annotationParams, indent) {
    var message = annotationParams.message;
    var operation = annotationParams.operation;

    annotationParams = JSON.stringify({
        sender: annotationParams.sender,
        id: annotationParams.id,
        tags: annotationParams.tags
    });

    return '{indent}{performance}.{event}("{operation}", {params})'
        .replace('{indent}', indent)
        .replace('{performance}', performance)
        .replace('{event}', message)
        .replace('{operation}', operation)
        .replace('{params}', annotationParams);
}

function parseTags (tags) {
    tags = tags.replace('[', '').replace(']', '').split(',').map(function (tag) {
        return tag.trim();
    });
    return tags;
}

module.exports = function (source, map) {
    var options = utils.defaults({}, this.options['performanceLoader'], defaults);

    this.cacheable();

    if (options.enabled) {
        source = transformAllAnnotations(source, {
            events: options.events
        });
    }

    this.callback(null, source, map);
};
