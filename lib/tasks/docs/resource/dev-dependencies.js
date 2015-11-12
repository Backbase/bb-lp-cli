var _ = require('lodash');

module.exports = _.mixin({
	url: 'devDependencies',
	schema: 'marked#/backbase/dev-dependencies',
	dependencies: {
		readme: './README.md',
		bower: './bower.json'
	}
}, require('./dependencies'));