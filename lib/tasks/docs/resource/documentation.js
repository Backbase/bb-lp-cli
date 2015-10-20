var _ = require('lodash');
var fs = require('fs');
var shell = require('shelljs');
var codeResource = require('./code');
var moment = require('moment');

module.exports = _.mixin({
	url: 'documentation',
	dependencies: {
		readmeInput: './readme.md',
		readme: './DEV.md',
		screenshot: './media/screenshot.png',
		locale: './locale/all.json',
		diagram: './media/diagram.png',
		demo: './index.dev.html'
	},

	update: function(files){
		var testSectionIndex = files.readmeInputPost.findIndex('marked#/backbase/test'),
			md = files.readmeInputPost;

		var report = {
			preferences: !!md.findParagraphList('marked#/backbase/preferences'),
			devPreferences: !!md.findParagraphList('marked#/backbase/dev-preferences'),
			components: !!md.findParagraphList('marked#/backbase/components'),
			description: md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[1]),
			templates: !!md.findParagraphList('marked#/backbase/templates'),
			dependencies: !!md.findParagraphList('marked#/backbase/dependencies'),
			devDependencies: !!md.findParagraphList('marked#/backbase/dev-dependencies'),
			test: !!~testSectionIndex && md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[testSectionIndex + 1]),
			tests: shell.find('./test/').filter(function(file){
				return /\.js$/i.test(file)
			}),
			screenshot: files.screenshot,
			diagram: files.diagram,
			locale: !!files.locale,
			demo: !!files.demo,
			date: moment().format('DD/MM/YYYY, h:mma')
		};

		files.readmePost.json.documentation = report;
	}
}, {
	difference: codeResource.difference
});