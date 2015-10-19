var _ = require('lodash');
var utils = require('./../../utils');
var fs = require('fs-extra-promise');
var path = require('path');

var resources = {};
var inputFiles = {
	readme: './README.md'
};

module.exports = {
	register: function(url, options){
		var resource,
			resourcePath;

		if(resources[url]) {
			console.log('Resource ' + resourcePath + ' is already registered.');
			return;
		}

		resourcePath = './resource/' + url;
		try {
			resource = require(resourcePath);
		} catch(e) {
			throw new Error('Resource ' + resourcePath + ' cannot be registered. File not exist.');
		}

		resources[resource.url] = {
			instance: resource,
			options: options
		};
	},

	fflush: function(mode){
		var dependencies = _.extend.apply(_, [].concat(
			inputFiles,
			_.chain(resources).values().map(_.property('instance.dependencies')).value()
		));

		return utils.readFiles(dependencies).then(function(files){
			_.each(resources, function(resourceConfig){
				var resource = resourceConfig.instance;
				var options = resourceConfig.options;

				var diff = resource.difference(files, options);
				if(!diff.length) {
					return;
				}

				resource.update(files, options);
			});

			resources = {};
			return fs.writeFileAsync(inputFiles.readme, files.readmePost.toString(mode));
		});
	}
};