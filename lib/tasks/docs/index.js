var _ = require('lodash');
var utils = require('./../../utils');
var fs = require('fs-extra-promise');
var path = require('path');
var display = utils.display();

var resources = {};
var postProcessing = {
	'md': require('./../../markdown')
};

module.exports = {
	register: function(url, options){
		var resource,
			resourcePath = './resource/' + url;

		if(resources[url]) {
			display.info('Resource ' + resourcePath + ' is already registered.');
		}

		try {
			resource = require(resourcePath);
		} catch(e) {
			display.error('Resource ' + resourcePath + ' cannot be registered. File not exist.');
		}

		resources[resource.url] = {
			instance: resource,
			options: options,
			url: resourcePath
		};
	},

	fflush: function(mode){
		var dependencies = _.extend.apply(_, [{}].concat(
			_.chain(resources).values().map(_.property('instance.dependencies')).value()
		));

		return utils.readFiles(dependencies, postProcessing).then(function(files){
			_.each(resources, function(resourceConfig){
				var resource = resourceConfig.instance;
				var options = resourceConfig.options;

				var diff = resource.difference(files, options);
				if(!diff.length) {
					return;
				}

				try {
					resource.update(files, options);
				} catch(e){
					display.error('Resource ' + resource.url + ' cannot be resolved.');
					display.error(e);
				}
			});

			clearResources();
			return files.readmePost;
		});
	}
};

function clearResources(){
	_.each(resources, function(resource){
		delete require.cache[require.resolve(resource.url)];
	});
	resources = {};
}