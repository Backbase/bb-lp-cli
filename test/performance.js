var assert = require('assert');
var performanceLoader = require('../lib/loaders/performance-loader');

describe('Performance loader', function () {
    function mockWebpackLoaderContext (callback) {
        return {
            cacheable: function () {},
            callback: callback,
            options: {
                performanceLoader: {
                    enabled: true,
                    events: {
                        start: 'cxp.performance.start',
                        end: 'cxp.performance.end'
                    }
                }
            }
        }
    }

    it('should transform @performance annotations into performance calls', function (done) {
        var originalSource = [
            '\'use strict\'',
            '',
            'var widget = require(\'TransactionsWidget\');',
            '',
            '// @performance:start widget-transactions render',
            'widget.render();',
            '// @performance:end widget-transactions render',
            '',
            '// @performance:start widget-transactions attach',
            'widget.attach(document.body)',
            '// @performance:end widget-transactions attach'
        ].join('\n');

        var expected = [
            '\'use strict\'',
            '',
            'var widget = require(\'TransactionsWidget\');',
            '',
            'require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).start("render", {"sender":"widget-transactions","tags":[""]})',
            'widget.render();',
            'require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).end("render", {"sender":"widget-transactions","tags":[""]})',
            '',
            'require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).start("attach", {"sender":"widget-transactions","tags":[""]})',
            'widget.attach(document.body)',
            'require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).end("attach", {"sender":"widget-transactions","tags":[""]})'
        ].join('\n');

        var context = mockWebpackLoaderContext(function (err, actual) {
            assert.equal(actual, expected);
            done();
        });

        performanceLoader.call(context, originalSource);
    });

    it('should preserve original indentation', function (done) {
        var originalSource = [
            '\'use strict\'',
            'var widget = require(\'TransactionsWidget\');',
            '  // @performance:start widget-transactions render',
            'widget.render();',
            '    // @performance:end widget-transactions render'
        ].join('\n');

        var expected = [
            '\'use strict\'',
            'var widget = require(\'TransactionsWidget\');',
            '  require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).start("render", {"sender":"widget-transactions","tags":[""]})',
            'widget.render();',
            '    require(\'base\').performance({"events":{"start":"cxp.performance.start","end":"cxp.performance.end"}}).end("render", {"sender":"widget-transactions","tags":[""]})'
        ].join('\n');

        var context = mockWebpackLoaderContext(function (err, actual) {
            assert.equal(actual, expected);
            done();
        });

        performanceLoader.call(context, originalSource);
    });

    it('should return original source if no annotations found', function (done) {
        var originalSource = [
            '\'use strict\'',
            'var widget = require(\'TransactionsWidget\');',
            'widget.render();',
            'widget.attach(document.body)'
        ].join('\n');

        var expected = originalSource;

        var context = mockWebpackLoaderContext(function (err, actual) {
            assert.equal(actual, expected);
            done();
        });

        performanceLoader.call(context, originalSource);
    });
});
