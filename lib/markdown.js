var _ = require('lodash');
var fs = require('fs');
var display = require('./utils').display();
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

var markedRenderer = require('marked-to-md')(new marked.Renderer());
markedRenderer.tablerow = function(content) {
    return '| ' + content.slice(0, -1) + '\n';
};

// @see https://rawgit.com/zaggino/z-schema/master/benchmark/results.html
var schema = require('jjv-utils')(require('./schema/marked.json'));

module.exports = function (text) {
	var structure = marked.lexer(text || '');

	return {
		schema: schema,
		structure: structure,
		json: {},

		find: function (path) {
			return _.find(structure, schema.generate(path));
		},

		findIndex: function (path, fromIndex) {
			var source = structure;
			var foundIndex;

			if (fromIndex > 0) {
				source = structure.slice(fromIndex);
			} else {
				fromIndex = 0;
			}

			foundIndex = _.findIndex(source, schema.generate(path));
			return foundIndex === -1 ? foundIndex : (foundIndex + fromIndex);
		},

		findParagraphList: function (paragraphPath, textOnly) {
			var paragraphIndexInc = this.findIndex(paragraphPath) + 1;
			var firstListIndex;
			var nextParagraphIndex;
			var paragraphType;

			if (!paragraphIndexInc) {
				display.info('Cannot find ' + paragraphPath + ' paragraph');
				return;
			}

			firstListIndex = this.findIndex('marked#/list_start', paragraphIndexInc);
			paragraphType = 'marked#/' + this.structure[paragraphIndexInc - 1].type;

			if (!schema.env.resolveRef(null, paragraphType)) {
				paragraphType = 'marked#/section';
			}

			nextParagraphIndex = this.findIndex(paragraphType, paragraphIndexInc);
			if (nextParagraphIndex !== -1 && nextParagraphIndex < firstListIndex) {
				//display.debug('Cannot find a direct list after ' + paragraphPath + ' paragraph');
				return;
			}

			var list = this.findList(paragraphIndexInc);
			if (!textOnly) {
				return list;
			}

			return _.chain(list)
				.filter(schema.generate('marked#/text'))
				.pluck('text')
				.value();
		},

		findList: function findList(fromIndex) {
			var firstListIndex = this.findIndex('marked#/list_start', fromIndex);
			if (!~firstListIndex) {
				return;
			}

			var lastListIndex = this.findIndex('marked#/list_end', firstListIndex);
			if (!~lastListIndex) {
				return;
			} else {
                // omit <end list><start list>
                while(structure[lastListIndex + 1] && schema.is('marked#/list_start', structure[lastListIndex + 1])) {
                    var nextLastIndex = this.findIndex('marked#/list_end', lastListIndex + 1);
                    if(~nextLastIndex) {
                        lastListIndex = nextLastIndex;
                    }
                }
            }

			return structure.slice(firstListIndex, lastListIndex + 1);
		},

		createList: function (texts, ordered) {
			return [].concat(
				{ type: 'list_start', ordered: !!ordered },
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

		/**
		 * Replace oldItems to newItems in a structure
		 * @param {Object/Array} oldItem[s] to replace in structure
		 * @param {Object/Array} newItem[s] to add in structure
		 */
		// TODO change replace logics to check all items
		// TODO add new
		replace: function (oldItems, newItems) {
			oldItems = [].concat(oldItems);
			newItems = [].concat(newItems);

			var startIndex = structure.indexOf(oldItems[0]);
			if (!~startIndex) {
				display.info('Items to replace not found in structure');
				return;
			}

			structure.splice.apply(structure, [startIndex, oldItems.length].concat(newItems));
		},

		toString: function (mode) {
			var parser = new marked.Parser({
				renderer: markedRenderer
			});

			return unescape(parser.parse(structure));
		}
	};
};

// the problem of escaping input text
// https://github.com/chjj/marked/blob/master/lib/marked.js#L1088
function unescape(html) {
	return html
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, '\'');
}
