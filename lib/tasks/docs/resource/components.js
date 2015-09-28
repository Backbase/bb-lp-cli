var _ = require('lodash');
var utils = require('./../../../utils.js');
var fs = require('fs-extra-promise');
var path = require('path');

var preferencesResource = require('./preferences');
var componentsPath = utils.projectPath('scripts/components');

module.exports = _.mixin({
	url: 'components',
	schema: 'marked#/backbase/components',
	dependencies: function(){
		return readDir()
			.reduce(function(memo, dir){
				memo[dir + 'Info'] = path.join(componentsPath, dir, 'info.json');
				memo[dir + 'Bower'] = path.join(componentsPath, dir, 'bower.json');

				return memo;
			}, {
				readme: './README.md'
			});
	}(),

	model: function(files){
		return readDir().map(function(dir){
			return {
				name: dir,
				label: _.property(dir + 'InfoPost.title')(files) || _.property(dir + 'BowerPost.description')(files)
			};
		});
	}
}, {
	render: preferencesResource.render,
	difference: preferencesResource.difference,
	parse: preferencesResource.parse,
	update: preferencesResource.update
});

//
function readDir(){
	if(!fs.existsSync(componentsPath)) {
		return [];
	}

	return utils.readDir(componentsPath);
}