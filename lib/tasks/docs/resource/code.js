var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var escomplex = require('escomplex-js');
var preferencesResource = require('./preferences');
var cssAnalyze = require('analyze-css');

module.exports = _.mixin({
	url: 'code',
	dependencies: function(){
		return shell
			.find('.')
			.filter(function(file){ return !/node_modules|bower_components|dist|test|locale|\.git/.test(file) && file.match(/\.js$/) })
			.reduce(function(memo, file){
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
		var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme', 'css');

		var report = _.extend(
			escomplex.analyse(
				cleanDependencies.map(function(name) {
					return {
						path: name,
						code: files[name]
					};
				})
			),
			{
				ploc: 0,
				lloc: 0,
				dependencies: [],
				modules: [],
				length: _.property('size')(fs.existsSync('dist/scripts/main.js') && fs.statSync('dist/scripts/main.js'))
			});

		report.reports.forEach(function(fileReport){
			report.ploc += fileReport.aggregate.sloc.physical;
			report.lloc += fileReport.aggregate.sloc.logical;
			report.dependencies = report.dependencies.concat(fileReport.dependencies.map(_.property('path')));
			report.modules.push(fileReport.path);
		});

		report.dependencies = _(report.dependencies)
			.filter(function(dependency){
				return !/^\.\.?\//.test(dependency);
			})
			.uniq()
			.value();

		files.readmePost.json.javascript = report;
		files.readmePost.json.css = _.defaults(new cssAnalyze(files.css, function(err){
			if(err) {
				console.log(err);
			}
		}));
	}
}, {});