var _ = require('lodash');

module.exports = _.defaults({
	url: 'devDependencies',
	schema: 'marked#/backbase/dev-dependencies'
}, require('./dependencies'));