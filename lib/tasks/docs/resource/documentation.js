var _ = require('lodash');
var fs = require('fs');
var complexityResource = require('./complexity');

module.exports = _.mixin({
	url: 'documentation',
	dependencies: {
		readmeInput: './readme.md',
		readme: './DEV.md',
		screenshot: './media/screenshot.png',
		diagram: './media/diagram.png'
	},

	// TODO fix render mode in general
	update: function(files){
		var testSectionIndex = files.readmeInputPost.findIndex('marked#/backbase/test'),
			md = files.readmeInputPost;

		var report = {
			preferences: !!md.findParagraphList('marked#/backbase/preferences'),
			components: !!md.findParagraphList('marked#/backbase/components'),
			description: md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[1]),
			dependencies: !!md.findParagraphList('marked#/backbase/dependencies'),
			devDependencies: !!md.findParagraphList('marked#/backbase/dev-dependencies'),
			test: !!~testSectionIndex && md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[testSectionIndex + 1]),
			screenshot: files.screenshot,
			diagram: files.diagram,
			date: new Date()
		};

		files.readmePost.structure.push.apply(
			files.readmePost.structure,
			[
				{ type: 'heading', depth: 2, text: 'Documentation' }
			]
			.concat(files.readmePost.createList(
				this.template(report).split('\n')
			))
		);
	},

	template: _.template(fs.readFileSync(__dirname + '/documentation.tpl', 'utf-8'))
}, {
	difference: complexityResource.difference
});