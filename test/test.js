var assert = require('assert');
var config = require('./../lib/config');

describe('Test command', function () {

    it('should be configured', function () {
        assert.equal(typeof config.tests, 'object');
    });

    it('should have positive condition to scripts folder', function () {
        assert.equal(config.tests.requestInternalRegExp instanceof RegExp, true);

        assert.equal(config.tests.requestInternalRegExp.test('../../scripts/'), true);
        assert.equal(config.tests.requestInternalRegExp.test('scripts/'), false);
    });

    it('should have positive condition to include scripts tests', function () {
        var tests = [
            './components/lp-accounts-filter/test/unit/main.spec.js', './main.spec', './components/lp-accounts-filter/test/unit/main.spec', './components/lp-expandable-item/test/unit/main.spec.js', './components/lp-expandable-item/test/unit/main.spec', './components/lp-pagination/test/unit/main.spec.js', './components/lp-pagination/test/unit/main.spec'
        ];

        tests.map(function(url){
            assert.equal(config.tests.includeInternalRegExp.test(url), true);
        });
    });

    it('should have negative condition to include scripts tests', function () {
        var tests = [
            './index.js',
            './index',
            './widget.mock.js',
            './widget.mock',
            './controllers.js',
            './controllers',
            './main.js',
            './main',
            './models.js',
            './models',
            './components/lp-accounts-filter/README.md',
            './components/lp-accounts-filter/bower.json',
            './components/lp-accounts-filter/bower',
            './components/lp-accounts-filter/index.dev.html',
            './components/lp-accounts-filter/info.json',
            './components/lp-accounts-filter/info',
            './components/lp-pagination/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.js',
            './components/lp-pagination/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale',
            './components/lp-pagination/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.min.js',
            './components/lp-pagination/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.min',
            './components/lp-pagination/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.min.js.map',
            './components/lp-pagination/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
            './components/lp-pagination/bower_components/theme/core/bootstrap3/js/tests/unit/scrollspy',
            './components/lp-pagination/bower_components/theme/core/bootstrap3/js/tests/unit/tab.js',
            './components/lp-pagination/bower_components/theme/core/bootstrap3/js/tests/unit/tab',
            './components/lp-pagination/bower_components/theme/core/bootstrap3/js/tests/unit/tooltip.js',
            './components/lp-pagination/bower_components/theme/core/bootstrap3/js/tests/unit/tooltip',
            './components/lp-pagination/bower_components/angular-dynamic-locale/src/tmhDynamicLocale',
            './components/lp-pagination/bower_components/angular-dynamic-locale/test/tmhDynamicLocaleSpec.js',
            './components/lp-pagination/bower_components/angular-dynamic-locale/test/tmhDynamicLocaleSpec',
            './components/lp-accounts-filter/test/unit/index.js',
            './components/bower_components/lp-accounts-filter/test/unit/main.spec.js',
            './components/node_modules/lp-accounts-filter/test/unit/main.spec.js'
        ];

        tests.map(function(url){
            assert.equal(config.tests.includeInternalRegExp.test(url), false);
        });
    });

});
