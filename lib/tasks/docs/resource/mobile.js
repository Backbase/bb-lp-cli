var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var css = require('css');
var preferencesResource = require('./preferences');
var codeResource = require('./code');
var schema = require('jjv-utils')(require('./../../../schema/css'));

module.exports = _.mixin({
	url: 'mobile',
	defaultPreferences: preferencesResource.defaultPreferences,
	// TODO add schemas ?
	dependencies: function () {
		return shell
			.find('.')
			.filter(file => !/node_modules|bower_components|test|\.git/i.test(file) && (/(?:templates|styles).+/i.test(file)))
			.reduce((memo, file) => {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				css: './dist/styles/base.css'
			});
	} (),

	update: function (files) {
		var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme');
		var cssRules = _.property('stylesheet.rules')(css.parse(files.css, { silent: true }));

		var report = {
			templates: cleanDependencies.filter(RegExp.prototype.test.bind(/templates\/mobile/)),
			foundMomentumScrollRule: !!_.find(cssRules, rule => {
				var scrollRule = _.find(rule.declarations, schema.generate('css#/scroll'));
				if(scrollRule) {
					return _.find(rule.declarations, schema.generate('css#/backbase/momentum-scroll'));
				}
			}),
			foundDisableSelectRule: !!_.find(cssRules, rule => {
				return _.find(rule.declarations, schema.generate('css#/backbase/disable-select'));
			})
		};

		files.readmePost.json.mobile = report;
	}
}, {
	model: preferencesResource.model,
	difference: codeResource.difference
});