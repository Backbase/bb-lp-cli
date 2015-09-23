var _ = require('lodash');
var marked = require('marked');
var markedRenderer = require('marked-to-md')(new marked.Renderer());

// @see https://rawgit.com/zaggino/z-schema/master/benchmark/results.html
var schema = require('../../schema')(require('../../schema/marked.json'));

module.exports = function (text) {
	var structure = marked.lexer(text);

	return {
		schema: schema,
		structure: structure,

		find: function (path) {
			return _.find(structure, schema.generate(path));
		},

		findIndex: function (path, fromIndex) {
			var source = structure;
			if(fromIndex > 0) {
				source = structure.slice(fromIndex);
			} else {
				fromIndex = 0;
			}

			return _.findIndex(source, schema.generate(path)) + fromIndex;
		},

		// TODO add check for other paragraphs beneath
		findParagraphList: function(paragraphPath){
			var paragraphIndex = this.findIndex(paragraphPath);
			if(paragraphIndex === -1) {
				console.log('Cannot find a ' + paragraphPath + ' paragraph');
				return;
			}

			return this.findList(paragraphIndex + 1);
		},

		// TODO add checkers
		findList: function findList(fromIndex) {
			var firstListIndex = this.findIndex('marked#/list_start', fromIndex);
			var lastListIndex = this.findIndex('marked#/list_end', firstListIndex);

			return structure.slice(firstListIndex, lastListIndex + 1);
		},

		createList: function (texts) {
			return [].concat(
				{ type: 'list_start', ordered: false },
				_.reduce(texts, function (memo, text) {
					memo.push.apply(memo, [
						{ type: 'list_item_start' },
						{ type: 'text', text: text },
						{ type: 'list_item_end' }
					]);
					return memo;
				}, []),
				{ type: 'list_end' }
			);
		},

		// TODO add checkers
		replace: function (oldItems, newItems) {
			var startIndex = structure.indexOf(oldItems[0]);
			structure.splice.apply(structure, [startIndex, oldItems.length].concat(newItems));
		},

		toString: function () {
			var parser = new marked.Parser({
				renderer: markedRenderer
			});

			return parser.parse(structure);
		}
	};
};