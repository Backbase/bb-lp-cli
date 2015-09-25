var _ = require('lodash');

module.exports = _.mixin({
	url: 'devDependencies',
	schema: 'marked#/backbase/dev-dependencies'
}, require('./dependencies'));