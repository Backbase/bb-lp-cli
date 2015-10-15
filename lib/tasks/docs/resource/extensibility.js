var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var preferencesResource = require('./preferences')
var complexityResource = require('./complexity')

module.exports = _.mixin({
	url: 'extensibility',
	defaultPreferences: preferencesResource.defaultPreferences,
	// TODO add schemas ?
	dependencies: function(){
		return shell
			.find('.')
			.filter(file => !/node_modules|bower_components|dist|test|\.git/i.test(file) && (/(?:templates|styles).+/i.test(file)))
			.reduce((memo, file) => {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				model: './model.xml'
			});
	}(),

	// TODO add schemas ?
	update: function(files){
		var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme', 'model');

		var report = {
			endpoints: [],
			other: [],
			templates: cleanDependencies.filter(RegExp.prototype.test.bind(/templates/)),
			templatesOptions: [],
			styles: cleanDependencies.filter(RegExp.prototype.test.bind(/styles.*(?:css|less)$/))
		};

		var preferences = this.model(files);
		preferences.forEach(preference => {
			var path = preference.value && preference.value.type === 'string' && preference.value.keyValue;
			if(path && /servicesPath/i.test(path)) {
				report.endpoints.push(preference);
			} else if(path && /itemRoot|contextRoot/i.test(path) && /templates.+/i.test(path) && /\.(?:js|html)$/i.test(path)){
				report.templatesOptions.push(preference);
			} else {
				report.other.push(preference);
			}
		});

		files.readmePost.json.extensibility = report;
	}
}, {
	model: preferencesResource.model,
	difference: complexityResource.difference
});