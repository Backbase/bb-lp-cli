var _ = require('lodash');

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
			console.log('Cannot find module information in a README file');
			return;
		}

		information.cells[0][1] = version;
	}
};