var _ = require('lodash');

module.exports = {
	url: 'dependencies',
	schema: 'marked#/backbase/dependencies',
	dependencies: {
		readme: './README.md',
		bower: './bower.json',
        package: './package.json'
	},

	/**
	 * @private
	 */
	render: function(item){
		return item.name + (item.version ? ' ' + item.version : '');
	},

	/**
	 * @returns {Array} with one found different item for compatibility
	 */
	difference: function(files){
		var actualModels = this.model(files);
		var readmeModels = this.parse(files);

		// if a model that does not present in readme models, found in actual models
		var found = _.find(actualModels, function(model){
			return !_.find(readmeModels, model);
		});

		return found ? [found] : [];
	},

	/**
	 * get a clean model
	 */
	model: function(files){
		return _.map(_.extend({}, files.bowerPost[this.url], files.packagePost[this.url]), function(version, name){
			return {
				name: name,
				version: version
			}
		});
	},

	/**
	 * parse from view/readme file
	 */
	parse: function(files){
		var list = files.readmePost.findParagraphList(this.schema, true);

		return _.chain(list)
			.map(function(text){
				var keyValue = text.split(' ');
				if(keyValue.length === 2) {
					return {
						name: keyValue[0],
						version: keyValue[1]
					};
				}
			})
			.compact()
			.value();
	},

	update: function(files){
        var paragraphList = files.readmePost.findParagraphList(this.schema),
            oldItems = paragraphList || [files.readmePost.find(this.schema)],
            newItems = oldItems.concat(files.readmePost.createList(_.map(
				this.model(files),
				this.render
            )));


		files.readmePost.replace(
			oldItems,
			newItems
		);
	}
};