var _ = require('lodash');
var utils = require('./../../../utils.js');
var fs = require('fs-extra-promise');
var path = require('path');

var preferencesResource = require('./preferences');

module.exports = _.mixin({
	url: 'components',
	schema: 'marked#/backbase/components',
	dependencies: function(){
		var componentsPath = utils.projectPath('scripts/components');
		if(!fs.existsSync(componentsPath)) {
			return;
		}

		var dirs = utils.readDir(componentsPath);
		return dirs.reduce(function(memo, dir){
			memo[dir + 'Info'] = path.join(componentsPath, dir, 'info.json');
			memo[dir + 'Bower'] = path.join(componentsPath, dir, 'bower.json');

			return memo;
		}, {
			readme: './README.md'
		});
	}(),

	model: function(files){
		var dirs = utils.readDir(utils.projectPath('scripts/components'));
		var components = dirs.map(function(dir){
			return {
				name: dir,
				label: _.property(dir + 'InfoPost.title')(files) || _.property(dir + 'BowerPost.description')(files)
			};
		});

		return components;
	}
}, {
	render: preferencesResource.render,
	difference: preferencesResource.difference,
	parse: preferencesResource.parse,
	update: preferencesResource.update
});