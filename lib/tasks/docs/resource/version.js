var _ = require('lodash');
var display = require('../../../utils').display();

module.exports = {
	url: 'version',
	dependencies: {
		readme: './README.md'
	},

	difference: function(files, version){
		return version ? [version] : [];
	},

	update: function(files, version){
		var information = files.readmePost.find('marked#/backbase/information');
		if(!information) {
			display.info('Cannot find module information in a README file');
			return;
		}

		information.cells[0][1] = version;
	}
};