// TODO add time tests
// TODO templates in writing functions
var Promise = require('promise');
var _ = require('lodash');
var fs = require('fs-extra-promise');
var colors = require('colors');
var JXON = require('jxon');

JXON.config({
  	attrPrefix: ''
});

// Files needed for further usage
var inputFiles = {
	readme: './README.md',
	bower: './bower.json',
	model: './model.xml'
};

var postProcessing = {
	'md': require('./markdown'),
	'json': JSON.parse,
	'xml': JXON.stringToJs.bind(JXON)
};

var inputFilesExtended = _.map(inputFiles, function(url, key){
	var extension = url.replace(/.*\.(\w+)$/, '$1');
	return {
		url: url,
		key: key,
		extension: extension,
		post: postProcessing[extension]
	};
});

module.exports = function(){
	var fetchFiles = Promise.all(
		_.map(inputFilesExtended, function(info){
			return fs.readFileAsync(info.url);
		})
	).then(function(files){
		return _.reduce(files, function(memo, stream, index){
			var info = inputFilesExtended[index];

			memo[info.key] = stream.toString();
			if(info.post) {
				memo[info.key + 'Post'] = info.post(memo[info.key]);
			}

			return memo;
		}, {});
	}).catch(function(){
		console.log('Warning!'.yellow + ' Error reading files');
	});

	return {
		// Replace ' | <old-version> | ' with ' | <new-version> '
		version: function(version){
			return fetchFiles.then(function(files){
				var information = files.readmePost.find('marked#/backbase/information');
				if(!information) {
					console.log('Cannot find an module information in README file');
					return;
				}

				information.cells[0][1] = version;
			});
		},

		dependencies: function(){
			return updateListFromBower('marked#/backbase/dependencies', 'dependencies');
		},

		devDependencies: function(){
			return updateListFromBower('marked#/backbase/dev-dependencies', 'devDependencies');
		},

		preferences: function(){
			var defaultPreferences = ['Description', 'TemplateName', 'area', 'icon', 'locale', 'order', 'src', 'thumbnailUrl', 'title', 'version', 'widgetChrome'];

			return fetchFiles.then(function(files){
				var readme = files.readmePost;
				var model = files.modelPost;
				var schema = readme.schema;

				var modelPropertiesList = _.property('catalog.widget.properties.property')(model)
					.filter(function(property){
						return defaultPreferences.indexOf(property.name) === -1;
					});

				var readmePropertiesList = readme.findParagraphList('marked#/backbase/preferences'),
					readmePropertiesNames = _.chain(readmePropertiesList)
						.filter(schema.generate('marked#/text'))
						.pluck('text')
						.map(function(fullName){
							return fullName.replace(/\**(\w+)\**:.*/, '$1');
						})
						.value();

				if(_.difference(_.pluck(modelPropertiesList, 'name'), readmePropertiesNames).length) {
					var list = readme.createList(
						_.map(modelPropertiesList, function(property){
							return '**' + property.name + '**: ' + property.label;
						})
					);

					readme.replace(readmePropertiesList, list);
				}
			});
		},

		components: function(){
			console.log('components not implemented');
		},

		fflush: function(){
			return fetchFiles.then(function(files){
				fs.writeFileAsync(inputFiles.readme, files.readmePost);
			});
		}
	};

	// TODO add documentation
	// TODO add checkers
	// update readme list from bower property
	function updateListFromBower(paragraphPath, bowerProperty){
		return fetchFiles.then(function(files){
			var readme = files.readmePost;
			var bower = files.bowerPost;
			var schema = readme.schema;
			var dependenciesList = readme.findParagraphList(paragraphPath);
			var dependencies = _.filter(dependenciesList, schema.generate('marked#/text'))
				.forEach(function(listItem){
					var keyValue = listItem.text.split(' ');
					if(keyValue.length === 2) {
						dependencies[keyValue[0]] = keyValue[1];
					}
				});

			if(!_.isEqual(dependencies, bower[bowerProperty])) {
				var list = readme.createList(
					_.map(bower[bowerProperty], function(version, name){
						return name + ' ' + version;
					})
				);

				readme.replace(dependenciesList, list);
			}
		});
	}
};