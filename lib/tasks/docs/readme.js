// TODO add time tests
// TODO templates in writing functions
var _ = require('lodash');
var utils = require('./../../utils');
var fs = require('fs-extra-promise');
var path = require('path');

// Files needed for further usage
var inputFiles = {
	readme: './README.md',
	bower: './bower.json',
	model: './model.xml'
};

var postProcessing = {
	'md': require('./markdown')
};

module.exports = function(){
	var filesPromise = utils.readFiles(inputFiles, postProcessing).then(function(files){
		if(!files.readme) {
			throw new Error('README file not found');
		}
	});

	return {
		// Replace ' | <old-version> | ' with ' | <new-version> '
		version: function(version){
			return filesPromise.then(function(files){
				var information = files.readmePost.find('marked#/backbase/information');
				if(!information) {
					console.log('Cannot find module information in a README file');
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

		// TODO mix existing properties
		preferences: function(){
			var defaultPreferences = ['Description', 'TemplateName', 'area', 'icon', 'locale', 'order', 'src', 'thumbnailUrl', 'title', 'version', 'widgetChrome'];

			return filesPromise.then(function(files){
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
			return filesPromise.then(function(files){
				var componentsPath = utils.projectPath('scripts/components');
				var readme = files.readmePost;
				var schema = readme.schema;

				var components = readme.find('marked#/backbase/components');
				if(!components) {
					console.log('Cannot find components in a README file');
					return;
				}
				var readmeComponentsList = readme.findParagraphList('marked#/backbase/components');
				var readmeComponents = _.chain(readmeComponentsList)
					.filter(schema.generate('marked#/text'))
					.pluck('text')
					.map(function(fullName){
						return fullName.replace(/\**(\w+)\**:.*/, '$1');
					})
					.value();

				if(!fs.existsSync(componentsPath)) {
					return;
				}

				var dirs = utils.readDir(componentsPath);
				utils.readFiles(dirs.reduce(function(memo, dir){
					memo[dir + 'Info'] = path.join(componentsPath, dir, 'info.json');
					memo[dir + 'Bower'] = path.join(componentsPath, dir, 'bower.json');

					return memo;
				}, {})).then(function(files){
					var componentsInfo = dirs.map(function(dir){
						return {
							name: dir,
							title: _.property(dir + 'InfoPost.title')(files) || _.property(dir + 'BowerPost.description')(files)
						};
					});

					var difference = _.filter(componentsInfo, function(componentInfo){
						return !_.find(readmeComponents, componentsInfo.name);
					});

					if(difference) {
						var list = readme.createList(
							_.map(componentsInfo, function(info){
								return '**' + info.name + '**' + (info.title ? ': ' : '');
							})
						);

						readme.replace([components], [].concat(components, list));
					}
				});
			});
		},

		fflush: function(){
			return filesPromise.then(function(files){
				fs.writeFileAsync(inputFiles.readme, files.readmePost);
			});
		}
	};

	// TODO add documentation
	// TODO add checkers
	// TODO add new paragraph
	// update readme list from bower property
	function updateListFromBower(paragraphPath, bowerProperty){
		return filesPromise.then(function(files){
			var readme = files.readmePost;
			var bower = files.bowerPost;
			var schema = readme.schema;
			var dependenciesList = readme.findParagraphList(paragraphPath);
			var dependencies = {};

			_.filter(dependenciesList, schema.generate('marked#/text'))
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