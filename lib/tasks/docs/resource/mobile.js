var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var css = require('css');
var cssAnalyze = require('analyze-css');
var preferencesResource = require('./preferences');
var complexityResource = require('./complexity');
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

	// TODO fix render mode in general
	// TODO add schemas ?
	update: function (files) {
		var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme');
		var cssRules = _.property('stylesheet.rules')(css.parse(files.css, { silent: true }));

		var report = {
			css: new cssAnalyze(files.css, function(err){}),
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

		files.readmePost.structure.push.apply(
			files.readmePost.structure,
			[{ type: 'heading', depth: 2, text: 'Mobile' }]
			.concat(
				files.readmePost.createList(
					this.template(report).split('\n')
				),
				[{ type: 'heading', depth: 2, text: 'CSS' }],
				files.readmePost.createList(
					this.cssTemplate(report.css.metrics).split('\n')
				)
			));
	},

	template: _.template(fs.readFileSync(__dirname + '/mobile.tpl', 'utf-8')),
	cssTemplate: _.template(fs.readFileSync(__dirname + '/css.tpl', 'utf-8'))
}, {
	model: preferencesResource.model,
	difference: complexityResource.difference
});