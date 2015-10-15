var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var escomplex = require('escomplex-js');
var preferencesResource = require('./preferences');
var cssAnalyze = require('analyze-css');

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
				readme: './DEV.md',
				css: './dist/styles/base.css'
			});
	}(),

	difference: function(files){
		return Object.keys(this.dependencies);
	},

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
			modules: [],
			length: _.property('size')(fs.statSync('dist/scripts/main.js'))
		});

		report.reports.forEach(fileReport => {
			report.ploc += fileReport.aggregate.sloc.physical;
			report.lloc += fileReport.aggregate.sloc.logical;
			report.dependencies = _.filter(report.dependencies.concat(fileReport.dependencies.map(d => d.path)), dependency => {
				return !/^\.\//.test(dependency);
			});
			report.modules.push(fileReport.path);
		});

		files.readmePost.json.javascript = report;
		files.readmePost.json.css = new cssAnalyze(files.css, function(err){
			if(err) {
				console.log(err);
			}
		});
	}
}, {});