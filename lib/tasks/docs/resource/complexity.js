var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var escomplex = require('escomplex-js');
var preferencesResource = require('./preferences')

module.exports = _.mixin({
	url: 'complexity',
	dependencies: function(){
		return shell
			.find('.')
			.filter(file => !/node_modules|bower_components|dist|test|\.git/.test(file) && file.match(/\.js$/))
			.reduce((memo, file) => {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md'
			});
	}(),

	difference: function(files){
		return Object.keys(this.dependencies);
	},

	// TODO fix render mode in general
	update: function(files){
		var cleanDependencies = _.extend({}, this.dependencies);
		delete cleanDependencies.readme;

		var report = _.extend(escomplex.analyse(_.map(cleanDependencies, name => {
			return {
				path: name,
				code: files[name]
			};
		})), {
			ploc: 0,
			lloc: 0,
			dependencies: [],
			modules: []
		});

		report.reports.forEach(fileReport => {
			report.ploc += fileReport.aggregate.sloc.physical;
			report.lloc += fileReport.aggregate.sloc.logical;
			report.dependencies = report.dependencies.concat(fileReport.dependencies.map(d => d.path));
			report.modules.push(fileReport.path);
		});

		files.readmePost.structure.length = 0;
		files.readmePost.structure.push.apply(
			files.readmePost.structure,
			[
				{ type: 'heading', depth: 1, text: 'Widget Checklist' },
				{ type: 'heading', depth: 2, text: 'Complexity' }
			]
			.concat(files.readmePost.createList(
				this.template(report).split('\n')
			))
		);
	},

	template: _.template(fs.readFileSync(__dirname + '/complexity.tpl', 'utf-8'))
}, {});