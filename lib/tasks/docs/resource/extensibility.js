var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var preferencesResource = require('./preferences')
var codeResource = require('./code')

module.exports = _.mixin({
	url: 'extensibility',
	defaultPreferences: preferencesResource.defaultPreferences,
	dependencies: function () {
		return shell
			.find('.')
			.filter(function (file) {
				return !/node_modules|bower_components|dist|test|\.git/i.test(file) && (/(?:templates|styles).+/i.test(file));
			})
			.reduce(function (memo, file) {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				model: './model.xml'
			});
	} (),

	update: function (files) {
		var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme', 'model');

		var report = {
			endpoints: [],
			other: [],
			templates: cleanDependencies.filter(RegExp.prototype.test.bind(/templates.*(?:js|html)/)),
			templatesOptions: [],
			styles: cleanDependencies.filter(RegExp.prototype.test.bind(/styles.*(?:css|less)$/))
		};

		var preferences = this.model(files);
		preferences.forEach(function (preference) {
			var path = preference.value && preference.value.type === 'string' && preference.value.keyValue;
			if (path && /servicesPath/i.test(path)) {
				report.endpoints.push(preference);
			} else if (path && /itemRoot|contextRoot/i.test(path) && /templates.+/i.test(path) && /\.(?:js|html)$/i.test(path)) {
				report.templatesOptions.push(preference);
			} else {
				report.other.push(preference);
			}
		});

		files.readmePost.json.extensibility = report;
	}
}, {
	model: preferencesResource.model,
	difference: codeResource.difference
});