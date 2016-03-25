/* bb-lp-cli@v1.9.1-beta.7 build with ♥ by bb-lp-cli@v1.9.1-beta.7 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cliparse"), require("colors"), require("path"), require("promise"), require("shelljs"), require("lodash"), require("deep-merge"), require("fs"), require("jxon"), require("inquirer"), require("xml2js"), require("fs-extra-promise"), require("logdown"), require("git-config"), require("gulp"), require("del"), require("webpack"), require("webpack-stream"), require("gulp-load-plugins"), require("proxy-middleware"), require("browser-sync"), require("url"), require("run-sequence"), require("source-map"), require("source-list-map"), require("bower-webpack-plugin"), require("ng-annotate-webpack-plugin"), require("autoprefixer"), require("vinyl-named"), require("through2"), require("js-yaml"), require("gulp-jsdoc-to-markdown"), require("gulp-util"), require("@backbase/import"), require("mosaic-rest-js"), require("@backbase/cli-config"), require("connect-modrewrite"), require("raml-mocker"), require("route-pattern"), require("gulp-cached"), require("karma"), require("semver"), require("marked"), require("marked-to-md"), require("jjv-utils"), require("escomplex-js"), require("analyze-css"), require("moment"), require("css"), require("base64-js"), require("ieee754"), require("isarray"), require("raml2md"), require("raml2html"), require("xml2js-xpath"), require("child_process"), require("stash-rest-api"), require("glob"), require("node-yaml-config"), require("esprima"), require("escodegen"), require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["cliparse", "colors", "path", "promise", "shelljs", "lodash", "deep-merge", "fs", "jxon", "inquirer", "xml2js", "fs-extra-promise", "logdown", "git-config", "gulp", "del", "webpack", "webpack-stream", "gulp-load-plugins", "proxy-middleware", "browser-sync", "url", "run-sequence", "source-map", "source-list-map", "bower-webpack-plugin", "ng-annotate-webpack-plugin", "autoprefixer", "vinyl-named", "through2", "js-yaml", "gulp-jsdoc-to-markdown", "gulp-util", "@backbase/import", "mosaic-rest-js", "@backbase/cli-config", "connect-modrewrite", "raml-mocker", "route-pattern", "gulp-cached", "karma", "semver", "marked", "marked-to-md", "jjv-utils", "escomplex-js", "analyze-css", "moment", "css", "base64-js", "ieee754", "isarray", "raml2md", "raml2html", "xml2js-xpath", "child_process", "stash-rest-api", "glob", "node-yaml-config", "esprima", "escodegen", "util"], factory);
	else if(typeof exports === 'object')
		exports["bb-lp-cli"] = factory(require("cliparse"), require("colors"), require("path"), require("promise"), require("shelljs"), require("lodash"), require("deep-merge"), require("fs"), require("jxon"), require("inquirer"), require("xml2js"), require("fs-extra-promise"), require("logdown"), require("git-config"), require("gulp"), require("del"), require("webpack"), require("webpack-stream"), require("gulp-load-plugins"), require("proxy-middleware"), require("browser-sync"), require("url"), require("run-sequence"), require("source-map"), require("source-list-map"), require("bower-webpack-plugin"), require("ng-annotate-webpack-plugin"), require("autoprefixer"), require("vinyl-named"), require("through2"), require("js-yaml"), require("gulp-jsdoc-to-markdown"), require("gulp-util"), require("@backbase/import"), require("mosaic-rest-js"), require("@backbase/cli-config"), require("connect-modrewrite"), require("raml-mocker"), require("route-pattern"), require("gulp-cached"), require("karma"), require("semver"), require("marked"), require("marked-to-md"), require("jjv-utils"), require("escomplex-js"), require("analyze-css"), require("moment"), require("css"), require("base64-js"), require("ieee754"), require("isarray"), require("raml2md"), require("raml2html"), require("xml2js-xpath"), require("child_process"), require("stash-rest-api"), require("glob"), require("node-yaml-config"), require("esprima"), require("escodegen"), require("util"));
	else
		root["bb-lp-cli"] = factory(root["cliparse"], root["colors"], root["path"], root["promise"], root["shelljs"], root["lodash"], root["deep-merge"], root["fs"], root["jxon"], root["inquirer"], root["xml2js"], root["fs-extra-promise"], root["logdown"], root["git-config"], root["gulp"], root["del"], root["webpack"], root["webpack-stream"], root["gulp-load-plugins"], root["proxy-middleware"], root["browser-sync"], root["url"], root["run-sequence"], root["source-map"], root["source-list-map"], root["bower-webpack-plugin"], root["ng-annotate-webpack-plugin"], root["autoprefixer"], root["vinyl-named"], root["through2"], root["js-yaml"], root["gulp-jsdoc-to-markdown"], root["gulp-util"], root["@backbase/import"], root["mosaic-rest-js"], root["@backbase/cli-config"], root["connect-modrewrite"], root["raml-mocker"], root["route-pattern"], root["gulp-cached"], root["karma"], root["semver"], root["marked"], root["marked-to-md"], root["jjv-utils"], root["escomplex-js"], root["analyze-css"], root["moment"], root["css"], root["base64-js"], root["ieee754"], root["isarray"], root["raml2md"], root["raml2html"], root["xml2js-xpath"], root["child_process"], root["stash-rest-api"], root["glob"], root["node-yaml-config"], root["esprima"], root["escodegen"], root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_104__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_106__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_116__, __WEBPACK_EXTERNAL_MODULE_119__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_135__, __WEBPACK_EXTERNAL_MODULE_139__, __WEBPACK_EXTERNAL_MODULE_143__, __WEBPACK_EXTERNAL_MODULE_144__, __WEBPACK_EXTERNAL_MODULE_145__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cliparse = __webpack_require__(2);
	var parsers = cliparse.parsers;
	var pckJson = __webpack_require__(3);
	var colors = __webpack_require__(4);
	var utils = __webpack_require__(5);
	var config = __webpack_require__(32);

	/*----------------------------------------------------------------*/
	/* #TODO parse the commands folder and auto generate commands
	/*----------------------------------------------------------------*/
	var BBCLI = cliparse.cli({
	    name: pckJson.name,
	    version: pckJson.version,
	    description: 'Backbase CLI tool',

	    commands: [

	    /*----------------------------------------------------------------*/
	    /* Generate Widget
	    /*----------------------------------------------------------------*/
	    cliparse.command('generate', {
	        description: 'Template path can be a local folder or the repository url. Default is using `widget-ng-template`.',
	        args: [cliparse.argument('template', {
	            description: 'Template git repo',
	            default: 'git@bitbucket.org:backbase/lpg-generator-widget-ng.git'
	        }), cliparse.argument('target', {
	            description: 'Target Folder',
	            default: './'
	        })],
	        options: [cliparse.flag('prcessImages', { aliases: ['i'], description: 'Process images by template engine. Images are excluded by default.' })]
	    }, __webpack_require__(126)),

	    /*----------------------------------------------------------------*/
	    /* Start Widget
	    /*----------------------------------------------------------------*/
	    cliparse.command('start', {
	        description: 'Start local development brwserSync server on http://localhost:3000/.',
	        args: [],
	        options: [cliparse.flag('apiVersion', { aliases: ['a'], description: 'Add version to raml api paths' }), cliparse.option('logLevel', {
	            aliases: ['l'],
	            description: 'Log level notifications' + [, 'info'.info,
	            //'debug'.debug,
	            //'warn'.warn,
	            'silent'.gray].join(' | '),
	            parser: function parser(v) {
	                if (['debug', 'info', 'silent', 'warn', 'error'].indexOf(v) !== -1) return { success: v };else return { error: 'Wrong log level setting indicator'.red };
	            },
	            default: 'info'
	        }), cliparse.option('port', {
	            aliases: ['p'],
	            parser: cliparse.parsers.intParser,
	            description: 'Server port',
	            defaultValue: null
	        }), cliparse.flag('expand', {
	            aliases: ['e'],
	            description: 'Do not minify files.',
	            default: false
	        }), cliparse.option('template', {
	            parser: cliparse.parsers.stringParser,
	            description: 'Template to use for standalone mode, default to local ' + 'index.dev.html'.green,
	            defaultValue: null
	        }), cliparse.flag('deploy', { aliases: ['d'], description: 'Deploy item to running portal' })]
	    }, __webpack_require__(130)),

	    /*----------------------------------------------------------------*/
	    /* Test Widget
	    /*----------------------------------------------------------------*/
	    /**
	     * @todo add unit / functional / api tests
	     * @type {String}
	     */
	    cliparse.command('test', {
	        description: 'Test the widget/module using karma test runner and PhantomJS',
	        args: [
	            // cliparse.argument('type', { description: "Unit test", default: 'unit', })
	        ],
	        options: [cliparse.flag('watch', { aliases: ['w'], description: 'Watch files' }), cliparse.flag('coverage', { aliases: ['c'], description: 'With coverage' }), cliparse.option('config', { description: 'Custom karma configuration file' }), cliparse.option('browsers', { description: 'A comma separated list of browsers to launch and capture' }), cliparse.option('moduleDirectories', { description: 'A comma separated list of the shared components' })]
	    }, __webpack_require__(131)),

	    /*----------------------------------------------------------------*/
	    /* Build Widget
	    /*----------------------------------------------------------------*/
	    cliparse.command('build', {
	        description: 'Bundles pacakge resources.',
	        args: [
	            // cliparse.argument('config', {
	            //     description: 'path to config file for components management',
	            //     default: ''
	            // }),
	            // cliparse.argument('excludes', {
	            //     description: 'array of components to exclude',
	            //     default: ''
	            // }),
	            // cliparse.argument('destination', {
	            //     description: 'name of target file',
	            //     default: ''
	            // })
	        ],
	        options: [cliparse.flag('fullTest', { aliases: ['f'], description: 'Run a full test (unit/lint)' }), cliparse.flag('all', { aliases: ['a'], description: 'Include all external dependencies' }), cliparse.flag('withTemplates', { aliases: ['t'], description: 'Bundle HTML templates into build file (for widgets)' }), cliparse.flag('withModuleId', { aliases: ['m'], description: 'Build with AMD module ID in definition', default: true }), cliparse.flag('withPerformance', { aliases: ['p'], description: 'Parse performance annotations' }), cliparse.flag('expand', { aliases: ['e'], description: 'Do not minify files.' }),
	        //cliparse.flag('withConfig', { aliases: ['c'], description: 'Build with config witch is passed as an argument'}),
	        //cliparse.flag('withCustomEntry', { aliases: ['e'], description: 'Build with custom entry point (works with excludes)'}),
	        // cliparse.flag('withExcludes', { aliases: ['x'], description: 'Exclude components from main file'}),

	        cliparse.option('moduleDirectories', { description: 'A comma separated list of the shared components' })]
	    }, __webpack_require__(36)),
	    /*----------------------------------------------------------------*/
	    /* Deploy package
	    /*----------------------------------------------------------------*/
	    cliparse.command('deploy', {
	        description: 'Deploys package in CXP portal.',
	        args: [],
	        options: [cliparse.flag('all', { aliases: ['a'], description: 'Deploy package plus dependencies.' })]
	    }, __webpack_require__(121)),
	    /*----------------------------------------------------------------*/
	    /* Bump bower version
	    /*----------------------------------------------------------------*/
	    cliparse.command('bump', {
	        description: 'Bump package version will affect README.md and CHANGELOG.md',
	        args: [cliparse.argument('VERSION', {
	            description: ['major'.gray + ' [X'.green + '.x.x]', 'minor'.gray + ' [x.' + 'X'.green + '.x]', 'patch'.gray + ' [x.x.' + 'X'.green + ']', 'pre'.gray + ' [x.x.x-pre.' + 'X'.green + ']'
	            // @todo support for specific tags
	            ].join(' '),
	            parser: function parser(v) {
	                if (['major', 'minor', 'patch', 'pre'].indexOf(v) !== -1) return { success: v };else return { error: 'Wrong version!'.red };
	            }
	        }), cliparse.argument('MESSAGE', {
	            description: 'Bump message',
	            default: ''
	        })],
	        options: [
	        /**
	         * Add suffix for pre release versions
	         */
	        cliparse.option('suffix', {
	            description: 'Pre-release suffix. Ex: -beta.0, -rc.0',
	            default: 'pre'
	        }),
	        /**
	         * @todo
	         *  - template
	         * Update the CHANGELOG file
	         */
	        cliparse.option('changelog', {
	            description: 'Update CHANGELOG with commit messages',
	            default: 'CHANGELOG.md'
	        })
	        // deprecated will be moved to bblp docs
	        // cliparse.flag('version-only', { aliases: ['v'], description: 'In version-only mode only README version section will be updated'})
	        ]
	    }, __webpack_require__(79)),
	    /*----------------------------------------------------------------*/
	    /* Register package
	    /*----------------------------------------------------------------*/
	    cliparse.command('register', {
	        description: 'Package manager type. Eg. `bblp register npm/bower`',
	        args: [cliparse.argument('manager', {
	            description: 'Package manager',
	            parser: function parser(v) {
	                if (['bower', 'npm'].indexOf(v) !== -1) return { success: v };else return { error: 'Wrong manager name!'.red };
	            },
	            default: 'bower' // will be deprecated in favor for npm
	        })],
	        options: [cliparse.option('registry', {
	            description: 'Registry endpoint.',
	            parser: function parser(value) {
	                if (!utils.isString(value) || !utils.isUrl(value)) {
	                    return { error: colors.error('Registry option must be an valid url endpoint') };
	                }
	                return { success: value };
	            }
	        })]
	    }, __webpack_require__(129)),
	    /*----------------------------------------------------------------*/
	    /* Unregister package
	    /*----------------------------------------------------------------*/
	    cliparse.command('unregister', {
	        description: 'Package manager type. Eg. `bblp unregister npm/bower`',
	        args: [cliparse.argument('manager', {
	            description: 'Package manager',
	            parser: function parser(v) {
	                if (['bower', 'npm'].indexOf(v) !== -1) return { success: v };else return { error: 'Wrong manager name!'.red };
	            },
	            default: 'bower' // will be deprecated in favor for npm
	        })],
	        options: [cliparse.option('registry', {
	            description: 'Registry endpoint.',
	            parser: function parser(value) {
	                if (!utils.isString(value) || !utils.isUrl(value)) {
	                    return { error: colors.error('Registry option must be an valid url endpoint') };
	                }
	                return { success: value };
	            }
	        }), cliparse.flag('force', { aliases: ['f'], description: 'force', default: false })]
	    }, __webpack_require__(132)),
	    /*----------------------------------------------------------------*/
	    /* Clean Package
	    /*----------------------------------------------------------------*/
	    cliparse.command('clean', {
	        description: 'Clean the package generated folders',
	        args: [],
	        options: []
	    }, __webpack_require__(117)),
	    /*----------------------------------------------------------------*/
	    /* DEP Custom Build
	    /*----------------------------------------------------------------*/
	    // cliparse.command('custom-build', {
	    //     description: '[DEP] Builds the widget/module using custom entry points.',
	    //     args: [
	    //         cliparse.argument('config', {
	    //             description: 'path to config file for components management',
	    //             default: ''
	    //         })
	    //     ],
	    //     options: [
	    //         cliparse.flag('withTemplates', { aliases: ['t'], description: 'Bundle HTML templates into build file (for widgets)'}),
	    //         cliparse.flag('useUnminified', { aliases: ['u'], description: 'Build with unminified scripts'}),
	    //         cliparse.flag('verbose', { aliases: ['v'], description: 'Flag to turn on/off webpack output'}),
	    //         cliparse.flag('withPerformance', { aliases: ['p'], description: 'Parse performance annotations'})
	    //     ]
	    // }, require('../lib/commands/common/custom-build') ),

	    /*----------------------------------------------------------------*/
	    /* Build docs
	    /*----------------------------------------------------------------*/
	    cliparse.command('docs', {
	        description: 'Generates documentation',
	        args: [],
	        options: [cliparse.flag('api', { aliases: ['a'], description: 'Generate API reference markdown' }), cliparse.option('services', {
	            description: 'Generate documentation from RAML files. Used for raml services'
	        }), cliparse.flag('stats', { aliases: ['s'], description: 'Generate checklist statistics markdown' }), cliparse.flag('report', { aliases: ['r'], description: 'Generate an .csv checklist report file' }), cliparse.option('update', { description: 'Update manual checklist' })]
	    }, __webpack_require__(122)),
	    /*----------------------------------------------------------------*/
	    /* Commit - Commitizen hook
	    /*----------------------------------------------------------------*/
	    cliparse.command('commit', {
	        description: 'Use conventional commit messaged. Default will run git commit.',
	        args: [],
	        options: []
	    }, __webpack_require__(118)),

	    /*----------------------------------------------------------------*/
	    /* Launchpad theme Commands
	    /*----------------------------------------------------------------*/
	    cliparse.command('theme', __webpack_require__(136))]
	});

	cliparse.parse(BBCLI);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"name": "bb-lp-cli",
		"preferGlobal": true,
		"version": "1.9.1-beta.7",
		"main": "src/cli",
		"bin": {
			"bblp": "bin/bblp"
		},
		"description": "A tool for creating and developing Backbase-Launchpad specific Widgets and Modules.",
		"homepage": "http://github.com/backbase/bb-lp-cli",
		"author": "Backbase",
		"keywords": [
			"widget",
			"backbase",
			"tools",
			"launchpad",
			"cli"
		],
		"repository": {
			"type": "git",
			"url": "http://github.com/backbase/bb-lp-cli"
		},
		"dependencies": {
			"@backbase/cli-config": "^1.0.0-alpha.0",
			"@backbase/import": "^1.0.0-alpha.6",
			"analyze-css": "^0.10.2",
			"autoprefixer": "^6.3.3",
			"babel-core": "^6.6.0",
			"babel-eslint": "^5.0.0",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.6.0",
			"babel-preset-react": "^6.5.0",
			"bower-webpack-plugin": "^0.1.8",
			"browser-sync": "^2.4.0",
			"cliparse": "^0.2.5",
			"colors": "^1.0.3",
			"commitizen": "^2.5.0",
			"connect-modrewrite": "^0.8.1",
			"css": "^2.2.1",
			"css-loader": "^0.21.0",
			"deep-merge": "^1.0.0",
			"del": "^1.1.1",
			"escodegen": "^1.7.0",
			"escomplex-js": "^1.2.0",
			"eslint": "^1.10.0",
			"esprima": "^2.6.0",
			"exports-loader": "^0.6.3",
			"file-loader": "^0.8.4",
			"findit": "^2.0.0",
			"fs-extra-promise": "^0.2.0",
			"git-config": "0.0.7",
			"gulp": "^3.8.11",
			"gulp-cached": "^1.1.0",
			"gulp-changed": "^1.2.1",
			"gulp-concat": "^2.5.2",
			"gulp-debug": "^2.0.1",
			"gulp-eslint": "^2.0.0",
			"gulp-header": "^1.7.1",
			"gulp-if": "^2.0.0",
			"gulp-insert": "^0.4.0",
			"gulp-jsdoc-to-markdown": "^1.2.1",
			"gulp-less": "^3.0.5",
			"gulp-load-plugins": "^0.9.0",
			"gulp-merge": "^0.1.1",
			"gulp-minify-css": "^1.2.4",
			"gulp-minify-html": "^1.0.4",
			"gulp-mq-remove": "0.0.2",
			"gulp-ng-annotate": "^1.0.0",
			"gulp-ng-html2js": "^0.2.0",
			"gulp-notify": "^2.2.0",
			"gulp-postcss": "^6.1.0",
			"gulp-rename": "^1.2.2",
			"gulp-replace": "^0.5.4",
			"gulp-rework": "^1.1.0",
			"gulp-sass": "^2.1.1",
			"gulp-size": "^2.0.0",
			"gulp-sourcemaps": "^1.6.0",
			"gulp-template": "^3.0.0",
			"gulp-uglify": "^1.5.1",
			"gulp-util": "^3.0.7",
			"html-minify-loader": "^1.0.0",
			"inquirer": "^0.8.2",
			"isparta": "^3.1.0",
			"isparta-loader": "^1.0.0",
			"jasmine-core": "^2.2.0",
			"jasmine-expect": "^2.0.0-beta1",
			"jasmine-promise-matchers": "^2.0.2",
			"jjv-utils": "^1.0.1",
			"js-yaml": "^3.4.2",
			"json-loader": "^0.5.2",
			"jxon": "^1.5.4",
			"karma": "^0.13.10",
			"karma-chrome-launcher": "^0.1.7",
			"karma-coverage": "^0.5.2",
			"karma-firefox-launcher": "^0.1.6",
			"karma-ie-launcher": "^0.2.0",
			"karma-jasmine": "^0.3.5",
			"karma-mocha-reporter": "^1.0.2",
			"karma-osx-reporter": "^0.2.0",
			"karma-phantomjs-launcher": "^0.1.4",
			"karma-safari-launcher": "^0.1.1",
			"karma-sourcemap-loader": "^0.3.6",
			"karma-webpack": "^1.5.0",
			"less": "^2.5.1",
			"less-loader": "^2.2.0",
			"lodash": "^3.5.0",
			"logdown": "^1.1.1",
			"marked": "^0.3.5",
			"marked-to-md": "^1.0.1",
			"moment": "^2.10.3",
			"mosaic-rest-js": "^0.4.0",
			"ng-annotate-webpack-plugin": "git+https://github.com/sorohan/ng-annotate-webpack-plugin.git",
			"node-yaml-config": "0.0.3",
			"postcss-loader": "^0.8.1",
			"promise": "^6.1.0",
			"proxy-middleware": "^0.11.0",
			"raml-mocker": "git+https://github.com/dragosh/raml-mocker.git",
			"raml2html": "^2.2.0",
			"raml2md": "^2.4.0",
			"raw-loader": "^0.5.1",
			"route-pattern": "0.0.6",
			"run-sequence": "^1.0.2",
			"sass-loader": "^3.1.2",
			"semver": "^5.0.1",
			"shelljs": "^0.5.3",
			"stash-rest-api": "^2.6.0",
			"style-loader": "^0.12.3",
			"through2": "^2.0.0",
			"url-loader": "^0.5.6",
			"vinyl-named": "^1.1.0",
			"webpack": "^1.12.2",
			"webpack-core": "~0.6.0",
			"webpack-stream": "^3.1.0",
			"xml2js": "^0.4.16",
			"xml2js-xpath": "^0.5.0"
		},
		"devDependencies": {
			"istanbul": "^0.2.3",
			"karma-osx-reporter": "^0.2.0",
			"mocha": "^1.17.0",
			"mocha-lcov-reporter": "^0.0.1",
			"should": "^4.0.0"
		},
		"scripts": {
			"lint": "eslint . ",
			"test": "npm run-script lint && mocha --reporter spec"
		},
		"config": {
			"entry": {
				"cli": "src/cli.js"
			}
		},
		"engines": {
			"node": ">=0.12 < 5.0"
		},
		"licenses": [
			{
				"type": "Apache-2.0",
				"url": "https://github.com/backbase/bb-lp-cli/LICENSE"
			}
		]
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*----------------------------------------------------------------*/
	/* Utilities
	/*----------------------------------------------------------------*/
	'use strict';

	var path = __webpack_require__(7);
	var Promise = __webpack_require__(8);
	var shell = __webpack_require__(9);
	var utils = __webpack_require__(10).noConflict();
	var colors = __webpack_require__(11);
	var deepMerge = __webpack_require__(25);
	var fs = __webpack_require__(26);
	var JXON = __webpack_require__(27);
	var _ = __webpack_require__(10);
	var inquirer = __webpack_require__(28);
	var xml2js = __webpack_require__(29);

	JXON.config({
	    attrPrefix: ''
	});

	colors.setTheme({
	    silly: 'rainbow',
	    input: 'grey',
	    verbose: 'cyan',
	    prompt: 'grey',
	    info: 'green',
	    data: 'grey',
	    help: 'cyan',
	    warn: 'yellow',
	    debug: 'blue',
	    error: 'red'
	});

	var postProcessingDefaultConfig = {
	    'json': JSON.parse,
	    'xml': JXON.stringToJs.bind(JXON)
	};

	exports.readFiles = function (inputFiles, postProcessingConfig) {
	    var fs = __webpack_require__(30);
	    var postProcessing = _.extend({}, postProcessingDefaultConfig, postProcessingConfig);
	    var inputFilesExtended = _.map(inputFiles, function (url, key) {
	        var extension = url.replace(/.*\.(\w+)$/, '$1');
	        return {
	            url: url,
	            key: key,
	            extension: extension,
	            post: postProcessing[extension]
	        };
	    });

	    var promise = Promise.all(_.map(inputFilesExtended, function (info) {
	        return fs.existsSync(info.url) && fs.statSync(info.url).isFile() && fs.readFileAsync(info.url);
	    })).then(function (files) {
	        return _.reduce(files, function (memo, stream, index) {
	            var info = inputFilesExtended[index];
	            var result;

	            memo[info.key] = stream && stream.toString();
	            if (info.post && typeof memo[info.key] !== 'undefined') {
	                try {
	                    result = info.post(memo[info.key]);
	                } catch (e) {
	                    result = false;
	                } finally {
	                    memo[info.key + 'Post'] = result;
	                }
	            }

	            return memo;
	        }, {});
	    });

	    return promise;
	};

	exports.readDir = function (currDir) {
	    var dirs = [];
	    var isVisible = function isVisible(path) {
	        return (/(^|.\/)\.+[^\/\.]/g.test(path) === false
	        );
	    };
	    fs.readdirSync(currDir).map(function (file) {
	        return path.join(currDir, file);
	    }).filter(function (file) {
	        return fs.statSync(file).isDirectory();
	    }).forEach(function (file) {
	        dirs.push(file.slice(file.lastIndexOf(path.sep) + 1));
	    });

	    return dirs.filter(isVisible);
	};

	exports.deepMerge = deepMerge(function (target, source, key) {
	    if (target instanceof Array) {
	        return [].concat(target, source);
	    }
	    return source;
	});

	exports.bowerMainJs = function (main) {
	    return utils.isString(main) ? main : utils(main).filter(function (f) {
	        return (/\.js$/.test(f)
	        );
	    }).map(function (f) {
	        return f;
	    }).head();
	};
	exports.getStyleEntry = function (main) {
	    return utils.isString(main) ? main : utils(main).filter(function (f) {
	        return (/\.(scss|css|less)$/.test(f)
	        );
	    }).map(function (f) {
	        return f;
	    }).head();
	};

	exports.excludeDependenciesByName = function (excludes, filePath) {
	    var excludesRegExp = new RegExp('\\s*require\\([\'\"]{1}[\\.\\\/\\\\\\w]+(' + excludes.join('|') + ')[\\\/\\\\\\w]+[\'\"]\\)\\.name,?', 'ig');
	    return fs.readFileSync(filePath).toString().replace(excludesRegExp, '');
	};

	exports.orderMain = function (main) {
	    return utils.isString(main) ? main : utils.sortBy(main, function (f) {
	        return (/\.js$/.test(f) ? 1 : 0
	        );
	    });
	};

	exports.isUrl = function (str) {
	    var re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(:\d{2,4})*\/?$/gi;
	    return re.test(str);
	};
	/*----------------------------------------------------------------*/
	/* Colors
	/*----------------------------------------------------------------*/
	exports.colors = function () {
	    return colors;
	};
	/*----------------------------------------------------------------*/
	/* Paths
	/*----------------------------------------------------------------*/

	exports.escape = function (pathStr) {
	    return pathStr ? pathStr.replace(/[\[\]]/g, '\\$&') : pathStr;
	};

	exports.resolve = function () {
	    return exports.escape(path.resolve.apply(path, Array.prototype.slice.call(arguments)));
	};

	exports.projectPath = function (p) {
	    var pPath = shell.pwd();
	    var cwd = path.join(pPath, '/');
	    return path.resolve(cwd, p || '');
	};

	/**
	 * Checks the file extension
	 * @param  {string} file filepath
	 * @param  {string} ext  extentions
	 * @return {boolean}     has the that extension?
	 */
	exports.fileIs = function fileIs(file, ext) {
	    var re = new RegExp('\\.' + ext + '$', 'i');
	    return re.test(path.extname(file));
	};
	/*----------------------------------------------------------------*/
	/* Display - Use a logging system
	/*----------------------------------------------------------------*/
	exports.display = function (config) {
	    var Logger = __webpack_require__(31);
	    // Logger.disable('*');
	    var inst;
	    return inst instanceof Logger ? inst : inst = new Logger(config);
	};
	/*----------------------------------------------------------------*/
	/* Shell
	/*----------------------------------------------------------------*/
	exports.shell = function (config) {
	    // TODO config;
	    shell.config = config;
	    return shell;
	};

	exports.handleError = function (err) {
	    exports.display().error(colors.error(err));
	    throw new Error(err);
	};

	/*----------------------------------------------------------------*/
	/* Read JSON from file
	/*----------------------------------------------------------------*/
	exports.getJsonFromFile = function (_path) {
	    var config;
	    _path = __webpack_require__(7).resolve(_path);
	    if (typeof _path !== "string" || !_path.length) {
	        throw new Error("Incorrect json file path ", _path);
	    }
	    if (!fs.existsSync(_path)) {
	        throw new Error("File doesn't exist ", _path);
	    }
	    try {
	        config = JSON.parse(fs.readFileSync(_path));
	    } catch (ex) {
	        throw new Error('Can`t read JSON file ', _path, ' ', ex);
	    }
	    return config;
	};

	/*----------------------------------------------------------------*/
	/* Fetch #todo
	/*----------------------------------------------------------------*/

	/*----------------------------------------------------------------*/
	/* Input - Promise based on asking.ask module
	/*----------------------------------------------------------------*/
	exports.prompt = function (questions) {
	    return new Promise(function (resolve) {
	        inquirer.prompt(questions, function (answers) {
	            resolve(answers);
	            return answers;
	        });
	    });
	};

	exports.inquirer = inquirer;
	/**
	 * ------------------------------------------------------------------------
	 * Parsers
	 * ------------------------------------------------------------------------
	 */

	exports.json2xml = function (input) {
	    var builder = new xml2js.Builder();
	    return builder.buildObject(input);
	};

	exports.xml2json = function (input, options) {
	    options = _.defaults({
	        explicitArray: true
	    }, options);
	    var parser = new xml2js.Parser(options);
	    return new Promise(function (resolve, reject) {
	        parser.parseString(input, function (err, result) {
	            if (err) {
	                throw new Error(err);
	            }
	            resolve(result);
	        });
	    });
	};

	exports.banner = function (pkg, config) {
	    var BANNER = '/* ${config.name}@v${config.version} build with ♥ by ${ pkg.name }@v${ pkg.version } */';

	    return utils.template(BANNER)({
	        pkg: pkg,
	        config: config || {},
	        sys: {
	            date: new Date()
	        }
	    });
	};
	/*----------------------------------------------------------------*/
	/* log Object
	/*----------------------------------------------------------------*/
	exports.logObj = function (obj, type) {
	    type = type || 'info';
	    return colors[type](JSON.stringify(obj, null, 4));
	};

	exports.debug = function (params) {
	    var message;
	    if (typeof params === 'string') {
	        message = colors.info(params);
	    } else {
	        message = exports.logObj(params);
	    }
	    console.log(message);
	    process.exit(0);
	};

	/**
	* ------------------------------------------------------------------------
	* Strings
	* ------------------------------------------------------------------------
	*/
	exports.capitalizeFirstLetter = function (str) {
	    str = utils.camelCase(str);
	    return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = utils.mixin(exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//
	// Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
	//
	//   var colors = require('colors/safe);
	//   colors.red("foo")
	//
	//
	var colors = __webpack_require__(13);
	module['exports'] = colors;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*

	The MIT License (MIT)

	Original Library 
	  - Copyright (c) Marak Squires

	Additional functionality
	 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/

	var colors = {};
	module['exports'] = colors;

	colors.themes = {};

	var ansiStyles = colors.styles = __webpack_require__(14);
	var defineProps = Object.defineProperties;

	colors.supportsColor = __webpack_require__(15);

	if (typeof colors.enabled === "undefined") {
	  colors.enabled = colors.supportsColor;
	}

	colors.stripColors = colors.strip = function(str){
	  return ("" + str).replace(/\x1B\[\d+m/g, '');
	};


	var stylize = colors.stylize = function stylize (str, style) {
	  if (!colors.enabled) {
	    return str+'';
	  }

	  return ansiStyles[style].open + str + ansiStyles[style].close;
	}

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	var escapeStringRegexp = function (str) {
	  if (typeof str !== 'string') {
	    throw new TypeError('Expected a string');
	  }
	  return str.replace(matchOperatorsRe,  '\\$&');
	}

	function build(_styles) {
	  var builder = function builder() {
	    return applyStyle.apply(builder, arguments);
	  };
	  builder._styles = _styles;
	  // __proto__ is used because we must return a function, but there is
	  // no way to create a function with a different prototype.
	  builder.__proto__ = proto;
	  return builder;
	}

	var styles = (function () {
	  var ret = {};
	  ansiStyles.grey = ansiStyles.gray;
	  Object.keys(ansiStyles).forEach(function (key) {
	    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
	    ret[key] = {
	      get: function () {
	        return build(this._styles.concat(key));
	      }
	    };
	  });
	  return ret;
	})();

	var proto = defineProps(function colors() {}, styles);

	function applyStyle() {
	  var args = arguments;
	  var argsLen = args.length;
	  var str = argsLen !== 0 && String(arguments[0]);
	  if (argsLen > 1) {
	    for (var a = 1; a < argsLen; a++) {
	      str += ' ' + args[a];
	    }
	  }

	  if (!colors.enabled || !str) {
	    return str;
	  }

	  var nestedStyles = this._styles;

	  var i = nestedStyles.length;
	  while (i--) {
	    var code = ansiStyles[nestedStyles[i]];
	    str = code.open + str.replace(code.closeRe, code.open) + code.close;
	  }

	  return str;
	}

	function applyTheme (theme) {
	  for (var style in theme) {
	    (function(style){
	      colors[style] = function(str){
	        if (typeof theme[style] === 'object'){
	          var out = str;
	          for (var i in theme[style]){
	            out = colors[theme[style][i]](out);
	          }
	          return out;
	        }
	        return colors[theme[style]](str);
	      };
	    })(style)
	  }
	}

	colors.setTheme = function (theme) {
	  if (typeof theme === 'string') {
	    try {
	      colors.themes[theme] = __webpack_require__(16)(theme);
	      applyTheme(colors.themes[theme]);
	      return colors.themes[theme];
	    } catch (err) {
	      console.log(err);
	      return err;
	    }
	  } else {
	    applyTheme(theme);
	  }
	};

	function init() {
	  var ret = {};
	  Object.keys(styles).forEach(function (name) {
	    ret[name] = {
	      get: function () {
	        return build([name]);
	      }
	    };
	  });
	  return ret;
	}

	var sequencer = function sequencer (map, str) {
	  var exploded = str.split(""), i = 0;
	  exploded = exploded.map(map);
	  return exploded.join("");
	};

	// custom formatter methods
	colors.trap = __webpack_require__(17);
	colors.zalgo = __webpack_require__(18);

	// maps
	colors.maps = {};
	colors.maps.america = __webpack_require__(21);
	colors.maps.zebra = __webpack_require__(24);
	colors.maps.rainbow = __webpack_require__(22);
	colors.maps.random = __webpack_require__(23)

	for (var map in colors.maps) {
	  (function(map){
	    colors[map] = function (str) {
	      return sequencer(colors.maps[map], str);
	    }
	  })(map)
	}

	defineProps(colors, init());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	The MIT License (MIT)

	Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/

	var styles = {};
	module['exports'] = styles;

	var codes = {
	  reset: [0, 0],

	  bold: [1, 22],
	  dim: [2, 22],
	  italic: [3, 23],
	  underline: [4, 24],
	  inverse: [7, 27],
	  hidden: [8, 28],
	  strikethrough: [9, 29],

	  black: [30, 39],
	  red: [31, 39],
	  green: [32, 39],
	  yellow: [33, 39],
	  blue: [34, 39],
	  magenta: [35, 39],
	  cyan: [36, 39],
	  white: [37, 39],
	  gray: [90, 39],
	  grey: [90, 39],

	  bgBlack: [40, 49],
	  bgRed: [41, 49],
	  bgGreen: [42, 49],
	  bgYellow: [43, 49],
	  bgBlue: [44, 49],
	  bgMagenta: [45, 49],
	  bgCyan: [46, 49],
	  bgWhite: [47, 49],

	  // legacy styles for colors pre v1.0.0
	  blackBG: [40, 49],
	  redBG: [41, 49],
	  greenBG: [42, 49],
	  yellowBG: [43, 49],
	  blueBG: [44, 49],
	  magentaBG: [45, 49],
	  cyanBG: [46, 49],
	  whiteBG: [47, 49]

	};

	Object.keys(codes).forEach(function (key) {
	  var val = codes[key];
	  var style = styles[key] = [];
	  style.open = '\u001b[' + val[0] + 'm';
	  style.close = '\u001b[' + val[1] + 'm';
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	The MIT License (MIT)

	Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/

	var argv = process.argv;

	module.exports = (function () {
	  if (argv.indexOf('--no-color') !== -1 ||
	    argv.indexOf('--color=false') !== -1) {
	    return false;
	  }

	  if (argv.indexOf('--color') !== -1 ||
	    argv.indexOf('--color=true') !== -1 ||
	    argv.indexOf('--color=always') !== -1) {
	    return true;
	  }

	  if (process.stdout && !process.stdout.isTTY) {
	    return false;
	  }

	  if (process.platform === 'win32') {
	    return true;
	  }

	  if ('COLORTERM' in process.env) {
	    return true;
	  }

	  if (process.env.TERM === 'dumb') {
	    return false;
	  }

	  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
	    return true;
	  }

	  return false;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./colors": 13,
		"./colors.js": 13,
		"./custom/trap": 17,
		"./custom/trap.js": 17,
		"./custom/zalgo": 18,
		"./custom/zalgo.js": 18,
		"./extendStringPrototype": 19,
		"./extendStringPrototype.js": 19,
		"./index": 20,
		"./index.js": 20,
		"./maps/america": 21,
		"./maps/america.js": 21,
		"./maps/rainbow": 22,
		"./maps/rainbow.js": 22,
		"./maps/random": 23,
		"./maps/random.js": 23,
		"./maps/zebra": 24,
		"./maps/zebra.js": 24,
		"./styles": 14,
		"./styles.js": 14,
		"./system/supports-colors": 15,
		"./system/supports-colors.js": 15
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {module['exports'] = function runTheTrap (text, options) {
	  var result = "";
	  text = text || "Run the trap, drop the bass";
	  text = text.split('');
	  var trap = {
	    a: ["\u0040", "\u0104", "\u023a", "\u0245", "\u0394", "\u039b", "\u0414"],
	    b: ["\u00df", "\u0181", "\u0243", "\u026e", "\u03b2", "\u0e3f"],
	    c: ["\u00a9", "\u023b", "\u03fe"],
	    d: ["\u00d0", "\u018a", "\u0500" , "\u0501" ,"\u0502", "\u0503"],
	    e: ["\u00cb", "\u0115", "\u018e", "\u0258", "\u03a3", "\u03be", "\u04bc", "\u0a6c"],
	    f: ["\u04fa"],
	    g: ["\u0262"],
	    h: ["\u0126", "\u0195", "\u04a2", "\u04ba", "\u04c7", "\u050a"],
	    i: ["\u0f0f"],
	    j: ["\u0134"],
	    k: ["\u0138", "\u04a0", "\u04c3", "\u051e"],
	    l: ["\u0139"],
	    m: ["\u028d", "\u04cd", "\u04ce", "\u0520", "\u0521", "\u0d69"],
	    n: ["\u00d1", "\u014b", "\u019d", "\u0376", "\u03a0", "\u048a"],
	    o: ["\u00d8", "\u00f5", "\u00f8", "\u01fe", "\u0298", "\u047a", "\u05dd", "\u06dd", "\u0e4f"],
	    p: ["\u01f7", "\u048e"],
	    q: ["\u09cd"],
	    r: ["\u00ae", "\u01a6", "\u0210", "\u024c", "\u0280", "\u042f"],
	    s: ["\u00a7", "\u03de", "\u03df", "\u03e8"],
	    t: ["\u0141", "\u0166", "\u0373"],
	    u: ["\u01b1", "\u054d"],
	    v: ["\u05d8"],
	    w: ["\u0428", "\u0460", "\u047c", "\u0d70"],
	    x: ["\u04b2", "\u04fe", "\u04fc", "\u04fd"],
	    y: ["\u00a5", "\u04b0", "\u04cb"],
	    z: ["\u01b5", "\u0240"]
	  }
	  text.forEach(function(c){
	    c = c.toLowerCase();
	    var chars = trap[c] || [" "];
	    var rand = Math.floor(Math.random() * chars.length);
	    if (typeof trap[c] !== "undefined") {
	      result += trap[c][rand];
	    } else {
	      result += c;
	    }
	  });
	  return result;

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// please no
	module['exports'] = function zalgo(text, options) {
	  text = text || "   he is here   ";
	  var soul = {
	    "up" : [
	      '̍', '̎', '̄', '̅',
	      '̿', '̑', '̆', '̐',
	      '͒', '͗', '͑', '̇',
	      '̈', '̊', '͂', '̓',
	      '̈', '͊', '͋', '͌',
	      '̃', '̂', '̌', '͐',
	      '̀', '́', '̋', '̏',
	      '̒', '̓', '̔', '̽',
	      '̉', 'ͣ', 'ͤ', 'ͥ',
	      'ͦ', 'ͧ', 'ͨ', 'ͩ',
	      'ͪ', 'ͫ', 'ͬ', 'ͭ',
	      'ͮ', 'ͯ', '̾', '͛',
	      '͆', '̚'
	    ],
	    "down" : [
	      '̖', '̗', '̘', '̙',
	      '̜', '̝', '̞', '̟',
	      '̠', '̤', '̥', '̦',
	      '̩', '̪', '̫', '̬',
	      '̭', '̮', '̯', '̰',
	      '̱', '̲', '̳', '̹',
	      '̺', '̻', '̼', 'ͅ',
	      '͇', '͈', '͉', '͍',
	      '͎', '͓', '͔', '͕',
	      '͖', '͙', '͚', '̣'
	    ],
	    "mid" : [
	      '̕', '̛', '̀', '́',
	      '͘', '̡', '̢', '̧',
	      '̨', '̴', '̵', '̶',
	      '͜', '͝', '͞',
	      '͟', '͠', '͢', '̸',
	      '̷', '͡', ' ҉'
	    ]
	  },
	  all = [].concat(soul.up, soul.down, soul.mid),
	  zalgo = {};

	  function randomNumber(range) {
	    var r = Math.floor(Math.random() * range);
	    return r;
	  }

	  function is_char(character) {
	    var bool = false;
	    all.filter(function (i) {
	      bool = (i === character);
	    });
	    return bool;
	  }
	  

	  function heComes(text, options) {
	    var result = '', counts, l;
	    options = options || {};
	    options["up"] =   typeof options["up"]   !== 'undefined' ? options["up"]   : true;
	    options["mid"] =  typeof options["mid"]  !== 'undefined' ? options["mid"]  : true;
	    options["down"] = typeof options["down"] !== 'undefined' ? options["down"] : true;
	    options["size"] = typeof options["size"] !== 'undefined' ? options["size"] : "maxi";
	    text = text.split('');
	    for (l in text) {
	      if (is_char(l)) {
	        continue;
	      }
	      result = result + text[l];
	      counts = {"up" : 0, "down" : 0, "mid" : 0};
	      switch (options.size) {
	      case 'mini':
	        counts.up = randomNumber(8);
	        counts.mid = randomNumber(2);
	        counts.down = randomNumber(8);
	        break;
	      case 'maxi':
	        counts.up = randomNumber(16) + 3;
	        counts.mid = randomNumber(4) + 1;
	        counts.down = randomNumber(64) + 3;
	        break;
	      default:
	        counts.up = randomNumber(8) + 1;
	        counts.mid = randomNumber(6) / 2;
	        counts.down = randomNumber(8) + 1;
	        break;
	      }

	      var arr = ["up", "mid", "down"];
	      for (var d in arr) {
	        var index = arr[d];
	        for (var i = 0 ; i <= counts[index]; i++) {
	          if (options[index]) {
	            result = result + soul[index][randomNumber(soul[index].length)];
	          }
	        }
	      }
	    }
	    return result;
	  }
	  // don't summon him
	  return heComes(text, options);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);

	module['exports'] = function () {

	  //
	  // Extends prototype of native string object to allow for "foo".red syntax
	  //
	  var addProperty = function (color, func) {
	    String.prototype.__defineGetter__(color, func);
	  };

	  var sequencer = function sequencer (map, str) {
	      return function () {
	        var exploded = this.split(""), i = 0;
	        exploded = exploded.map(map);
	        return exploded.join("");
	      }
	  };

	  addProperty('strip', function () {
	    return colors.strip(this);
	  });

	  addProperty('stripColors', function () {
	    return colors.strip(this);
	  });

	  addProperty("trap", function(){
	    return colors.trap(this);
	  });

	  addProperty("zalgo", function(){
	    return colors.zalgo(this);
	  });

	  addProperty("zebra", function(){
	    return colors.zebra(this);
	  });

	  addProperty("rainbow", function(){
	    return colors.rainbow(this);
	  });

	  addProperty("random", function(){
	    return colors.random(this);
	  });

	  addProperty("america", function(){
	    return colors.america(this);
	  });

	  //
	  // Iterate through all default styles and colors
	  //
	  var x = Object.keys(colors.styles);
	  x.forEach(function (style) {
	    addProperty(style, function () {
	      return colors.stylize(this, style);
	    });
	  });

	  function applyTheme(theme) {
	    //
	    // Remark: This is a list of methods that exist
	    // on String that you should not overwrite.
	    //
	    var stringPrototypeBlacklist = [
	      '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor',
	      'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt',
	      'indexOf', 'lastIndexof', 'length', 'localeCompare', 'match', 'replace', 'search', 'slice', 'split', 'substring',
	      'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'
	    ];

	    Object.keys(theme).forEach(function (prop) {
	      if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
	        console.log('warn: '.red + ('String.prototype' + prop).magenta + ' is probably something you don\'t want to override. Ignoring style name');
	      }
	      else {
	        if (typeof(theme[prop]) === 'string') {
	          colors[prop] = colors[theme[prop]];
	          addProperty(prop, function () {
	            return colors[theme[prop]](this);
	          });
	        }
	        else {
	          addProperty(prop, function () {
	            var ret = this;
	            for (var t = 0; t < theme[prop].length; t++) {
	              ret = colors[theme[prop][t]](ret);
	            }
	            return ret;
	          });
	        }
	      }
	    });
	  }

	  colors.setTheme = function (theme) {
	    if (typeof theme === 'string') {
	      try {
	        colors.themes[theme] = __webpack_require__(16)(theme);
	        applyTheme(colors.themes[theme]);
	        return colors.themes[theme];
	      } catch (err) {
	        console.log(err);
	        return err;
	      }
	    } else {
	      applyTheme(theme);
	    }
	  };

	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);
	module['exports'] = colors;

	// Remark: By default, colors will add style properties to String.prototype
	//
	// If you don't wish to extend String.prototype you can do this instead and native String will not be touched
	//
	//   var colors = require('colors/safe);
	//   colors.red("foo")
	//
	//
	__webpack_require__(19)();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);

	module['exports'] = (function() {
	  return function (letter, i, exploded) {
	    if(letter === " ") return letter;
	    switch(i%3) {
	      case 0: return colors.red(letter);
	      case 1: return colors.white(letter)
	      case 2: return colors.blue(letter)
	    }
	  }
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);

	module['exports'] = (function () {
	  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
	  return function (letter, i, exploded) {
	    if (letter === " ") {
	      return letter;
	    } else {
	      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
	    }
	  };
	})();


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);

	module['exports'] = (function () {
	  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
	  return function(letter, i, exploded) {
	    return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
	  };
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var colors = __webpack_require__(13);

	module['exports'] = function (letter, i, exploded) {
	  return i % 2 === 0 ? letter : colors.inverse(letter);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Configs
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var display = utils.display();
	var git = __webpack_require__(33);
	var path = __webpack_require__(7);

	// #TODO check for bower.json file
	try {
	    var bowerJson = __webpack_require__(35)(utils.projectPath('bower.json'));
	} catch (e) {
	    bowerJson = {};
	}
	try {
	    var packJson = __webpack_require__(35)(utils.projectPath('package.json'));
	} catch (e) {
	    packJson = {};
	}

	var config = packJson.config || bowerJson.config || {};

	exports.main = packJson.main || bowerJson.main; // #TODO show error if is missing
	exports.name = packJson.name || bowerJson.name;
	exports.version = packJson.version || bowerJson.version;
	exports.repository = packJson.repository || bowerJson.repository;

	if (bowerJson.main) {
	    var mainJSFile = utils.bowerMainJs(exports.main); //;
	}

	if (exports.repository && exports.repository.url) {
	    var repository = exports.repository; // #TODO show warning if is missing
	} else {
	        // Find repo in .git/config
	        var gitUrl = git.originUrl();

	        // Only use SSH repos.
	        if (gitUrl && gitUrl.match(/^ssh/)) {
	            exports.repository = { url: gitUrl };
	        }

	        //utils.display().warn('bower.json is missing repository url! Please update it to ' + gitUrl + '\n');
	    }

	exports.paths = utils.extend({
	    scripts: './scripts',
	    docs: './docs',
	    reports: './reports',
	    target: './dist',
	    media: './media',
	    templates: './templates',
	    components: './components',
	    styles: './styles',
	    test: './test',
	    index: './index.dev.html',
	    routes: {}
	}, config.paths || {});

	// RAML api configuration
	exports.data = utils.extend({
	    route: '',
	    useApiVersion: false,
	    files: ['./**/services/**/*.raml', './**/raml/**/*.raml', '!./**/node_modules/**/+(examples|example|test)/**']
	}, config.data);

	exports.proxies = utils.extend({
	    // TO BE REMOVED AFTER MIGRATION ON THE NEW RAML STRUCTURE
	    '/api': 'http://localhost:3030/',
	    '/services/rest': 'http://localhost:3030/'
	}, config.proxies || {});

	exports.eslint = config.eslint;
	exports.karma = config.karma;

	exports.tests = {
	    requestInternalRegExp: /(?:\.\.\/){2}scripts\//,
	    includeInternalRegExp: /^(?!.*(?:node_modules|bower_components)).*\.spec(?:\.js)?$/
	};

	exports.server = {
	    port: null // generated by browsersync
	};
	exports.build = {};

	// override the main entry point to use separate sources entry for build
	// and use main property from package for distribution
	exports.entry = function () {
	    if (!utils.isUndefined(exports.main)) {
	        var name = utils.bowerMainJs(exports.main);
	        if (!utils.isUndefined(name)) {
	            name = path.normalize(name.replace('./src', './'));
	        } else {
	            name = exports.name;
	        }

	        var output = {
	            name: name,
	            path: exports.main
	        };

	        if (!utils.isUndefined(config.entry)) {
	            output = utils(config.entry).map(function (k, v) {
	                return {
	                    name: v,
	                    path: k
	                };
	            }).head();
	        }

	        var startsWithDot = function startsWithDot(input) {
	            // in webpack you need to add './' on the entry
	            // https://github.com/webpack/webpack/issues/1908
	            if (!utils.startsWith(input, '.', 0)) {
	                input = './' + input;
	            }
	            return input;
	        };

	        if (!utils.isArray(output.path, '.', 0)) {
	            output.path = [output.path];
	        }

	        output.name = output.name.replace('.js', '');
	        output.path = utils(output.path).map(startsWithDot).value();

	        return output;
	    }
	}();

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Git related functions
	/*----------------------------------------------------------------*/
	// @todo check nodegit modules

	var utils = __webpack_require__(5);
	var shell = utils.shell();
	exports.cloneRepo = function (url, name) {
	    return shell.exec('git clone ' + url + ' ' + name);
	};

	exports.checkout = function checkout(branch) {
	    return shell.exec('git checkout ' + branch);
	};

	exports.originUrl = function originUrl() {
	    var url;
	    var gitConfig = __webpack_require__(34);
	    // Load gitconfig.
	    try {
	        var gitJson = gitConfig.sync(utils.projectPath('.git/config'));
	        if (gitJson['remote "origin"']) {
	            url = gitJson['remote "origin"'].url;
	        }
	    } catch (e) {}

	    return url;
	};

	exports.getLatestCommitHash = function getLatestCommitHash(url, branch) {
	    return shell.exec('git ls-remote ' + url + ' ' + branch).output.split('\t')[0];
	};

	/**
	 * Get the last tag name
	 * @todo
	 *     - handle errors
	 *     - log command
	 * @return {string} tag name
	 */
	exports.getLastTag = function getLastTag() {
	    var cmd = 'git describe --abbrev=0 --tags';
	    var out = shell.exec(cmd, { silent: true });
	    if (out.code !== 0) {
	        return null;
	    }
	    return utils.trim(out.output);
	};
	/**
	 * GetCommitMessages
	 * @todo
	 *     - include commit hash
	 * @param  {string} tag Tag name
	 * @return {array}     Array of messages
	 */
	exports.getCommitMessages = function getCommitMessages(tag) {
	    var cmd = 'git log ${tag}..HEAD --pretty=format:%s --no-merges';
	    cmd = utils.template(cmd)({ tag: tag });
	    var out = shell.exec(cmd, { silent: true });
	    if (out.code !== 0) {
	        return [];
	    }
	    return out.output.split('\n');
	};

	/**
	 * Get git configuration properties
	 */
	exports.getConfig = function (prop, glob) {
	    var cmd = 'git config ${glob} ${prop}';
	    cmd = utils.template(cmd)({ prop: prop, glob: glob });
	    var out = shell.exec(cmd, { silent: true });
	    if (out.code !== 0) {
	        return '';
	    }
	    return utils.trim(out.output);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./commands/common/build": 36,
		"./commands/common/build.js": 36,
		"./commands/common/bump": 79,
		"./commands/common/bump.js": 79,
		"./commands/common/clean": 117,
		"./commands/common/clean.js": 117,
		"./commands/common/commit": 118,
		"./commands/common/commit.js": 118,
		"./commands/common/custom-build": 120,
		"./commands/common/custom-build.js": 120,
		"./commands/common/deploy": 121,
		"./commands/common/deploy.js": 121,
		"./commands/common/docs": 122,
		"./commands/common/docs.js": 122,
		"./commands/common/generate": 126,
		"./commands/common/generate.js": 126,
		"./commands/common/install": 127,
		"./commands/common/install.js": 127,
		"./commands/common/link": 128,
		"./commands/common/link.js": 128,
		"./commands/common/register": 129,
		"./commands/common/register.js": 129,
		"./commands/common/start": 130,
		"./commands/common/start.js": 130,
		"./commands/common/test": 131,
		"./commands/common/test.js": 131,
		"./commands/common/unregister": 132,
		"./commands/common/unregister.js": 132,
		"./commands/theme/build": 133,
		"./commands/theme/build.js": 133,
		"./commands/theme/gulp": 134,
		"./commands/theme/gulp.js": 134,
		"./commands/theme/index": 136,
		"./commands/theme/index.js": 136,
		"./config": 32,
		"./config.js": 32,
		"./configs/eslint.conf": 137,
		"./configs/eslint.conf.json": 137,
		"./configs/karma.conf": 138,
		"./configs/karma.conf.js": 138,
		"./configs/webpack.conf": 61,
		"./configs/webpack.conf.js": 61,
		"./git": 33,
		"./git.js": 33,
		"./loaders/custom-deps-loader": 141,
		"./loaders/custom-deps-loader.js": 141,
		"./loaders/injecting-loader": 142,
		"./loaders/injecting-loader.js": 142,
		"./loaders/performance-loader": 146,
		"./loaders/performance-loader.js": 146,
		"./markdown": 82,
		"./markdown.js": 82,
		"./node-stash": 124,
		"./node-stash.js": 124,
		"./plugins/blank-template-plugin": 55,
		"./plugins/blank-template-plugin.js": 55,
		"./plugins/custom-lib-template": 47,
		"./plugins/custom-lib-template.js": 47,
		"./plugins/umd-template-plugin": 48,
		"./plugins/umd-template-plugin.js": 48,
		"./portal": 66,
		"./portal.js": 66,
		"./questions": 123,
		"./questions.js": 123,
		"./schema/css": 100,
		"./schema/css.json": 100,
		"./schema/marked": 86,
		"./schema/marked.json": 86,
		"./shims/bind": 147,
		"./shims/bind.js": 147,
		"./tasks": 37,
		"./tasks.js": 37,
		"./tasks/docs/index": 81,
		"./tasks/docs/index.js": 81,
		"./tasks/docs/resource/code": 88,
		"./tasks/docs/resource/code.js": 88,
		"./tasks/docs/resource/components": 92,
		"./tasks/docs/resource/components.js": 92,
		"./tasks/docs/resource/dependencies": 93,
		"./tasks/docs/resource/dependencies.js": 93,
		"./tasks/docs/resource/dev-dependencies": 94,
		"./tasks/docs/resource/dev-dependencies.js": 94,
		"./tasks/docs/resource/documentation": 95,
		"./tasks/docs/resource/documentation.js": 95,
		"./tasks/docs/resource/extensibility": 97,
		"./tasks/docs/resource/extensibility.js": 97,
		"./tasks/docs/resource/mobile": 98,
		"./tasks/docs/resource/mobile.js": 98,
		"./tasks/docs/resource/preferences": 90,
		"./tasks/docs/resource/preferences.js": 90,
		"./tasks/docs/resource/version": 101,
		"./tasks/docs/resource/version.js": 101,
		"./tasks/docs/services": 102,
		"./tasks/docs/services.js": 102,
		"./tasks/docs/templates/README.hbs": 110,
		"./tasks/docs/update": 115,
		"./tasks/docs/update.js": 115,
		"./tasks/start/middlewares/proxy": 70,
		"./tasks/start/middlewares/proxy.js": 70,
		"./tasks/start/middlewares/raml": 72,
		"./tasks/start/middlewares/raml.js": 72,
		"./tasks/start/middlewares/rewrite-rules": 76,
		"./tasks/start/middlewares/rewrite-rules.js": 76,
		"./tasks/start/middlewares/schema-formats": 75,
		"./tasks/start/middlewares/schema-formats.js": 75,
		"./utils": 5,
		"./utils.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 35;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*----------------------------------------------------------------*/
	/* Build widget
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var config = __webpack_require__(32);
	var shell = utils.shell();
	var display = utils.display();

	/*----------------------------------------------------------------*/
	/* #TODO Refactor the flow
	/*----------------------------------------------------------------*/
	module.exports = function build(v) {
	    var fullTest = v.options.fullTest;

	    config.build = utils.defaults(config.build || {}, {
	        all: v.options.all,
	        noMinify: v.options.expand
	    });

	    var withTemplates = v.options.withTemplates;
	    var withModuleId = v.options.withModuleId;
	    var withConfig = v.options.withConfig;
	    var withCustomEntry = v.options.withCustomEntry;
	    var withExcludes = v.options.withExcludes;
	    var withPerformance = v.options.withPerformance;

	    var args = function (argsArray) {
	        if (withConfig) {
	            return {
	                configPath: argsArray[0]
	            };
	        }
	        var result = {};
	        if (withExcludes) {
	            result.excludes = argsArray[0].split(',');
	        }
	        if (withCustomEntry) {
	            result.destination = argsArray[withExcludes ? 1 : 0];
	        }
	        return result;
	    }(v.args);
	    display.info('Clean up ...');

	    tasks.clean().then(!fullTest || function () {
	        display.info('Running full test ...');
	        return tasks.lint().then(function () {
	            return tasks.test(v);
	        });
	    }).then(function () {
	        var buildConfig = args.configPath && args.configPath.length && withConfig ? utils.getJsonFromFile(args.configPath) : null;
	        var excludesArray = args.excludes && args.excludes.length && withExcludes ? args.excludes : null;
	        var entryPoint = args.destination && args.destination.length && withCustomEntry ? args.destination : null;

	        var infoMessageArray = ['Building...'];
	        if (withConfig || withExcludes) {
	            infoMessageArray.push('\n\x1b[36m Excluded components:\x1b[0m [' + (withConfig ? buildConfig.excludes : excludesArray).toString() + ']');
	            infoMessageArray.push('\n\x1b[36m Entry point:\x1b[0m ' + (withConfig ? buildConfig.entryPoint : entryPoint));
	        }
	        display.info(infoMessageArray.join(' '));

	        return tasks.build({
	            config: buildConfig,
	            excludes: excludesArray,
	            entryPoint: entryPoint,
	            withModuleId: withModuleId,
	            withPerformance: withPerformance
	        });
	    }).then(function () {
	        if (withTemplates) {
	            display.info('Bundling templates ...');
	            return tasks.build.bundleTemplates();
	        }
	    }).catch(function (err) {
	        utils.handleError(err);
	    }).done(function () {
	        shell.exit(0);
	    });
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname, process) {'use strict';
	/*----------------------------------------------------------------*/
	/* Gulp Tasks
	/*----------------------------------------------------------------*/

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var utils = __webpack_require__(5);
	var display = utils.display();
	var gulp = __webpack_require__(38);
	var fs = __webpack_require__(26);
	var path = __webpack_require__(7);
	var Promise = __webpack_require__(8);
	var del = __webpack_require__(39);
	var webpack = __webpack_require__(40);
	var webpackStream = __webpack_require__(41);
	var g = __webpack_require__(42)();
	var proxy = __webpack_require__(43);
	var server = __webpack_require__(44).create('stand-alone-server');
	var url = __webpack_require__(45);
	var runSeq = __webpack_require__(46).use(gulp);
	var config = __webpack_require__(32);
	var shell = utils.shell();
	var colors = utils.colors();
	var CustomLibraryTemplatePlugin = __webpack_require__(47);
	var BowerWebpackPlugin = __webpack_require__(56);
	var NGAnnotatePlugin = __webpack_require__(57);
	var autoprefixer = __webpack_require__(58);
	var named = __webpack_require__(59);
	var through = __webpack_require__(60);
	var globalWebpackConf = __webpack_require__(61);
	var pkg = __webpack_require__(3);
	var yaml = __webpack_require__(62);
	var gulpJsdoc2md = __webpack_require__(63);
	var gutil = __webpack_require__(64);
	var bbImport = __webpack_require__(65);
	var portal = __webpack_require__(66);

	function createNewEntry(excludes, mainPath, targetFile) {
	    var mainFileContent = fs.readFileSync(mainPath);
	    var entryPath = './' + path.join(config.paths.scripts, path.basename(targetFile));
	    var excludesRegExp = new RegExp('\\s*require\\([\'\"]{1}[\\.\\\/\\\\\\w]+(' + excludes.join('|') + ')[\\\/\\\\\\w]+[\'\"]\\)\\.name,?', 'ig');
	    fs.writeFileSync(entryPath, mainFileContent.toString().replace(excludesRegExp, ''), 'utf8');
	    return entryPath;
	}

	function getPerformanceLoaderOptions(enabled) {
	    return {
	        enabled: enabled,
	        events: {
	            start: 'cxp.performance.start',
	            end: 'cxp.performance.end'
	        }
	    };
	}

	var prependBanner = function prependBanner() {
	    return g.header(utils.banner(pkg, config));
	};

	var gulpEmpty = function gulpEmpty() {
	    return through.obj(function (file, enc, cb) {
	        cb(null, file);
	    });
	};

	var gulpSize = function gulpSize() {
	    return g.size({
	        title: 'File size:',
	        showFiles: true
	    });
	};

	gulp.task('build:scripts', [], function () {
	    var size = gulpSize();
	    var entry = config.entry;

	    if (utils.isUndefined(entry)) {
	        return false;
	    }

	    var webpackConf = utils.deepMerge(globalWebpackConf, {
	        entry: entry.path,
	        output: {
	            path: utils.resolve(config.paths.target),
	            filename: entry.name + '.js'
	        },
	        plugins: [new NGAnnotatePlugin({
	            add: true,
	            sourceMap: true
	        }), new webpack.SourceMapDevToolPlugin({
	            filename: '[file].map',
	            moduleFilenameTemplate: 'webpack:///' + config.name + '/[resourcePath]',
	            fallbackModuleFilenameTemplate: 'webpack:///' + config.name + '/[resourcePath]?[hash]',
	            append: '\n//# sourceMappingURL=[url]',

	            module: true,
	            columns: true,
	            lineToLine: false
	        })]
	    });
	    /**
	     * Example patterns exclusions
	     * ./includethis
	     * ./include-this-one
	     * include/this-one
	     * include-this/one-also
	     * @include/this/one
	     *
	     * excludethis
	     * exclude-this
	     * @exclude/this
	     * @exclude/this-one
	     */

	    if (config.build.all !== true) {
	        webpackConf.externals.unshift(/^(@[^\/]+\/)?[\w-]+$/);
	    } else {
	        display.info('Including external dependencies...');
	    }
	    webpackConf.output.libraryTarget = 'umd';
	    webpackConf.output.library = config.name;

	    if (config.withModuleId) {
	        webpackConf.output.id = config.name;
	    }

	    if (!config.noMinify) {
	        webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({
	            sourceMaps: true,
	            mangle: {
	                keepFnames: true,
	                except: ['exports', 'require']
	            },
	            compress: {
	                drop_debugger: config.isBuild || false
	            }
	        }));
	    } else {
	        display.info('Building uncompressed ...');
	    }
	    webpackConf.plugins.push(new webpack.BannerPlugin(utils.banner(pkg, config), {
	        raw: true,
	        entryOnly: true
	    }));

	    return gulp.src(entry.path).pipe(webpackStream(webpackConf)).on('error', g.notify.onError()).pipe(size).pipe(g.notify({
	        onLast: true,
	        message: function message() {
	            return 'Total JS size ' + size.prettySize;
	        }
	    })).pipe(gulp.dest(config.paths.target));
	});

	gulp.task('server', [], function () {
	    var proxies = config.proxies;
	    var paths = config.paths;
	    var middlewares = ['proxy', 'rewrite-rules', 'raml'].map(function (fileName) {
	        return __webpack_require__(69)("./" + fileName);
	    });

	    var port = config.server.port;
	    var baseDir = [
	    // path.join(__dirname, '/tasks/start/templates/'),
	    path.dirname(paths.index), './', './src', paths.target];
	    var defaultOption = {
	        open: false,
	        directory: false,
	        index: paths.index,
	        logLevel: config.server.logLevel,
	        reloadDebounce: 1000,
	        reloadDelay: 300,
	        server: {
	            baseDir: baseDir,
	            minify: true,
	            middleware: middlewares,
	            routes: paths.routes
	        }
	    };

	    if (!utils.isNull(port)) {
	        defaultOption.port = port;
	    }

	    Object.keys(proxies).forEach(function (k) {
	        var proxyOptions = url.parse(proxies[k]);
	        proxyOptions.route = k;
	        middlewares.push(proxy(proxyOptions));
	    });

	    display.info('Starting standalone server with configuration:', utils.logObj(config));
	    server.init(defaultOption);
	});

	gulp.task('server:reload', function () {
	    server.reload();
	});

	gulp.task('test:lint', function () {
	    // ignore if is not .js entry
	    if (!path.extname(utils.bowerMainJs(config.entry.path))) {
	        return true;
	    }
	    if (config.server.logLevel === 'silent') {
	        return true;
	    }
	    // var defaultPath = config.eslint || 'configs/eslint.conf.yaml';
	    // var customConfig = utils.projectPath(defaultPath);
	    var fallBack = path.resolve(__dirname, 'configs/eslint.conf.json');
	    var rules = __webpack_require__(35)(fallBack);

	    var customConfig = config.eslint;
	    var configOptions = {};
	    var customConfigPath;
	    var yamlCustomConfigPath;
	    var jsonCustomConfigPath;

	    if (!utils.isUndefined(customConfig)) {
	        if (utils.fileIs(customConfig, 'yaml')) {
	            yamlCustomConfigPath = utils.projectPath(customConfig);
	        } else if (utils.fileIs(customConfig, 'json')) {
	            jsonCustomConfigPath = utils.projectPath(customConfig);
	        }
	    } else {
	        customConfig = path.resolve('configs', 'eslint.conf');
	        yamlCustomConfigPath = utils.projectPath(customConfig) + '.yaml';
	        jsonCustomConfigPath = utils.projectPath(customConfig) + '.json';
	    }

	    if (shell.test('-f', yamlCustomConfigPath)) {
	        customConfigPath = yamlCustomConfigPath;
	        configOptions = yaml.safeLoad(fs.readFileSync(yamlCustomConfigPath, 'utf8'));
	    } else if (shell.test('-f', jsonCustomConfigPath)) {
	        customConfigPath = jsonCustomConfigPath;
	        configOptions = __webpack_require__(35)(customConfigPath);
	    }
	    if (customConfigPath) {
	        display.info('Using custom karma config file:', colors.info(customConfigPath));
	    }
	    rules = utils.assign(rules, configOptions);

	    var cache = __webpack_require__(77);
	    var src = [config.paths.scripts + '/**/*.js', '!**/node_modules/**/*.js', '!**/bower_components/**/*.js', '!**/dist/**/*.js', '!**/test/**/*.js', // ignore linting tests
	    '!**/deprecated/**/*.js', '!**/migration/**/*.js'];
	    src = src.concat(utils.bowerMainJs(config.entry));
	    gulp.src(src).pipe(cache('linting')).pipe(g.eslint(rules)).pipe(g.eslint.formatEach()).pipe(g.eslint.failOnError()).on('error', g.notify.onError());
	});

	gulp.task('start', ['test:lint', 'build:scripts', 'build:styles'], function () {
	    // script files to watch.
	    var scriptSrc = [utils.bowerMainJs(config.main) || './**', config.paths.components + '/**/*.js', config.paths.scripts + '/**/*.js', './**/*.ng.html'];

	    // style files to watch.
	    var styleSrc = [config.paths.styles + '/**/*.less', config.paths.styles + '/**/*.scss', config.paths.styles + '/**/*.css', config.paths.scripts + '/**/*.less', config.paths.scripts + '/**/*.scss', config.paths.scripts + '/**/*.css', config.paths.components + '/**/*.scss', config.paths.components + '/**/*.less', config.paths.components + '/**/*.css'];

	    // dist files to watch (everything, excluding dependencies, scripts & styles).
	    var distFiles = ['**', '!**/node_modules/**/*.js', '!**/bower_components/**/*.js'].concat(scriptSrc.map(function (src) {
	        return '!' + src.replace(/^\.\//, '');
	    })).concat(styleSrc.map(function (src) {
	        return '!' + src.replace(/^\.\//, '');
	    }));

	    // watch scripts
	    var watchJsTasks = ['build:scripts', 'server:reload', 'test:lint'];
	    gulp.watch(utils.union(scriptSrc, utils.bowerMainJs(config.entry)), watchJsTasks);

	    // watch styles
	    gulp.watch(styleSrc, ['build:styles']);

	    // watch dist
	    if (config.deploy) {
	        gulp.watch(distFiles, ['deploy:item']);
	    }

	    gulp.watch(config.paths.index, ['server:reload']);
	});

	gulp.task('deploy:item', [], utils.debounce(function () {
	    portal.getRestClient(config).then(function (bbRestClient) {
	        var item = {
	            name: config.name,
	            version: config.version,
	            srcDir: utils.projectPath()
	        };
	        return bbImport.import.importItem(bbRestClient, item).then(function (result) {

	            var message = utils.template('Deploying item to portal ${name}${version} : ${status} ${info}');

	            display.info(message({
	                name: colors.info(config.name),
	                status: result.statusCode,
	                info: result.statusInfo,
	                version: colors.info('@' + result.item.version)
	            }));
	        });
	    }).catch(function (err) {

	        display.warn('Error deploying item:', colors.warn(err.context));
	    });
	}, 500));

	gulp.task('deploy:all', [], utils.debounce(function () {
	    portal.getRestClient(config).then(function (bbRestClient) {
	        return bbImport.import.importCollection(bbRestClient, utils.projectPath()).then(function (results) {
	            var message = utils.template('Deploying item to portal ${name}${version} : ${status} ${info}');

	            results.map(function (result) {
	                display.info(message({
	                    name: colors.info(result.item.name),
	                    status: result.statusCode,
	                    version: colors.info('@' + result.item.version),
	                    info: result.statusInfo
	                }));
	            });
	        });
	    }).catch(function (err) {
	        // console.log(err.context);
	        // process.exit(1);
	        var error = err.context || error;
	        display.warn('Error deploying:', colors.warn(err));
	    });
	}, 500));

	gulp.task('compile:scss', [], function () {

	    var size = gulpSize();
	    return gulp.src(utils.resolve(config.paths.styles, 'index.scss')).pipe(g.sourcemaps.init())
	    // Use sass compiler
	    .pipe(g.sass({
	        outputStyle: config.noMinify ? 'expanded' : 'compressed'
	    }).on('error', g.notify.onError())).pipe(g.postcss([autoprefixer({ browsers: ['last 2 versions'] })])).pipe(g.rename(config.name + '.css')).pipe(server.reload({
	        stream: true
	    })).pipe(prependBanner()).pipe(size).pipe(g.notify({
	        onLast: true,
	        message: function message() {
	            return 'Total CSS size ' + size.prettySize;
	        }
	    })).pipe(g.sourcemaps.write('.')).pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
	});
	// Build styles
	gulp.task('build:styles', ['build:images', 'build:css', 'compile:scss'], function () {
	    var size = gulpSize();
	    return gulp.src(utils.resolve(config.paths.styles, 'base.less'))
	    // Use less compiler
	    .pipe(g.sourcemaps.init()).pipe(g.less({
	        compress: !config.noMinify
	    })).on('error', g.notify.onError()).pipe(g.rename(config.name + '.css')).pipe(g.postcss([autoprefixer({ browsers: ['last 2 versions'] })])).pipe(server.reload({
	        stream: true
	    })).pipe(prependBanner()).pipe(size).pipe(g.notify({
	        onLast: true,
	        message: function message() {
	            return 'Total CSS size ' + size.prettySize;
	        }
	    })).pipe(g.sourcemaps.write('.')).pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
	});

	// Copy styles to dist folder
	gulp.task('build:css', function () {
	    var size = gulpSize();
	    return gulp.src(utils.resolve(config.paths.styles, '*.css')).pipe(g.sourcemaps.init()).pipe(g.less({
	        compress: !config.noMinify
	    })).on('error', g.notify.onError()).pipe(g.rename(config.name + '.css')).pipe(server.reload({
	        stream: true
	    })).pipe(size).pipe(g.notify({
	        onLast: true,
	        message: function message() {
	            return 'Total CSS size ' + size.prettySize;
	        }
	    })).pipe(g.sourcemaps.write('.')).pipe(gulp.dest(path.resolve(config.paths.target, 'styles')));
	});

	// Build images
	gulp.task('build:images', [], function () {
	    var src = utils.resolve(config.paths.media, '**/*');
	    var target = utils.resolve(config.paths.target);
	    var base = config.paths.media.indexOf('src') > 0 ? './src' : './';

	    return gulp.src(src, {
	        base: base
	    }).pipe(g.changed(target)).pipe(gulp.dest(target));
	});

	// Bundle HTML templates into JS

	gulp.task('build:html', [], function () {

	    var src = utils.resolve(config.paths.templates, '*.html');
	    var dest = utils.resolve(config.paths.target, 'scripts');
	    var moduleName = ['launchpad', config.name, 'templates'].join('.');
	    var prefix = path.normalize(config.paths.templates + '/');

	    return gulp.src(src).pipe(g.minifyHtml({
	        empty: true,
	        spare: true,
	        quotes: true
	    })).pipe(g.debug({
	        title: 'process file:'
	    })).pipe(g.ngHtml2js({
	        moduleName: moduleName,
	        prefix: prefix,
	        template: "templateCacheInjector.put('<%= template.url %>', '<%= template.prettyEscapedContent %>');\n"
	    })).pipe(g.concat('templates.js')).pipe(g.insert.wrap("(function(module) {\n" + "  try {\n" + "    module = angular.module('" + moduleName + "');\n" + "  }\n" + "  catch(e) {\n" + "    module = angular.module('" + moduleName + "', []);\n" + "  }\n" + "  module.run(['templateCacheInjector', function(templateCacheInjector) {\n",
	    // ngHtml2js output is wrapped here
	    "  }]);\n" + "})();\n")).pipe(g.uglify()).pipe(gulp.dest(dest));
	});

	gulp.task('build:concat', ['build:html'], function (callback) {

	    var src = [utils.resolve(config.paths.target, 'scripts/main.js'), utils.resolve(config.paths.target, 'scripts/templates.js')];
	    var dest = path.resolve(config.paths.target, 'scripts');

	    gulp.src(src).pipe(g.concat('main.js')).pipe(gulp.dest(dest)).on('end', del.bind(null, src[1], callback));
	});

	// Only bundle templates
	gulp.task('build:bundleTemplates', ['build:html', 'build:concat'], function (done) {
	    done();
	});

	// Build all
	gulp.task('build', ['build:images', 'build:scripts', 'build:styles'], function (done) {
	    done();
	});

	var gulpDocs = function gulpDocs() {
	    var params = {
	        //template: fs.readFileSync(path.resolve(__dirname, './tasks/docs/templates/README.hbs'), 'utf8' )  // not used
	    };
	    var src = [config.paths.scripts + '/**/*.js',
	    // ignore this ones
	    '!**/node_modules/**/*.js', '!**/bower_components/**/*.js', '!**/dist/**/*.js', '!**/test/**/*.js', '!**/deprecated/**/*.js', '!**/migration/**/*.js'];
	    return gulp.src(src).pipe(g.concat('api-dev.md')).pipe(gulpJsdoc2md(params)).pipe(gulp.dest(config.paths.docs));
	};

	gulp.task('build:docs', [], gulpDocs);

	// not supporting params yet
	exports.docs = function (params) {
	    return new Promise(function (resolve, reject) {
	        return gulpDocs(resolve, reject);
	    });
	};

	exports.build = function (args) {
	    var customConfig = args.config || {};
	    config.withModuleId = args.withModuleId || false;

	    config.excludes = customConfig.excludes ? customConfig.excludes : args.excludes ? args.excludes : null;

	    config.customTarget = customConfig.entryPoint ? customConfig.entryPoint : args.entryPoint ? args.entryPoint : undefined;

	    config.withPerformance = args.withPerformance || false;
	    // dirty fix for know to add production plugins for webpack config
	    config.isBuild = true;
	    config.noMinify = config.build.noMinify || false;
	    return new Promise(function (resolve) {
	        runSeq(['build'], resolve);
	    });
	};

	/*
	 * @function createBundle - it creates bundle of widgets with (optional)
	 * customised dependencies
	 *
	 * @param [Object] customConfig - custom build configuration JSON-object
	 *
	 * @param [String] customConfig.dist - bundles destination folder
	 *
	 * @param [Array] customConfig.externals - array of [String]s or [Object]s which represents
	 * set of modules to exclude from every bundle (frameworks, libs, etc.)
	 *
	 * @param [Boolean] customConfig.verbose - it turns on/off additional output
	 * (including set of modules included into each bundle)
	 *
	 * @param [String] customConfig.componentsBase - bundle components base path
	 *
	 * @param [String] customConfig.componentMain - component main script path
	 *
	 * @param [Object] customConfig.bundles - set of bundle [Object]s. Bundle names are used to
	 * define bundle file name ([name]-bundle.js, e.g. my-awesome-bundle.js)
	 *
	 * @param [Array] customConfig.bundles[name].widgets - set of included widget names
	 *
	 * @param [Object] customConfig.bundles[name].customComponents - set of modules with
	 * custom components under the hood
	 *
	 * @param [String] customConfig.bundles[name].customComponents[name]
	 * [name] of component should be the same as in bower.json
	 *
	 * @param [Array] customConfig.bundles[name].customComponents[name].excludes-
	 * components to exclude (e.g.  require('./components/[COMPONENT]/scripts/main').name)
	 * should be similar to nested component path
	 *
	 * @Example
	 *
	 * {
	 *   "dist": "./bundles",
	 *   "bundles": {
	 *       "login-page": {
	 *           "widgets": ["widget-login-multifactor-engage", "widget-device-dna"],
	 *           "customComponents": {
	 *               "ui": {
	 *                   "excludes": ["timer", "smartsuggest"]
	 *               },
	 *           }
	 *       },
	 *       "home-page": {
	 *           "widgets": ["widget-home-page", "widget-transactions"]
	 *       }
	 *   },
	 *   "externals": ["angular", {"name": "jquery", "value": "jQuery"}],
	 *   "verbose": true
	 * }
	 */
	/**
	 * @todo
	 * refactor - remove hard-coded bower_components
	 */
	exports.createBundle = function (customConfig, bundleName, useDist) {
	    customConfig = customConfig || {};
	    var componentBase = customConfig.componentBase || 'bower_components';
	    var componentMain = customConfig.componentMain || 'scripts/main.js';

	    // check if bundle exists & not empty
	    var bundle = customConfig.bundles[bundleName];
	    if (!bundle.widgets || !bundle.widgets.length) {
	        throw new Error('Bundle can`t be empty');
	    }

	    var sources = [];
	    // we have to use core as a default value.
	    var entries = bundle.widgets.reduce(function (entries, widget) {
	        if (typeof widget === "string") {
	            entries[widget] = './' + path.join(componentBase, widget, componentMain);
	            sources.push(entries[widget]);
	        } else if ((typeof widget === 'undefined' ? 'undefined' : _typeof(widget)) === "object" && widget.hasOwnProperty('name') && widget.hasOwnProperty('path')) {
	            entries[widget.name] = widget.path;
	            sources.push(entries[widget.name]);
	        }
	        return entries;
	    }, {
	        "core": ["./bower_components/core/scripts/main.js"]
	    });

	    return new Promise(function (resolve, reject) {
	        gulp.src(sources).pipe(named()).pipe(webpackStream(createBundleConfig({
	            entries: entries,
	            verbose: customConfig.verbose,
	            externals: customConfig.externals || [],
	            bundle: bundle,
	            componentBase: componentBase,
	            componentMain: componentMain,
	            withPerformance: customConfig.withPerformance
	        }))).pipe(g.ngAnnotate()).pipe(useDist ? gulpEmpty() : g.uglify({
	            mangle: {
	                except: ['require']
	            }
	        })).pipe(g.concat(bundleName + '-bundle.js')).pipe(g.size({
	            title: bundleName,
	            showFiles: false
	        })).pipe(gulp.dest(path.resolve(customConfig.dist || './bundles')));
	    });
	};

	/**
	 * @todo refactor to use special webpack-config file
	 */
	function createBundleConfig(options) {
	    var conf = utils.deepMerge(globalWebpackConf, {
	        entry: options.entries,
	        output: {
	            filename: "[name].js",
	            id: "[name]"
	        },
	        verbose: !!options.verbose,
	        quiet: !options.verbose,
	        externals: options.externals.reduce(function (externals, widget) {
	            var widgetIsObject = (typeof widget === 'undefined' ? 'undefined' : _typeof(widget)) === "object";
	            if (widgetIsObject && (!widget.name || !widget.value)) return externals;

	            externals[widgetIsObject ? widget.name : widget] = widgetIsObject ? widget.value : true;
	            return externals;
	        }, {}),
	        module: {
	            loaders: [{
	                test: /bower_components(\/|\\)([\w\-\d]+)(\/|\\)scripts(\/|\\)main\.js/,
	                loader: "custom-deps-loader"
	            }, {
	                test: /bower_components(\/|\\)([\w\-\d]+)(\/|\\)scripts(\/|\\)main\.js/,
	                loader: "injecting-loader"
	            }, {
	                test: /\.css$/,
	                loader: "style-loader!css-loader"
	            }, {
	                test: /\.js$/,
	                loader: 'performance'
	            }]
	        },
	        customDepsLoader: {
	            customComponents: options.bundle.customComponents || [],
	            componentBase: options.componentBase,
	            componentMain: options.componentMain
	        },
	        injectingLoader: {
	            condition: function condition() {
	                // not a widget-* file
	                return ! ~this.resource.indexOf('widget-');
	            },
	            injectingDependency: '../dist/styles/base.css'
	        },
	        performanceLoader: getPerformanceLoaderOptions(options.withPerformance)
	    });

	    // using custom plugins set
	    conf.plugins = [new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new webpack.ProvidePlugin({
	        jQuery: 'jQuery'
	    }), new BowerWebpackPlugin({
	        modulesDirectories: [path.resolve("./bower_components"), "bower_components"],
	        manifestFiles: "bower.json",
	        includes: /\.js$/,
	        excludes: [],
	        searchResolveModulesDirectories: true
	    }), new CustomLibraryTemplatePlugin("umd", "[name]"),
	    // base should be placed in a chunk
	    new webpack.optimize.CommonsChunkPlugin("base", "base.js")];

	    return conf;
	}

	exports.build.bundleTemplates = function () {

	    return new Promise(function (resolve) {
	        runSeq(['build:bundleTemplates'], resolve);
	    });
	};

	exports.start = function () {
	    if (config.server.logLevel === 'silent') {
	        gutil.log = gutil.noop;
	        process.env.DISABLE_NOTIFIER = true;
	    };
	    config.noMinify = config.build.noMinify || false;

	    if (config.deploy) {
	        runSeq(['start'], 'deploy:all', 'server');
	    } else {
	        runSeq(['start'], 'server');
	    }
	};

	exports.deploy = function (all) {
	    if (config.server.logLevel === 'silent') {
	        gutil.log = gutil.noop;
	        process.env.DISABLE_NOTIFIER = true;
	    };

	    if (all) {
	        gulp.start('deploy:all');
	    } else {
	        gulp.start('deploy:item');
	    }
	};

	exports.template = function (src, data, options) {
	    var paths = [src + '/**'];

	    var processImages = options && options.processImages;
	    if (!processImages) {
	        var base = '!' + src + '/**/*.';
	        paths = paths.concat([base + 'png', base + 'jpg', base + 'jpeg', base + 'webp', base + 'gif', base + 'tiff', base + 'bmp']);
	    }

	    return new Promise(function (resolve, reject) {
	        gulp.src(paths).pipe(g.template(data)).pipe(gulp.dest(src)).on('end', resolve).on('error', reject);
	    });
	};

	/*----------------------------------------------------------------*/
	/* Clean up folders
	/*----------------------------------------------------------------*/
	exports.clean = function () {
	    var paths = [config.paths.target];
	    return new Promise(function (resolve) {
	        del(paths, resolve);
	    });
	};

	/*----------------------------------------------------------------*/
	/* Test
	/*----------------------------------------------------------------*/
	exports.test = function (params) {
	    var Server = __webpack_require__(78).Server;
	    var defaultConfig = './configs/karma.conf.js';
	    if (params.options.config) {
	        defaultConfig = utils.projectPath(params.options.config);
	    }
	    var karmaConfPath = path.resolve(__dirname, defaultConfig);

	    var params = utils.assign(params, {
	        configFile: karmaConfPath,
	        singleRun: !params.options.watch
	    });

	    return new Promise(function (resolve, reject) {
	        // Until this is solved https://github.com/karma-runner/karma/issues/926
	        // manually check for the test configuration folder
	        try {
	            var stats = fs.lstatSync(config.paths.test);
	            // Is it a directory?
	            if (stats.isDirectory()) {
	                new Server(params, function (code) {
	                    // karama exits with 1 if no tests are found :( .
	                    // https://github.com/karma-runner/karma/issues/926
	                    if (code > 0) {
	                        reject(new Error('Something went wrong while running the tests: exit code ' + code));
	                    } else {
	                        resolve();
	                    }
	                }).start();
	            }
	        } catch (err) {
	            display.warn('Test folder not found at', colors.info(config.paths.test));
	            resolve();
	        }
	    });
	};

	/*----------------------------------------------------------------*/
	/* Lint
	/*----------------------------------------------------------------*/
	exports.lint = function () {
	    return new Promise(function (resolve) {
	        gulp.start('test:lint', resolve);
	    });
	};

	/*----------------------------------------------------------------*/
	/* Register
	/*----------------------------------------------------------------*/
	exports.registerPackage = function (params) {

	    var endpoint, method, payload;
	    var repo = config.repository.url || undefined;
	    var manager = params.args[0];

	    var registry = params.options.registry || 'http://launchpad.backbase.com:5678';
	    var force = params.options.force ? '--force' : '';
	    var name = config.name; // check for bower for scoped names
	    var error, npmCmd;
	    if (manager === 'npm') {
	        registry = 'http://launchpad.backbase.com:8765';
	    } else {
	        // remove scoped names in case of bower
	        name = path.basename(name);
	    }
	    switch (params.cmd) {
	        case 'publish':
	            method = 'POST';
	            endpoint = '/packages/' + name;
	            payload = '{"url":"' + repo + '"}';
	            npmCmd = utils.template('npm publish --registry ${registry}');
	            break;
	        case 'unpublish':
	            method = 'DELETE';
	            endpoint = '/packages/' + name;
	            npmCmd = utils.template('npm unpublish --registry ${registry} ${force}');
	            break;
	    }
	    var url = utils.trimRight(registry, '/') + endpoint;
	    display.info(params.cmd.toUpperCase() + ' ' + colors.bold(manager) + ' package...', colors.info(registry));
	    if (manager === 'npm') {
	        return new Promise(function (resolve, reject) {
	            var cmd = npmCmd({
	                registry: registry,
	                force: force
	            });
	            return shell.exec(cmd, {
	                silent: true
	            }, function (code, output) {
	                if (code > 0) {
	                    display.error('Unable to register package using', colors.error(cmd));
	                    reject(output);
	                }
	                resolve(cmd);
	                return cmd;
	            });
	        });
	    } else {
	        return new Promise(function (resolve, reject) {
	            var question = [{
	                type: 'input',
	                name: 'password',
	                message: 'Password',
	                validate: function validate(value) {
	                    if (utils.isEmpty(value)) {
	                        return 'Password is required';
	                    } else {
	                        return true;
	                    }
	                }
	            }];
	            utils.prompt(question).then(function (answers) {

	                var tpl = 'curl -H "Auth-Key:${password}" -H "Content-Type: application/json" --request ${method} "${url}"';
	                if (payload) {
	                    tpl += ' -d \'${payload}\'';
	                }
	                var cmd = utils.template(tpl)({
	                    url: url,
	                    method: method,
	                    name: name,
	                    repo: repo,
	                    payload: payload,
	                    password: answers.password
	                });

	                if (!name) {
	                    throw new Error('Repository name is missing');
	                }
	                if (!shell.which('curl')) {
	                    throw new Error('Sorry, this script requires curl');
	                }
	                // # TODO test for valid repos
	                if (utils.isUndefined(repo)) {
	                    throw new Error('Repository url is missing.');
	                }
	                if (utils.isUndefined(registry) || !utils.isString(registry)) {
	                    throw new Error('Invalid registry format.');
	                }

	                shell.exec(cmd, {}, function (code, output) {
	                    if (code > 0) {
	                        throw new Error(output);
	                    }
	                    resolve(cmd);
	                    return cmd;
	                });
	            });
	        });
	    }
	};

	exports.register = function (registry) {
	    return setPackage(registry, 'register');
	};
	exports.unregister = function (registry) {
	    return setPackage(registry, 'remove');
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(6)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var UmdTemplatePlugin = __webpack_require__(48);
	var BlankTemplatePlugin = __webpack_require__(55);

	function CustomLibraryTemplatePlugin(target, name) {
	    this.name = name;
	    this.target = target || "umd";
	}

	module.exports = CustomLibraryTemplatePlugin;
	CustomLibraryTemplatePlugin.prototype.apply = function (compiler) {
	    compiler.plugin('this-compilation', function (compilation) {
	        switch (this.target) {
	            case 'umd':
	                compilation.apply(new UmdTemplatePlugin(this.name, true));
	                break;
	            case 'blank':
	                compilation.apply(new BlankTemplatePlugin(this.name, true));
	                break;
	            default:
	                throw new Error(this.target + ' is not a valid Library target');
	        }
	    }.bind(this));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ConcatSource = __webpack_require__(49);
	var OriginalSource = __webpack_require__(54);

	function accessorToObjectAccess(accessor) {
	    return accessor.map(function (a) {
	        return "[" + JSON.stringify(a) + "]";
	    }).join("");
	}

	function accessorAccess(base, accessor) {
	    accessor = [].concat(accessor);
	    return accessor.map(function (a, idx) {
	        a = base + accessorToObjectAccess(accessor.slice(0, idx + 1));
	        if (idx === accessor.length - 1) return a;
	        return a + " = " + a + " || {}";
	    }).join(", ");
	}

	function CustomUmdMainTemplatePlugin(name, optionalAmdExternalAsGlobal) {
	    this.name = name;
	    this.optionalAmdExternalAsGlobal = optionalAmdExternalAsGlobal;
	}
	module.exports = CustomUmdMainTemplatePlugin;
	CustomUmdMainTemplatePlugin.prototype.apply = function (compilation) {
	    var mainTemplate = compilation.mainTemplate;
	    compilation.templatesPlugin("render-with-entry", function (source, chunk, hash) {
	        var externals = chunk.modules.filter(function (m) {
	            return m.external;
	        });
	        var optionalExternals = [],
	            requiredExternals = [];
	        if (this.optionalAmdExternalAsGlobal) {
	            externals.forEach(function (m) {
	                if (m.optional) {
	                    optionalExternals.push(m);
	                } else {
	                    requiredExternals.push(m);
	                }
	            });
	            externals = requiredExternals.concat(optionalExternals);
	        } else {
	            requiredExternals = externals;
	        }

	        function replaceKeys(str) {
	            return mainTemplate.applyPluginsWaterfall("asset-path", str, {
	                hash: hash,
	                chunk: chunk
	            });
	        }

	        function externalsDepsArray(modules) {
	            return "[" + replaceKeys(modules.map(function (m) {
	                return JSON.stringify(_typeof(m.request) === "object" ? m.request.amd : m.request);
	            }).join(", ")) + "]";
	        }

	        function externalsRootArray(modules) {
	            return replaceKeys(modules.map(function (m) {
	                var request = m.request;
	                if ((typeof request === "undefined" ? "undefined" : _typeof(request)) === "object") request = request.root;
	                return "root" + accessorToObjectAccess([].concat(request));
	            }).join(", "));
	        }

	        function externalsRequireArray(type) {
	            return replaceKeys(externals.map(function (m) {
	                var request = m.request;
	                if ((typeof request === "undefined" ? "undefined" : _typeof(request)) === "object") request = request[type];
	                if (Array.isArray(request)) {
	                    var expr = "require(" + JSON.stringify(request[0]) + ")" + accessorToObjectAccess(request.slice(1));
	                } else var expr = "require(" + JSON.stringify(request) + ")";
	                if (m.optional) {
	                    expr = "(function webpackLoadOptionalExternalModule() { try { return " + expr + "; } catch(e) {} }())";
	                }
	                return expr;
	            }).join(", "));
	        }

	        function externalsArguments(modules) {
	            return modules.map(function (m) {
	                return "__WEBPACK_EXTERNAL_MODULE_" + m.id + "__";
	            }).join(", ");
	        }
	        if (optionalExternals.length > 0) {
	            var amdFactory = "function webpackLoadOptionalExternalModuleAmd(" + externalsArguments(requiredExternals) + ") {\n" + "                       return factory(" + (requiredExternals.length > 0 ? externalsArguments(requiredExternals) + ", " + externalsRootArray(optionalExternals) : externalsRootArray(optionalExternals)) + ");\n" + "               }";
	        } else {
	            var amdFactory = "factory";
	        }
	        var amdModuleId = this.name && this.name.length ? JSON.stringify(replaceKeys([].concat(this.name).pop())) + ", " : "";
	        return new ConcatSource(new OriginalSource("(function webpackUniversalModuleDefinition(root, factory) {\n" + " if(typeof exports === 'object' && typeof module === 'object')\n" + " module.exports = factory(" + externalsRequireArray("commonjs2") + ");\n" + " else if(typeof define === 'function' && define.amd)\n" + (requiredExternals.length > 0 ? " define(" + amdModuleId + externalsDepsArray(requiredExternals) + ", " + amdFactory + ");\n" : " define(" + amdModuleId + "[], " + amdFactory + ");\n") + (this.name ? " else if(typeof exports === 'object')\n" + " exports[" + JSON.stringify(replaceKeys([].concat(this.name).pop())) + "] = factory(" + externalsRequireArray("commonjs") + ");\n" + " else\n" + " " + replaceKeys(accessorAccess("root", this.name)) + " = factory(" + externalsRootArray(externals) + ");\n" : " else {\n" + (externals.length > 0 ? " var a = typeof exports === 'object' ? factory(" + externalsRequireArray("commonjs") + ") : factory(" + externalsRootArray(externals) + ");\n" : " var a = factory();\n") + " for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];\n  }\n") + "})(this, function(" + externalsArguments(externals) + ") {\nreturn ", "webpack/universalModuleDefinition"), source, "\n});\n");
	    }.bind(this));
	    mainTemplate.plugin("global-hash-paths", function (paths) {
	        if (this.name) paths = paths.concat(this.name);
	        return paths;
	    }.bind(this));
	    mainTemplate.plugin("hash", function (hash) {
	        hash.update("umd");
	        hash.update(this.name + "");
	    }.bind(this));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var SourceNode = __webpack_require__(50).SourceNode;
	var SourceListMap = __webpack_require__(51).SourceListMap;
	var Source = __webpack_require__(52);

	function ConcatSource() {
		Source.call(this);
		this.children = Array.prototype.slice.call(arguments);
	}
	module.exports = ConcatSource;

	ConcatSource.prototype = Object.create(Source.prototype);
	ConcatSource.prototype.constructor = ConcatSource;

	ConcatSource.prototype.add = function(item) {
		this.children.push(item);
	};

	ConcatSource.prototype.source = function() {
		return this.children.map(function(item) {
			return typeof item === "string" ? item : item.source();
		}).join("");
	};

	ConcatSource.prototype.size = function() {
		return this.children.map(function(item) {
			return typeof item === "string" ? item.length : item.size();
		}).reduce(function(sum, s) { return sum + s; }, 0);
	};

	__webpack_require__(53)(ConcatSource.prototype);

	ConcatSource.prototype.node = function(options) {
		var node = new SourceNode(null, null, null, this.children.map(function(item) {
			return typeof item === "string" ? item : item.node(options);
		}));
		return node;
	};

	ConcatSource.prototype.listMap = function(options) {
		var map = new SourceListMap();
		this.children.forEach(function(item) {
			if(typeof item === "string")
				map.add(item);
			else
				map.add(item.listMap(options));
		});
		return map;
	};

	ConcatSource.prototype.updateHash = function(hash) {
		this.children.forEach(function(item) {
			item.updateHash(hash);
		});
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var SourceNode = __webpack_require__(50).SourceNode;
	var SourceMapConsumer = __webpack_require__(50).SourceMapConsumer;

	function Source() {}

	module.exports = Source;

	Source.prototype.source = null;

	Source.prototype.size = function() {
		return this.source().length;
	};

	Source.prototype.map = function(options) {
		return null;
	};

	Source.prototype.sourceAndMap = function(options) {
		return {
			source: this.source(),
			map: this.map()
		};
	};

	Source.prototype.node = null;

	Source.prototype.listNode = null;

	Source.prototype.updateHash = function(hash) {
		var source = this.source();
		hash.update(source || "");
	};


/***/ },
/* 53 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function mixinSourceAndMap(proto) {
		proto.map = function(options) {
			options = options || {};
			if(options.columns === false) {
				return this.listMap(options).toStringWithSourceMap().map;
			}

			return this.node(options).toStringWithSourceMap({file:"x"}).map.toJSON();
		};

		proto.sourceAndMap = function(options) {
			options = options || {};
			if(options.columns === false) {
				//console.log(this.listMap(options).debugInfo());
				return this.listMap(options).toStringWithSourceMap();
			}

			var res = this.node(options).toStringWithSourceMap({file:"x"});
			return {
				source: res.code,
				map: res.map.toJSON()
			};
		};
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var SourceNode = __webpack_require__(50).SourceNode;
	var SourceMapConsumer = __webpack_require__(50).SourceMapConsumer;
	var SourceListMap = __webpack_require__(51).SourceListMap;
	var Source = __webpack_require__(52);

	function isSplitter(c) {
		switch(c) {
		case 10: // \n
		case 13: // \r
		case 59: // ;
		case 123: // {
		case 125: // }
		return true;
		}
		return false;
	}
	function _splitCode(code) {
		var result = [];
		var i = 0, j = 0;
		for(; i < code.length; i++) {
			if(isSplitter(code.charCodeAt(i))) {
				while(isSplitter(code.charCodeAt(++i)));
				result.push(code.substring(j, i));
				j = i;
			}
		}
		if(j < code.length)
			result.push(code.substr(j));
		return result;
	}

	function OriginalSource(value, name) {
		Source.call(this);
		this._value = value;
		this._name = name;
	}

	module.exports = OriginalSource;

	OriginalSource.prototype = Object.create(Source.prototype);
	OriginalSource.prototype.constructor = OriginalSource;

	OriginalSource.prototype.source = function() {
		return this._value;
	};

	__webpack_require__(53)(OriginalSource.prototype);

	OriginalSource.prototype.node = function(options) {
		options = options || {};
		var sourceMap = this._sourceMap;
		var value = this._value;
		var name = this._name;
		var lines = value.split("\n");
		var node = new SourceNode(null, null, null,
			lines.map(function(line, idx) {
				var pos = 0;
				if(options.columns === false) {
					return new SourceNode(idx+1, 0, name,
						(line + (idx != lines.length-1 ? "\n" : ""))
					);
				}
				return new SourceNode(null, null, null,
					_splitCode(line + (idx != lines.length-1 ? "\n" : "")).map(function(item) {
						if(/^\s*$/.test(item)) return item;
						var res = new SourceNode(idx+1, pos, name, item);
						pos += item.length;
						return res;
					})
				);
			})
		);
		node.setSourceContent(name, value);
		return node;
	};

	OriginalSource.prototype.listMap = function(options) {
		return new SourceListMap(this._value, this._name, this._value)
	};

	OriginalSource.prototype.updateHash = function(hash) {
		hash.update(this._value);
	};


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	function BlankTemplatePlugin(name, optionalAmdExternalAsGlobal) {
	    this.name = name;
	    this.optionalAmdExternalAsGlobal = optionalAmdExternalAsGlobal;
	}
	module.exports = BlankTemplatePlugin;
	BlankTemplatePlugin.prototype.apply = function (compilation) {
	    var mainTemplate = compilation.mainTemplate;
	    compilation.templatesPlugin('render-with-entry', function (source, chunk, hash) {
	        return source;
	    }.bind(this));
	    mainTemplate.plugin('global-hash-paths', function (paths) {
	        if (this.name) paths = paths.concat(this.name);
	        return paths;
	    }.bind(this));
	    mainTemplate.plugin('hash', function (hash) {
	        hash.update('blank');
	        hash.update(this.name + '');
	    }.bind(this));
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var config = __webpack_require__(32);
	var webpack = __webpack_require__(40);
	var path = __webpack_require__(7);
	var node_modules = path.resolve(__dirname, '../../node_modules');
	var customLoadersPath = path.resolve(__dirname, '../loaders');
	var BowerWebpackPlugin = __webpack_require__(56);
	var autoprefixer = __webpack_require__(58);

	function getPerformanceLoaderOptions(enabled) {
	    return {
	        enabled: enabled,
	        events: {
	            start: 'cxp.performance.start',
	            end: 'cxp.performance.end'
	        }
	    };
	}
	var modulesDirectories = ['resources', 'node_modules', 'features', 'bower_components', 'target/bower_components'];

	module.exports = {
	    output: {},
	    cache: true,
	    quiet: true,
	    // It suppress everything except error, so it has to be set to false as well
	    // to see success build.
	    noInfo: false,
	    stats: {
	        // Config for minimal console.log mess.
	        assets: false,
	        colors: true,
	        version: false,
	        hash: false,
	        timings: false,
	        chunks: false,
	        chunkModules: false
	    },
	    resolve: {
	        modulesDirectories: modulesDirectories
	    },
	    module: {
	        loaders: [{ test: /\.json$/, loader: 'json' }, { test: /\.html$/, loader: 'raw!html-minify' }, { test: /\.xml$/, loader: 'raw' }, { test: /\.(scss|sass)$/, loader: 'style!raw!sass!postcss' }, { test: /\.less$/, loader: 'style!css!less!postcss' }, { test: /\.css$/, loader: 'style!css!postcss' }, { test: /\.(jpg|jpeg|gif|png)$/, loader: 'file' }, { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' }, { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }, { test: /\.js$/, loader: 'performance' }, {
	            test: /[\/]angular\.js$/,
	            loader: 'exports?angular' // angular doesn't play nicely with CommonJS
	        }, {
	            test: /\.jsx?$/, // optional reactjs
	            exclude: /(node_modules|bower_components)/,
	            loader: 'babel',
	            query: {
	                cacheDirectory: true,
	                presets: [path.resolve(node_modules, 'babel-preset-es2015'), path.resolve(node_modules, 'babel-preset-react')]
	            }
	        }]

	    },
	    postcss: function postcss() {
	        return [autoprefixer({ browsers: ['last 2 versions'] })];
	    },
	    performanceLoader: getPerformanceLoaderOptions(config.withPerformance),
	    resolveLoader: {
	        modulesDirectories: [customLoadersPath],
	        fallback: node_modules
	    },
	    plugins: [new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new webpack.ProvidePlugin({
	        jQuery: 'jQuery'
	    }), new BowerWebpackPlugin({
	        modulesDirectories: ['bower_components'],
	        manifestFiles: 'bower.json',
	        includes: /\.js$/,
	        excludes: [],
	        searchResolveModulesDirectories: true
	    }), new webpack.optimize.DedupePlugin()],
	    externals: [
	    // Every non-relative module is external
	    function (context, request, callback) {

	        // bypass requirejs plugins
	        // Every module prefixed with 'async|font|goog|image|json' use the requirejs
	        var m = request.match(/^(async|font|goog|image|json|text)!/);
	        if (Object.prototype.toString.call(m) !== '[object Null]' && typeof m.input !== 'undefined') {
	            return callback(null, m.input);
	        }
	        callback();
	    }]
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BBRest = __webpack_require__(67);
	var bbConfig = __webpack_require__(68);
	var utils = __webpack_require__(5);

	function getConfig(options) {
	    return bbConfig.getBbRc().then(function (bbRcConfig) {
	        var configWhitelist = ['scheme', 'host', 'port', 'context', 'username', 'password', 'portal'];
	        var config = utils.merge({}, options, bbRcConfig);
	        config = utils.pick(config, configWhitelist);
	        return config;
	    });
	}

	// Create singleton factory for rest client (returns promise).
	var getRestClient = utils.once(function getRestClient(options) {
	    options = options || {};
	    return getConfig(options).then(function (config) {
	        return new BBRest(config);
	    });
	});

	exports.getRestClient = getRestClient;

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./proxy": 70,
		"./proxy.js": 70,
		"./raml": 72,
		"./raml.js": 72,
		"./rewrite-rules": 76,
		"./rewrite-rules.js": 76,
		"./schema-formats": 75,
		"./schema-formats.js": 75
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 69;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fs = __webpack_require__(26);
	var url = __webpack_require__(45);
	var modRewrite = __webpack_require__(71);

	var bowerUrls = ['.+/bower_components/(.*)$ /bower_components/$1 [L]', '.+launchpad/modules/(.*)$ /bower_components/$1 [L]', '.+features/.{1,3}BBHOST.{1,3}/(.*)$ /bower_components/$1 [L]'];

	var nodeUrls = ['(.*)bower_components(.*)$ $1node_modules$2 [L]'];

	var bowerRewrite = modRewrite(bowerUrls),
	    nodeRewrite = modRewrite(nodeUrls);

	module.exports = function (req, res, next) {
	    bowerRewrite(req, res, function () {
	        if (/bower_components/.test(req.url) && !fs.existsSync('./' + url.parse(req.url).pathname)) {
	            nodeRewrite(req, res, next);
	        } else {
	            next();
	        }
	    });
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Run the middleware on files that contain .raml
	 *  @todo - some logging
	 *        - watch and reload
	 */
	var ramlMocker = __webpack_require__(73);
	var routePattern = __webpack_require__(74);
	var url = __webpack_require__(45);
	var utils = __webpack_require__(5);
	var config = __webpack_require__(32);
	var display = utils.display();
	var colors = utils.colors();
	var dataConf = config.data;

	var options = {
	    files: dataConf.files,
	    useApiVersion: dataConf.useApiVersion,
	    // add special formats
	    formats: __webpack_require__(75)
	};
	var apiRoutes = {};
	var callback = function callback(mockRoutes) {
	    apiRoutes = utils(mockRoutes).map(function (mockRoute) {
	        var responseFn = function responseFn() {
	            var response = null;
	            if (utils.isFunction(mockRoute.mock)) {
	                response = JSON.stringify(mockRoute.mock());
	                if (utils.isNull(response) || response === 'null') {
	                    if (utils.isFunction(mockRoute.example)) {
	                        response = mockRoute.example();
	                    }
	                }
	            }
	            return response;
	        };
	        return {
	            uri: dataConf.route + mockRoute.uri,
	            method: mockRoute.method,
	            response: responseFn,
	            statusCode: mockRoute.defaultCode || 200
	        };
	    }).uniq(function (route) {
	        // remove duplicates
	        return route.uri + route.method;
	    }).value();

	    if (utils.size(mockRoutes) > 0) {
	        // Displays available API's
	        display.info('Starting services API');
	        utils.each(apiRoutes, function (apiRoute) {
	            display.info(colors.info(apiRoute.uri), colors.warn(apiRoute.method));
	        });
	    }
	};

	ramlMocker.generate(options, callback);

	module.exports = function ramlMiddleWare(req, res, next) {
	    //console.info(req.method);
	    var parsed = url.parse(req.url);
	    utils.each(apiRoutes, function (apiRoute) {
	        // Check if the route matches the pattern and the method
	        var pattern = routePattern.fromString(apiRoute.uri);
	        var isSameMethod = apiRoute.method.toLowerCase() === req.method.toLowerCase();
	        var isSameUri = pattern.matches(parsed.pathname);
	        if (isSameUri && isSameMethod) {
	            res.setHeader('Content-Type', 'application/json');
	            res.end(apiRoute.response());
	        }
	    });
	    next();
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * ------------------------------------------------------------------------
	 *  Provide format definitions
	 *  You can use Faker for implementing the logic (check the documentation).
	 *  https://github.com/Marak/Faker.js
	 *  @todo - externalize
	 * ------------------------------------------------------------------------
	 */

	exports.ip = function foo(faker, schema) {
	  return faker.internet.ip();
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var modRewrite = __webpack_require__(71);

	module.exports = modRewrite(['.+itemRoot./(.*)$ /$1 [L]', '.+services/rest(.*)$ /$1 [L]']);

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fs = __webpack_require__(30);
	var path = __webpack_require__(7);
	var semver = __webpack_require__(80);
	var config = __webpack_require__(32);
	var git = __webpack_require__(33);
	var Promise = __webpack_require__(8);
	var docs = __webpack_require__(81);
	var utils = __webpack_require__(5);
	var colors = utils.colors();
	var shell = utils.shell();
	var display = utils.display();
	var moment = __webpack_require__(96);
	var xpath = __webpack_require__(116);
	/**
	 * Final step to write all the files
	 * @param  {object} params Chained params
	 * @return {object} promise
	 */
	function writeFiles(params) {
	    utils.each(params.files, function (file) {
	        var fileType = path.extname(file.filePath);
	        display.info('Write file: ', colors.info(file.filePath));
	        switch (fileType) {
	            case '.json':
	                fs.writeJsonAsync(file.filePath, file.content, 'utf8');
	                break;
	            default:
	                fs.writeFileAsync(file.filePath, file.content, 'utf8');
	        };
	    });

	    return params;
	}

	/**
	 * Check if is a valid semver version type
	 * @param  {string} version package version
	 * @param  {object} input   cli input args
	 * @return {object}         Chained params + next version
	 */
	function checkVersion(version, input) {
	    version = semver.valid(version);
	    var inc = input.args[0] || 'patch';
	    var suffix = input.options.suffix || 'pre';

	    return new Promise(function (resolve, reject) {
	        if (utils.isNull(version)) {
	            var err = 'Invalid version. Visit ' + colors.info.underline('http://semver.org') + ' for more info.';
	            throw new Error(err);
	            shell.exit(1);
	        }
	        var output = utils.assign({
	            currentVerison: version,
	            nextVersion: semver.inc(version, inc, suffix)
	        }, input);
	        resolve(output);
	        return output;
	    });
	}

	/**
	 * Prompt to verify the package version
	 * @param  {object} params Chained params
	 * @return {object}        Chained params + confirmed version
	 */
	function confirmNextVersion(params) {
	    display.info('Current version:', colors.info(params.currentVerison));
	    var question = [{
	        type: 'confirm ',
	        name: 'nextVersion',
	        message: 'Bump to next version',
	        default: params.nextVersion,
	        validate: function validate(value) {
	            if (utils.isNull(semver.valid(value))) {
	                return 'Invalid version';
	            } else {
	                return true;
	            }
	        }
	    }];
	    return utils.prompt(question).then(function (answer) {
	        return utils.assign(params, answer);
	    });
	}
	/**
	 * Update package.json and bower.json
	 * @param  {object} params Chained params
	 * @return {object}        Chained params + .json's
	 */
	function updateXMLFiles(params) {
	    var filename = 'model.xml';
	    var modelXMLFilePath = utils.resolve(filename);
	    var promiseModelXML = fs.readFileAsync(modelXMLFilePath);
	    var contentXML;
	    // Check if there a model.xml
	    return promiseModelXML.then(utils.xml2json).then(function (json) {
	        var xml = utils.json2xml(json);
	        var properties = xpath.find(json, '//properties')[0].property;
	        var version = utils.find(properties, '$.name', 'version');
	        if (!utils.isUndefined(version)) {
	            version = version.value[0]._;
	            contentXML = xml.replace(version, params.nextVersion);
	        } else {
	            // Create a version property;
	            var warn = utils.template('Unable to find ${version} property! ... will create one.')({
	                version: colors.info('version')
	            });
	            display.warn(warn);
	            properties.push({
	                '$': {
	                    'label': 'Version',
	                    'name': 'version',
	                    'viewHint': 'text-input,admin,designModeOnly'
	                },
	                'value': {
	                    '_': params.nextVersion,
	                    '$': {
	                        'type': 'string'
	                    }
	                }
	            });
	            contentXML = utils.json2xml(json);
	        }
	        params.files.push({
	            filePath: modelXMLFilePath,
	            content: contentXML
	        });

	        return params;
	    }).catch(function (err) {
	        display.warn(colors.warn(err.name), err.message);
	        return params;
	    });
	}

	/**
	 * Update package.json
	 * @param  {object} params Chained params
	 * @return {object}        Chained params + package.json's
	 */

	function updatePackageJSONFile(params) {

	    var packageJsonFilePath = utils.resolve('package.json');
	    var promisePackageJson = fs.readJsonAsync(packageJsonFilePath);
	    params.files = params.files || [];
	    return Promise.all([promisePackageJson]).then(function (arr) {
	        var packageJson = arr[0];
	        packageJson.version = params.nextVersion;
	        params.files.push({
	            filePath: packageJsonFilePath,
	            content: packageJson
	        });
	        return params;
	    }).catch(function (err) {
	        display.warn(colors.warn(err.name), err.message);
	        return params;
	    });
	}
	/**
	 * Update bower.json
	 * @param  {object} params Chained params
	 * @return {object}        Chained params + bower.json
	 */
	function updateBowerJSONFile(params) {

	    var bowerJsonFilePath = utils.resolve('bower.json');
	    var promiseBowerJson = fs.readJsonAsync(bowerJsonFilePath);
	    params.files = params.files || [];
	    return Promise.all([promiseBowerJson]).then(function (arr) {
	        var bowerJson = arr[0];
	        bowerJson.version = params.nextVersion;
	        params.files.push({
	            filePath: bowerJsonFilePath,
	            content: bowerJson
	        });
	        return params;
	    }).catch(function (err) {
	        display.warn(colors.warn(err.name), err.message);
	        return params;
	    });
	}

	/**
	 * Update the version in the Readme file
	 * @param  {object} params Chained params
	 * @return {object}        Chained params + README
	 */
	function updateREADME(params) {
	    var READMEFilePath = utils.resolve('README.md');
	    docs.register('version', params.nextVersion);
	    return docs.fflush().then(function (doc) {
	        params.files.push({
	            filePath: READMEFilePath,
	            content: doc
	        });
	        return params;
	    });
	}

	/**
	 * @todo define some exclusions
	 * @param  {object} params Chained params
	 * @return {object}        [description]
	 */
	function updateCHANGELOG(params) {
	    var CHANGELOGFilePath = utils.resolve(params.options.changelog);
	    var lastTag = git.getLastTag();
	    var headerTpl = utils.template('### `v${version} - ${date}`');
	    var inputMessage = params.args[1];
	    var messageTpl = utils.template('* ${message}');
	    var messages = []; // commit messages
	    var excludesMessages = ['bump'];
	    return fs.readFileAsync(CHANGELOGFilePath).then(function (content) {
	        if (!utils.isNull(lastTag)) {
	            messages = git.getCommitMessages(lastTag);
	        } else {
	            messages.push('Initial release');
	        }
	        content = utils(messages).unshift(inputMessage).filter(function (message) {
	            // exclude empty and banned ones
	            return !message.includes(excludesMessages) && !utils.isEmpty(utils.trim(message));
	        }).map(function (message) {
	            return messageTpl({
	                message: message
	            });
	        }).unshift(headerTpl({
	            version: params.nextVersion,
	            date: moment().format('DD/MM/YYYY')
	        })).push('\n' + content.toString()).value().join('\n');

	        params.files.push({
	            filePath: CHANGELOGFilePath,
	            content: content
	        });
	        return params;
	    });
	}

	function success(params) {
	    display.info('Bumped to version:', colors.info(params.nextVersion));
	}
	/**
	 * Main entry
	 * @param  {object} input cli input args
	 * @return {object}       Promise
	 */
	module.exports = function build(input) {

	    return checkVersion(config.version, input).then(confirmNextVersion).then(updateBowerJSONFile).then(updatePackageJSONFile).then(updateXMLFiles).then(updateREADME).then(updateCHANGELOG).then(writeFiles).then(success).catch(function (err) {
	        display.error(err.message);
	        shell.exit(1);
	    });
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var utils = __webpack_require__(5);
	var fs = __webpack_require__(30);
	var path = __webpack_require__(7);
	var display = utils.display();

	var resources = {};
	var postProcessing = {
	    'md': __webpack_require__(82)
	};

	module.exports = {
	    register: function register(url, options) {
	        var resource,
	            resourcePath = './resource/' + url;

	        if (resources[url]) {
	            display.info('Resource ' + resourcePath + ' is already registered.');
	        }

	        try {
	            resource = __webpack_require__(87)(resourcePath);
	        } catch (e) {
	            display.error('Resource ' + resourcePath + ' cannot be registered. File not exist.');
	        }

	        resources[resource.url] = {
	            instance: resource,
	            options: options,
	            url: resourcePath
	        };
	    },

	    fflush: function fflush() {
	        var dependencies = _.extend.apply(_, [{}].concat(_.chain(resources).values().map(_.property('instance.dependencies')).value()));

	        return utils.readFiles(dependencies, postProcessing).then(function (files) {
	            _.each(resources, function (resourceConfig) {
	                var resource = resourceConfig.instance;
	                var options = resourceConfig.options;

	                var diff = resource.difference(files, options);
	                if (!diff.length) {
	                    return;
	                }

	                try {
	                    resource.update(files, options);
	                } catch (e) {
	                    display.error('Resource ' + resource.url + ' cannot be resolved.');
	                    display.error(e);
	                }
	            });

	            clearResources();
	            return files.readmePost;
	        });
	    }
	};

	function clearResources() {
	    _.each(resources, function (resource) {
	        delete __webpack_require__.c[/*require.resolve*/(__webpack_require__(87).resolve(resource.url))];
	    });
	    resources = {};
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var fs = __webpack_require__(26);
	var display = __webpack_require__(5).display();
	var marked = __webpack_require__(83);
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

	var markedRenderer = __webpack_require__(84)(new marked.Renderer());
	markedRenderer.tablerow = function (content) {
		return '| ' + content.slice(0, -1) + '\n';
	};

	// @see https://rawgit.com/zaggino/z-schema/master/benchmark/results.html
	var schema = __webpack_require__(85)(__webpack_require__(86));

	module.exports = function (text) {
		var structure = marked.lexer(text || '');

		return {
			schema: schema,
			structure: structure,
			json: {},

			find: function find(path) {
				return _.find(structure, schema.generate(path));
			},

			findIndex: function findIndex(path, fromIndex) {
				var source = structure;
				var foundIndex;

				if (fromIndex > 0) {
					source = structure.slice(fromIndex);
				} else {
					fromIndex = 0;
				}

				foundIndex = _.findIndex(source, schema.generate(path));
				return foundIndex === -1 ? foundIndex : foundIndex + fromIndex;
			},

			findParagraphList: function findParagraphList(paragraphPath, textOnly) {
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
					display.debug('Cannot find a direct list after ' + paragraphPath + ' paragraph');
					return;
				}

				var list = this.findList(paragraphIndexInc);
				if (!textOnly) {
					return list;
				}

				return _.chain(list).filter(schema.generate('marked#/text')).pluck('text').value();
			},

			findList: function findList(fromIndex) {
				var firstListIndex = this.findIndex('marked#/list_start', fromIndex);
				if (! ~firstListIndex) {
					return;
				}

				var lastListIndex = this.findIndex('marked#/list_end', firstListIndex);
				if (! ~lastListIndex) {
					return;
				} else {
					// omit <end list><start list>
					while (structure[lastListIndex + 1] && schema.is('marked#/list_start', structure[lastListIndex + 1])) {
						var nextLastIndex = this.findIndex('marked#/list_end', lastListIndex + 1);
						if (~nextLastIndex) {
							lastListIndex = nextLastIndex;
						}
					}
				}

				return structure.slice(firstListIndex, lastListIndex + 1);
			},

			createList: function createList(texts, ordered) {
				return [].concat({ type: 'list_start', ordered: !!ordered }, _.reduce(texts, function (memo, text) {
					memo.push.apply(memo, [{ type: 'list_item_start' }, { type: 'text', text: text }, { type: 'list_item_end' }]);
					return memo;
				}, []), { type: 'list_end' });
			},

			/**
	   * Replace oldItems to newItems in a structure
	   * @param {Object/Array} oldItem[s] to replace in structure
	   * @param {Object/Array} newItem[s] to add in structure
	   */
			// TODO change replace logics to check all items
			// TODO add new
			replace: function replace(oldItems, newItems) {
				oldItems = [].concat(oldItems);
				newItems = [].concat(newItems);

				var startIndex = structure.indexOf(oldItems[0]);
				if (! ~startIndex) {
					display.info('Items to replace not found in structure');
					return;
				}

				structure.splice.apply(structure, [startIndex, oldItems.length].concat(newItems));
			},

			toString: function toString(mode) {
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
		return html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'');
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
		"name": "marked",
		"paragraph": {
			"properties": {
				"type": {
					"enum": [
						"paragraph"
					]
				}
			},
			"required": [
				"type"
			],
			"text": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					}
				],
				"properties": {
					"text": {
						"type": "string",
						"minLength": 1
					}
				},
				"required": [
					"text"
				]
			}
		},
		"heading": {
			"properties": {
				"type": {
					"enum": [
						"heading"
					]
				}
			},
			"required": [
				"type"
			]
		},
		"section": {
			"oneOf": [
				{
					"$ref": "#/paragraph"
				},
				{
					"$ref": "#/heading"
				}
			]
		},
		"table": {
			"properties": {
				"type": {
					"enum": [
						"table"
					]
				},
				"cells": {
					"type": "array"
				}
			},
			"required": [
				"type",
				"cells"
			]
		},
		"list_start": {
			"properties": {
				"type": {
					"enum": [
						"list_start"
					]
				}
			},
			"required": [
				"type"
			]
		},
		"list_end": {
			"properties": {
				"type": {
					"enum": [
						"list_end"
					]
				}
			},
			"required": [
				"type"
			]
		},
		"text": {
			"properties": {
				"type": {
					"enum": [
						"text"
					]
				}
			},
			"required": [
				"type"
			]
		},
		"backbase": {
			"manual": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "Manual"
					}
				},
				"required": [
					"text"
				]
			},
			"information": {
				"oneOf": [
					{
						"$ref": "#/table"
					}
				],
				"properties": {
					"header": {
						"type": "array",
						"items": [
							{
								"pattern": [
									"name",
									"i"
								]
							}
						]
					}
				}
			},
			"dependencies": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "^Dependencies"
					}
				},
				"required": [
					"text"
				]
			},
			"dev-dependencies": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "^Dev(?:elopment)? Dependencies"
					}
				},
				"required": [
					"text"
				]
			},
			"dev-preferences": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "Developer Preferences"
					}
				},
				"required": [
					"text"
				]
			},
			"preferences": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "^Preferences"
					}
				},
				"required": [
					"text"
				]
			},
			"templates": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "Templates"
					}
				},
				"required": [
					"text"
				]
			},
			"components": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "Components"
					}
				},
				"required": [
					"text"
				]
			},
			"test": {
				"oneOf": [
					{
						"$ref": "#/paragraph"
					},
					{
						"$ref": "#/heading"
					}
				],
				"properties": {
					"text": {
						"pattern": "Test"
					}
				},
				"required": [
					"text"
				]
			}
		}
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index": 81,
		"./index.js": 81,
		"./resource/code": 88,
		"./resource/code.js": 88,
		"./resource/components": 92,
		"./resource/components.js": 92,
		"./resource/dependencies": 93,
		"./resource/dependencies.js": 93,
		"./resource/dev-dependencies": 94,
		"./resource/dev-dependencies.js": 94,
		"./resource/documentation": 95,
		"./resource/documentation.js": 95,
		"./resource/extensibility": 97,
		"./resource/extensibility.js": 97,
		"./resource/mobile": 98,
		"./resource/mobile.js": 98,
		"./resource/preferences": 90,
		"./resource/preferences.js": 90,
		"./resource/version": 101,
		"./resource/version.js": 101,
		"./services": 102,
		"./services.js": 102,
		"./templates/README.hbs": 110,
		"./update": 115,
		"./update.js": 115
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 87;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var fs = __webpack_require__(26);
	var shell = __webpack_require__(9);
	var escomplex = __webpack_require__(89);
	var preferencesResource = __webpack_require__(90);
	var cssAnalyze = __webpack_require__(91);

	module.exports = _.mixin({
		url: 'code',
		dependencies: function () {
			return shell.find('.').filter(function (file) {
				return !/node_modules|bower_components|dist|test|locale|\.git/.test(file) && file.match(/\.js$/);
			}).reduce(function (memo, file) {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				css: './dist/styles/base.css'
			});
		}(),

		difference: function difference(files) {
			return Object.keys(this.dependencies);
		},

		update: function update(files) {
			var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme', 'css');

			var report = _.extend(escomplex.analyse(cleanDependencies.map(function (name) {
				return {
					path: name,
					code: files[name]
				};
			})), {
				ploc: 0,
				lloc: 0,
				dependencies: [],
				modules: [],
				length: _.property('size')(fs.existsSync('dist/scripts/main.js') && fs.statSync('dist/scripts/main.js'))
			});

			report.reports.forEach(function (fileReport) {
				report.ploc += fileReport.aggregate.sloc.physical;
				report.lloc += fileReport.aggregate.sloc.logical;
				report.dependencies = report.dependencies.concat(fileReport.dependencies.map(_.property('path')));
				report.modules.push(fileReport.path);
			});

			report.dependencies = _(report.dependencies).filter(function (dependency) {
				return !/^\.\.?\//.test(dependency);
			}).uniq().value();

			files.readmePost.json.javascript = report;
			files.readmePost.json.css = new cssAnalyze(files.css, function (err) {
				if (err) {
					console.log(err);
				}
			});
		}
	}, {});

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);

	module.exports = {
		url: 'preferences',
		schema: 'marked#/backbase/preferences',
		dependencies: {
			readme: './README.md',
			model: './model.xml'
		},
		defaultPreferences: ['Description', 'TemplateName', 'area', 'icon', 'locale', 'order', 'src', 'thumbnailUrl', 'title', 'version', 'widgetChrome'],

		/**
	  * @private
	  */
		render: function render(item) {
			return '**' + item.name + '**' + (item.label ? ': ' + item.label : '');
		},

		/**
	  * @returns {Array} with not found in readme models
	  */
		difference: function difference(files) {
			var actualModels = this.model(files);
			var readmeModels = this.parse(files);

			return _.filter(actualModels, function (model) {
				return ! ~readmeModels.indexOf(model.name);
			});
		},

		/**
	  * get a clean model
	  */
		model: function model(files) {
			var defaultPreferences = this.defaultPreferences;

			return _.chain(_.property('catalog.widget.properties.property')(files.modelPost)).filter(function (property) {
				return defaultPreferences.indexOf(property.name) === -1;
			}).value();
		},

		/**
	  * parse from view/readme file
	  */
		parse: function parse(files) {
			var list = files.readmePost.findParagraphList(this.schema, true);

			return _.chain(list).map(function (text) {
				return text.replace(/\*\*([\w-]+)\*?\*?.*/, '$1');
			}).compact().value();
		},

		// append new items to paragraph
		update: function update(files) {
			var paragraph = files.readmePost.find(this.schema);

			files.readmePost.replace([paragraph], [paragraph].concat(files.readmePost.createList(_.map(this.difference(files), this.render))));
		}
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var utils = __webpack_require__(5);
	var fs = __webpack_require__(30);
	var path = __webpack_require__(7);

	var preferencesResource = __webpack_require__(90);
	var componentsPath = utils.projectPath('scripts/components');

	module.exports = _.mixin({
		url: 'components',
		schema: 'marked#/backbase/components',
		dependencies: function () {
			return readDir().reduce(function (memo, dir) {
				memo[dir + 'Info'] = path.join(componentsPath, dir, 'info.json');
				memo[dir + 'Bower'] = path.join(componentsPath, dir, 'bower.json');

				return memo;
			}, {
				readme: './README.md'
			});
		}(),

		model: function model(files) {
			return readDir().map(function (dir) {
				return {
					name: dir,
					label: _.property(dir + 'InfoPost.title')(files) || _.property(dir + 'BowerPost.description')(files)
				};
			});
		}
	}, {
		render: preferencesResource.render,
		difference: preferencesResource.difference,
		parse: preferencesResource.parse,
		update: preferencesResource.update
	});

	//
	function readDir() {
		if (!fs.existsSync(componentsPath)) {
			return [];
		}

		return utils.readDir(componentsPath);
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);

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
		render: function render(item) {
			return item.name + (item.version ? ' ' + item.version : '');
		},

		/**
	  * @returns {Array} with one found different item for compatibility
	  */
		difference: function difference(files) {
			var actualModels = this.model(files);
			var readmeModels = this.parse(files);

			// if a model that does not present in readme models, found in actual models
			var found = _.find(actualModels, function (model) {
				return !_.find(readmeModels, model);
			});

			return found ? [found] : [];
		},

		/**
	  * get a clean model
	  */
		model: function model(files) {
			return _.map(_.extend({}, files.bowerPost[this.url], files.packagePost[this.url]), function (version, name) {
				return {
					name: name,
					version: version
				};
			});
		},

		/**
	  * parse from view/readme file
	  */
		parse: function parse(files) {
			var list = files.readmePost.findParagraphList(this.schema, true);

			return _.chain(list).map(function (text) {
				var keyValue = text.split(' ');
				if (keyValue.length === 2) {
					return {
						name: keyValue[0],
						version: keyValue[1]
					};
				}
			}).compact().value();
		},

		update: function update(files) {
			var paragraph = files.readmePost.find(this.schema),
			    paragraphList = files.readmePost.findParagraphList(this.schema),
			    oldItems = paragraphList || [paragraph],
			    newItems = (paragraphList ? [] : [paragraph]).concat(files.readmePost.createList(_.map(this.model(files), this.render)));

			files.readmePost.replace(oldItems, newItems);
		}
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);

	module.exports = _.mixin({
		url: 'devDependencies',
		schema: 'marked#/backbase/dev-dependencies',
		dependencies: {
			readme: './README.md',
			bower: './bower.json'
		}
	}, __webpack_require__(93));

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var fs = __webpack_require__(26);
	var shell = __webpack_require__(9);
	var codeResource = __webpack_require__(88);
	var moment = __webpack_require__(96);

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

		update: function update(files) {
			var testSectionIndex = files.readmeInputPost.findIndex('marked#/backbase/test'),
			    md = files.readmeInputPost;

			var report = {
				preferences: !!md.findParagraphList('marked#/backbase/preferences'),
				devPreferences: !!md.findParagraphList('marked#/backbase/dev-preferences'),
				components: !!md.findParagraphList('marked#/backbase/components'),
				description: files.readmeInputPost.structure[1] && md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[1]),
				templates: !!md.findParagraphList('marked#/backbase/templates'),
				dependencies: !!md.findParagraphList('marked#/backbase/dependencies'),
				devDependencies: !!md.findParagraphList('marked#/backbase/dev-dependencies'),
				test: !! ~testSectionIndex && md.schema.is('marked#/paragraph/text', files.readmeInputPost.structure[testSectionIndex + 1]),
				tests: fs.existsSync('./test/') && shell.find('./test/').filter(function (file) {
					return (/\.js$/i.test(file)
					);
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

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var fs = __webpack_require__(26);
	var shell = __webpack_require__(9);
	var preferencesResource = __webpack_require__(90);
	var codeResource = __webpack_require__(88);

	module.exports = _.mixin({
		url: 'extensibility',
		defaultPreferences: preferencesResource.defaultPreferences,
		dependencies: function () {
			return shell.find('.').filter(function (file) {
				return !/node_modules|bower_components|dist|test|\.git/i.test(file) && /(?:templates|styles).+/i.test(file);
			}).reduce(function (memo, file) {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				model: './model.xml'
			});
		}(),

		update: function update(files) {
			var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme', 'model');

			var report = {
				endpoints: [],
				other: [],
				templates: cleanDependencies.filter(RegExp.prototype.test.bind(/templates.*(?:js|html)/)),
				templatesOptions: [],
				styles: cleanDependencies.filter(RegExp.prototype.test.bind(/styles.*(?:css|less)$/))
			};

			var preferences = this.model(files);
			preferences.forEach(function (preference) {
				var path = preference.value && preference.value.type === 'string' && preference.value.keyValue;
				if (path && /servicesPath/i.test(path)) {
					report.endpoints.push(preference);
				} else if (path && /itemRoot|contextRoot/i.test(path) && /templates.+/i.test(path) && /\.(?:js|html)$/i.test(path)) {
					report.templatesOptions.push(preference);
				} else {
					report.other.push(preference);
				}
			});

			files.readmePost.json.extensibility = report;
		}
	}, {
		model: preferencesResource.model,
		difference: codeResource.difference
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var fs = __webpack_require__(26);
	var shell = __webpack_require__(9);
	var css = __webpack_require__(99);
	var preferencesResource = __webpack_require__(90);
	var codeResource = __webpack_require__(88);
	var schema = __webpack_require__(85)(__webpack_require__(100));

	module.exports = _.mixin({
		url: 'mobile',
		defaultPreferences: preferencesResource.defaultPreferences,
		dependencies: function () {
			return shell.find('.').filter(function (file) {
				return !/node_modules|bower_components|test|\.git/i.test(file) && /(?:templates|styles).+/i.test(file);
			}).reduce(function (memo, file) {
				memo[file] = file;
				return memo;
			}, {
				readme: './DEV.md',
				css: './dist/styles/base.css'
			});
		}(),

		update: function update(files) {
			var cleanDependencies = _.without(Object.keys(this.dependencies), 'readme');
			var cssRules = _.property('stylesheet.rules')(css.parse(files.css || '', { silent: true }));

			var report = {
				templates: cleanDependencies.filter(RegExp.prototype.test.bind(/templates\/mobile\/?.+/)),
				foundMomentumScrollRule: !!_.find(cssRules, function (rule) {
					var scrollRule = _.find(rule.declarations, schema.generate('css#/scroll'));
					if (scrollRule) {
						return _.find(rule.declarations, schema.generate('css#/backbase/momentum-scroll'));
					}
				}),
				foundDisableSelectRule: !!_.find(cssRules, function (rule) {
					return _.find(rule.declarations, schema.generate('css#/backbase/disable-select'));
				})
			};

			files.readmePost.json.mobile = report;
		}
	}, {
		model: preferencesResource.model,
		difference: codeResource.difference
	});

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
		"name": "css",
		"scroll": {
			"properties": {
				"type": {
					"enum": [
						"declaration"
					]
				},
				"property": {
					"enum": [
						"overflow"
					]
				},
				"value": {
					"enum": [
						"auto",
						"scroll"
					]
				}
			},
			"required": [
				"type",
				"property",
				"value"
			]
		},
		"user-select": {
			"properties": {
				"type": {
					"enum": [
						"declaration"
					]
				},
				"property": {
					"enum": [
						"-moz-user-select",
						"-webkit-user-select",
						"-ms-user-select"
					]
				}
			},
			"required": [
				"type",
				"property",
				"value"
			]
		},
		"touch-callout": {
			"properties": {
				"type": {
					"enum": [
						"declaration"
					]
				},
				"property": {
					"enum": [
						"-webkit-touch-callout"
					]
				}
			},
			"required": [
				"type",
				"property",
				"value"
			]
		},
		"backbase": {
			"momentum-scroll": {
				"properties": {
					"type": {
						"enum": [
							"declaration"
						]
					},
					"property": {
						"enum": [
							"-webkit-overflow-scrolling"
						]
					},
					"value": {
						"enum": [
							"touch"
						]
					}
				},
				"required": [
					"type",
					"property",
					"value"
				]
			},
			"disable-select": {
				"oneOf": [
					{
						"$ref": "#/user-select"
					},
					{
						"$ref": "#/touch-callout"
					}
				],
				"properties": {
					"value": {
						"enum": [
							"none"
						]
					}
				}
			}
		}
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var display = __webpack_require__(5).display();

	module.exports = {
		url: 'version',
		dependencies: {
			readme: './README.md'
		},

		difference: function difference(files, version) {
			return version ? [version] : [];
		},

		update: function update(files, version) {
			var information = files.readmePost.find('marked#/backbase/information');
			if (!information) {
				display.info('Cannot find module information in a README file');
				return;
			}

			information.cells[0][1] = version;
		}
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Buffer) {'use strict';

	/**
	 * @todo
	 * - combine all html/md into one static site, using a backbase template style.
	 */
	var utils = __webpack_require__(5);
	var config = __webpack_require__(32);
	var path = __webpack_require__(7);
	var gulp = __webpack_require__(38);
	var del = __webpack_require__(39);
	var runSeq = __webpack_require__(46).use(gulp);
	var g = __webpack_require__(42)();
	var display = utils.display();
	var gutil = __webpack_require__(64);
	var through = __webpack_require__(60);
	var raml2md = __webpack_require__(107);
	var raml2html = __webpack_require__(108);
	var outputPath = utils.resolve(config.paths.docs, 'services');

	/**
	 * @todo fix them
	 * impurities :)
	 */
	var params = {};
	var simplifyMark = function simplifyMark(mark) {
	    if (mark) {
	        mark.buffer = mark.buffer.split('\n', mark.line + 1)[mark.line].trim();
	    }
	};

	/**
	* ------------------------------------------------------------------------
	* Private
	* ------------------------------------------------------------------------
	*/
	function gulpRAML2HTML(options) {
	    /**
	     * @todo pass config options Eg. template
	     */
	    options = options || {
	        type: 'html',
	        config: raml2html.getDefaultConfig()
	    };

	    var stream = through.obj(function (file, enc, done) {
	        var fail = function fail(message) {
	            done(new gutil.PluginError('raml2html', message));
	        };
	        if (file.isBuffer()) {
	            var cwd = process.cwd();
	            process.chdir(path.resolve(path.dirname(file.path)));
	            raml2html.render(file.contents, options.config).then(function (output) {
	                process.chdir(cwd);
	                stream.push(new gutil.File({
	                    base: file.base,
	                    cwd: file.cwd,
	                    path: gutil.replaceExtension(file.path, options.extension || '.' + options.type),
	                    contents: new Buffer(output)
	                }));
	                done();
	            }, function (error) {
	                process.chdir(cwd);
	                simplifyMark(error.context_mark);
	                simplifyMark(error.problem_mark);
	                process.nextTick(function () {
	                    fail(JSON.stringify(error, null, 2));
	                });
	            });
	        } else if (file.isStream()) {
	            fail('Streams are not supported: ' + file.inspect());
	        } else if (file.isNull()) {
	            fail('Input file is null: ' + file.inspect());
	        }
	    });

	    return stream;
	}

	function gulpRAML2MD(options) {

	    /**
	     * @todo pass config options Eg. template
	     */
	    options = options || {
	        type: 'md',
	        config: raml2md.getDefaultConfig()
	    };

	    var stream = through.obj(function (file, enc, done) {
	        var fail = function fail(message) {
	            done(new gutil.PluginError('raml2md', message));
	        };
	        if (file.isBuffer()) {
	            var cwd = process.cwd();
	            process.chdir(path.resolve(path.dirname(file.path)));
	            raml2md.render(file.contents, options.config).then(function (output) {
	                process.chdir(cwd);
	                stream.push(new gutil.File({
	                    base: file.base,
	                    cwd: file.cwd,
	                    path: gutil.replaceExtension(file.path, options.extension || '.' + options.type),
	                    contents: new Buffer(output)
	                }));
	                done();
	            }, function (error) {
	                process.chdir(cwd);
	                simplifyMark(error.context_mark);
	                simplifyMark(error.problem_mark);
	                process.nextTick(function () {
	                    fail(JSON.stringify(error, null, 2));
	                });
	            });
	        } else if (file.isStream()) {
	            fail('Streams are not supported: ' + file.inspect());
	        } else if (file.isNull()) {
	            fail('Input file is null: ' + file.inspect());
	        }
	    });

	    return stream;
	}

	function logErrorAndQuit(err) {
	    display.error(err.toString());
	    this.emit('end');
	}

	function replaceBaseUrl() {
	    var domain = params.services !== 'true' ? params.services : '';
	    return g.replace(/{domain}/gi, domain);
	}

	/**
	* ------------------------------------------------------------------------
	* Gulp Tasks
	* ------------------------------------------------------------------------
	*/
	/**
	 * Clean up old services
	 */
	gulp.task('docs:services:clean', function () {
	    var paths = [outputPath];
	    return del.sync(paths);
	});
	/**
	 * Generate HTML files
	 */
	gulp.task('docs:services:html', function () {
	    display.info('Start generating HTML documentation.');
	    var src = config.data.files.concat([
	    // ignore this ones
	    '!**/node_modules/**/*.raml', '!**/bower_components/**/*.raml', '!**/docs/**/*.raml']);

	    return gulp.src(src).pipe(replaceBaseUrl()).pipe(gulpRAML2HTML()).on('error', logErrorAndQuit).pipe(g.rename(function (f) {
	        f.basename = 'index';
	        f.path = path.join(config.paths.docs, f.dirname, f.basename + f.extname);
	        var info = utils.template('Generate HTML: ${path.green}')(f);
	        display.info(info);
	    })).on('end', function () {
	        display.info('Done generating HTML documentation!');
	    }).pipe(gulp.dest(config.paths.docs));
	});
	/**
	 * Generate markdown README's
	 */
	gulp.task('docs:services:md', function () {
	    display.info('Start generating MarkDown documentation.');
	    var src = config.data.files.concat([
	    // ignore this ones
	    '!**/node_modules/**/*.raml', '!**/bower_components/**/*.raml', '!**/docs/**/*.raml']);

	    return gulp.src(src).pipe(replaceBaseUrl()).pipe(gulpRAML2MD()).on('error', logErrorAndQuit).pipe(g.rename(function (f) {
	        f.basename = 'README';
	        f.path = path.join(config.paths.docs, f.dirname, f.basename + f.extname);
	        var info = utils.template('Generate MarkDown: ${path.green}')(f);
	        display.info(info);
	    })).on('end', function () {
	        display.info('Done generating MarkDown documentation!');
	    }).pipe(gulp.dest(config.paths.docs));
	});

	/**
	* ------------------------------------------------------------------------
	* Public
	* ------------------------------------------------------------------------
	*/
	exports.generate = function (args) {
	    params = utils.assign(args, {});
	    return new Promise(function (resolve, reject) {
	        return runSeq(['docs:services:clean', 'docs:services:html', 'docs:services:md'], function (err, done) {
	            if (err) {
	                reject(err);
	            } else {
	                resolve(done);
	            }
	        });
	    });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(103).Buffer))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(104)
	var ieee754 = __webpack_require__(105)
	var isArray = __webpack_require__(106)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103).Buffer, (function() { return this; }())))

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_104__;

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ },
/* 109 */,
/* 110 */
/***/ function(module, exports) {

	


/***/ },
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(8);
	var fs = __webpack_require__(30);
	var path = __webpack_require__(7);
	var utils = __webpack_require__(5);
	var markdown = __webpack_require__(82);
	var display = utils.display();

	'use strict';

	function handleError(err) {
	    return err;
	}

	function parseDocsFile(buffer) {
	    return markdown(buffer.toString());
	}

	function hasValidStructure(obj) {
	    return obj && obj.structure instanceof Array;
	}

	function hasManualSection(docs) {
	    try {
	        return !!docs.find('marked#/backbase/manual');
	    } catch (e) {
	        return false;
	    }
	}

	function getText(list) {
	    return utils.reduce(list || [], function (acc, item) {
	        if (item && item.text) {
	            acc.push(item.text);
	        }
	        return acc;
	    }, []);
	}

	function getName(property) {
	    return property && property.length ? property.split(':')[0] : '';
	}

	function getValue(property) {
	    return property && property.length ? property.split(':')[1] : '';
	}

	function hasTheSameName(prop1, prop2) {
	    return getName(prop1).replace(/\s/g, '') === getName(prop2).replace(/\s/g, '');
	}

	function mergeItem(existing, name) {
	    return utils.reduce(existing, function (acc, item) {
	        if (name === getName(item)) {
	            acc.splice(1, 1, getValue(item));
	        }
	        return acc;
	    }, [name, '``']).join(':');
	}

	function updateList(src, changed, cb) {
	    src = getText(src);
	    changed = getText(changed);
	    var result = [];
	    for (var i = 0; i < Math.max(src.length, changed.length); i++) {
	        if (src[i] && changed[i] && hasTheSameName(src[i], changed[i])) {
	            result.push(src[i]);
	        } else {
	            result.push(mergeItem(src, getName(changed[i])));
	        }
	    }
	    return cb(result);
	}

	function updateSection(docs, update, sectionId) {
	    var merged = updateList(docs.findList(sectionId), update.findList(sectionId), function (mergedList) {
	        return docs.replace(docs.findList(sectionId), docs.createList(mergedList));
	    });
	    return docs;
	}

	function prependSection(docs, template) {
	    if (!hasValidStructure(docs) || !hasValidStructure(template)) {
	        throw new Error('Wrong file structure...');
	    }
	    if (hasManualSection(docs)) {
	        docs = updateSection(docs, template, 'marked#/backbase/manual');
	    } else {
	        docs.structure.splice.apply(docs.structure, [1, 0].concat(template.structure));
	    }
	    return docs.toString();
	}

	function updateDocsItem(opts) {
	    return fs.readFileAsync(opts.docsFilePath).then(parseDocsFile).then(function prependManualSection(docs) {
	        return prependSection(docs, opts.template);
	    }).then(function writeFile(docs) {
	        return fs.writeFileSync(opts.docsFilePath, docs);
	    }).catch(function handleError(err) {
	        display.error(['Error while updating', opts.slug, '...\n', err.toString()].join(' '));
	        return err;
	    });
	}

	exports.updateDocs = function (project) {
	    return Promise.all(utils.map(project.repos, function (repo) {
	        return updateDocsItem({
	            docsFilePath: path.join(project.folder, repo.slug, 'DEV.md'),
	            template: project.template,
	            slug: repo.slug
	        });
	    }));
	};

	exports.fetchTemplate = function (project) {
	    project.template = markdown(fs.readFileSync(project.template).toString());
	    return project;
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_116__;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Test widget
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var shell = utils.shell();

	module.exports = function test(v) {
	    display.info('Running Clean');

	    return tasks.clean().catch(function (err) {
	        utils.handleError(err);
	    }).done(function () {
	        shell.exit(0);
	    });
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var path = __webpack_require__(7);
	var utils = __webpack_require__(5);

	var gcz = path.resolve(__dirname, '../../../node_modules/commitizen/bin/git-cz');

	module.exports = function link(v) {

	    __webpack_require__(119).spawn(gcz, [], {
	        stdio: 'inherit' //preserve the std input / output
	    });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Build custom widgets bundles
	/*----------------------------------------------------------------*/

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var path = __webpack_require__(7);
	var shell = utils.shell();
	var fs = __webpack_require__(26);
	var Promise = __webpack_require__(8);

	// TODO: add templates processing
	// TODO: create map for bundles
	module.exports = function customBuild(v) {
	    var withTemplates = v.options.withTemplates;
	    var withPerformance = v.options.withPerformance;
	    var useUnminified = !!v.options.useUnminified;
	    var verboseFlag = !!v.options.verbose;

	    function createRequireConf(config) {
	        var bundlePrefix = '-bundle';
	        return (Object.keys(config.bundles) || []).reduce(function (rjsConf, bundleName) {
	            var bundle = config.bundles[bundleName];
	            var bundleFileName = bundleName + bundlePrefix;
	            rjsConf.paths[bundleFileName] = path.join(config.base, config.dist, bundleFileName);
	            rjsConf.bundles[bundleFileName] = [];

	            bundle.widgets.forEach(function (widget) {
	                var widgetIsObject = (typeof widget === 'undefined' ? 'undefined' : _typeof(widget)) === "object" && widget.hasOwnProperty('path') && widget.hasOwnProperty('name');
	                var widgetPath = widgetIsObject ? path.join(config.base, widget.path, config.componentDistModule) : path.join(config.base, config.componentBase, widget, config.componentDistModule);
	                var widgetName = widgetIsObject ? widget.name : widget;

	                rjsConf.bundles[bundleFileName].push(widgetName);
	                rjsConf.map['*'][widgetPath] = widgetName;
	            });
	            return rjsConf;
	        }, {
	            "paths": {},
	            "bundles": {},
	            "map": { "*": {} }
	        });
	    }

	    tasks.clean().then(function () {
	        display.info('Prepearing environment...');
	        var config = utils.getJsonFromFile(path.resolve(v.args[0]));
	        var target = path.resolve(config.dist);

	        config.withTemplates = withTemplates || false;
	        config.withPerformance = withPerformance || false;

	        !fs.existsSync(target) && fs.mkdir(target);
	        return config;
	    }).then(function (config) {
	        display.info('Creating requirejs conf...');
	        var rjsConfPath = config.bundlesConfigPath;
	        var isValidConfig = rjsConfPath && config.dist && config.dist.length && config.base && config.base.length && config.componentBase && config.componentBase.length && config.componentDistModule && config.componentDistModule.length;
	        if (isValidConfig) {
	            fs.writeFileSync(path.resolve(rjsConfPath), ['requirejs.config(', JSON.stringify(createRequireConf(config), null, '  '), ');'].join(''));
	        }
	        config.verbose = verboseFlag;
	        return config;
	    }).then(function (config) {
	        display.info('Building...');
	        return Promise.all(Object.keys(config.bundles).reduce(function (steps, name) {
	            steps.push(Promise.resolve(tasks.createBundle(config, name, useUnminified)));
	            return steps;
	        }, []));
	    }).catch(function (err) {
	        utils.handleError(err);
	    }).done(function () {
	        shell.exit(0);
	    });
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Import
	/*----------------------------------------------------------------*/

	var tasks = __webpack_require__(37);

	module.exports = function start(v) {
	    tasks.deploy(v.options.all);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var docs = __webpack_require__(81);
	var tasks = __webpack_require__(37);
	var config = __webpack_require__(32);
	var updateTask = __webpack_require__(115);
	var utils = __webpack_require__(5);
	var colors = utils.colors();
	var shell = utils.shell();
	var display = utils.display();
	var Promise = __webpack_require__(8);
	var fs = __webpack_require__(30);
	var path = __webpack_require__(7);

	// TODO refactor it
	var makeQuestions = __webpack_require__(123).makeDocsQuestions;
	var login = __webpack_require__(123).login;
	var stash = __webpack_require__(124)('http://stash.backbase.com:7990/rest/api/1.0/');

	var manifest = {
	    configsFolder: path.join(__dirname, '../../tasks/docs/configs'),
	    reposConf: 'update.json'
	};

	var templatesPath = __webpack_require__(7).join(__dirname, '../../tasks/docs/templates/');

	var Commands = [];
	/**
	* ------------------------------------------------------------------------
	* Services Docs
	* ------------------------------------------------------------------------
	*/
	Commands.services = function services(options) {
	    var docs = __webpack_require__(102);
	    docs.generate(options).catch(function (err) {
	        display.error(err);
	    });
	};
	/**
	* ------------------------------------------------------------------------
	* Api Reference
	* ------------------------------------------------------------------------
	*/
	Commands.api = function api(options) {
	    // update dependencies
	    docs.register('dependencies');
	    docs.register('dev-dependencies');

	    return docs.fflush().then(function (doc) {
	        return fs.writeFileAsync('./README.md', doc);
	    }).then(function () {
	        // todo task docs here
	        return tasks.docs(options);
	    });
	};
	/**
	* ------------------------------------------------------------------------
	* Dev Statistics
	* ------------------------------------------------------------------------
	*/

	Commands.stats = function stats(options) {
	    var statsFile = path.resolve(config.paths.docs, 'stats-dev.md');
	    display.info('Writing report:', colors.info(statsFile));
	    shell.exec('touch ' + statsFile);
	    display.info('Analyzing code...');
	    docs.register('code');
	    docs.register('extensibility');
	    docs.register('documentation');
	    docs.register('mobile');

	    return docs.fflush().then(function (doc) {
	        var template = utils.template(fs.readFileSync(templatesPath + 'DEV.tpl'), {
	            imports: {
	                category: utils.template(fs.readFileSync(templatesPath + 'category.tpl')),
	                'boolean': utils.template(fs.readFileSync(templatesPath + 'boolean.tpl'))
	            }
	        });

	        display.info('Updating', colors.info(statsFile));
	        return fs.writeFileAsync(statsFile, template(doc.json));
	    });
	};

	/**
	* ------------------------------------------------------------------------
	* Dev report
	* ------------------------------------------------------------------------
	*/

	Commands.report = function report() {
	    var reportFile = path.resolve(config.paths.docs, 'reports-dev.csv');

	    display.info('Register resources...');

	    var result = {
	        projects: []
	    };

	    return utils.readDir('./').reduce(function (promise, folder) {
	        return promise.then(function () {
	            display.info('Analyzing data in', colors.info(folder), '...');

	            shell.cd(folder);

	            docs.register('code');
	            docs.register('extensibility');
	            docs.register('documentation');
	            docs.register('mobile');

	            return docs.fflush().then(function (data) {
	                data.json.projectName = folder;

	                result.projects.push(data.json);
	                shell.cd('../');
	            });
	        });
	    }, Promise.all(true)).then(function () {
	        var template = utils.template(fs.readFileSync(templatesPath + 'dev-csv.tpl'), {
	            imports: {
	                'boolean': utils.template(fs.readFileSync(templatesPath + 'boolean.tpl')),
	                'tryForEach': function tryForEach(items, cb) {
	                    utils.forEach(items, function () {
	                        try {
	                            cb.apply(this, arguments);
	                        } catch (e) {
	                            display.error(e);
	                        }
	                    }.bind(this));
	                }
	            }
	        });

	        shell.exec('touch ' + reportFile);
	        display.info('Writing report: ', reportFile);
	        return fs.writeFileAsync(reportFile, template(result));
	    });
	};

	/**
	* ------------------------------------------------------------------------
	*
	* ------------------------------------------------------------------------
	*/
	Commands.update = function update(options) {
	    display.info('Updating docs...');

	    utils.prompt(login).then(stash.connect).then(stash.getProjectsList).then(makeQuestions).then(utils.prompt).then(updateTask.fetchTemplate).then(stash.cloneReposFromProject).then(updateTask.updateDocs).done();
	};
	module.exports = function build(args) {
	    var isCommand = function isCommand(fn) {
	        return utils.isFunction(Commands[fn]);
	    };
	    var cmds = utils(args.options).keys().filter(function (option) {
	        return args.options[option] !== false && !utils.isNull(args.options[option]);
	    }).filter(isCommand).value();
	    shell.mkdir('-p', config.paths.docs);
	    // Make 'api' default if nothing is passed as flag
	    if (cmds.length <= 0) {
	        cmds = ['api'];
	    }

	    utils.each(cmds, function (cmd) {
	        try {
	            display.info('Running docs', colors.info(cmd.toUpperCase()));
	            Commands[cmd].call(Commands, args.options);
	        } catch (e) {
	            display.error(e);
	        }
	    });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var utils = __webpack_require__(5);
	var fs = __webpack_require__(26);
	var colors = utils.colors();
	var path = __webpack_require__(7);
	var semver = __webpack_require__(80);
	var git = __webpack_require__(33);

	/*----------------------------------------------------------------*/
	/* #TODO add more questions
	/*----------------------------------------------------------------*/
	var widget = [{
	    type: 'input',
	    name: 'name',
	    message: 'Name',
	    validate: function validate(value) {
	        if (utils.isEmpty(value)) {
	            return 'Name is required';
	        } else {
	            return true;
	        }
	    },
	    filter: function filter(value) {
	        return utils.chain(value).deburr().kebabCase().value();
	    }
	}, {
	    type: 'input',
	    name: 'title',
	    message: 'Title',
	    validate: function validate(value) {
	        if (utils.isEmpty(value)) {
	            return 'Title is required';
	        } else {
	            return true;
	        }
	    },
	    filter: function filter(value) {
	        return utils.trim(value);
	    }
	}, {
	    type: 'input',
	    name: 'description',
	    message: 'Description',
	    validate: function validate(value) {
	        if (utils.isEmpty(value)) {
	            return 'Description is required';
	        } else {
	            return true;
	        }
	    },
	    filter: function filter(value) {
	        return utils.trim(value);
	    }
	}, {
	    type: 'input',
	    name: 'version',
	    message: 'Version',
	    default: '0.1.0-alpha.0',
	    validate: function validate(value) {
	        if (utils.isNull(semver.valid(value)) && /v[0-9]+/gi.test(value) === false) {
	            return 'Invalid version';
	        } else {
	            return true;
	        }
	    }
	}, {
	    type: 'input',
	    name: 'author',
	    message: 'Author',
	    default: function _default() {
	        return git.getConfig('user.email', '--global');
	    }
	}, {
	    type: 'input',
	    name: 'bundle',
	    message: 'Bundle',
	    default: function _default() {
	        return 'N/A';
	    }
	}, {
	    type: 'input',
	    name: 'status',
	    message: 'Build Status URL',
	    default: function _default() {
	        return 'N/A';
	    }
	}, {
	    type: 'confirm',
	    name: 'standalone',
	    message: 'Standalone package? ' + colors.gray('will include README, CHANGELOG and *.json files.'),
	    default: function _default() {
	        // - .files (dot files)
	        // - .json files (package.json, bower.json)
	        // - UPPERCASE files (CHANGELOG, LICENCE)
	        // - index.dev.html ()
	        return true;
	    }
	}];

	var login = [{
	    type: 'input',
	    name: 'login',
	    message: 'Please enter your stash login',
	    validate: function validate(value) {
	        return !!value.length;
	    }
	}, {
	    type: 'password',
	    name: 'password',
	    message: 'Please enter your stash password',
	    validate: function validate(value) {
	        return !!value.length;
	    }
	}];

	var makeDocsQuestions = function makeDocsQuestions(data) {
	    var repos = data.values || [];
	    return [{
	        type: "list",
	        name: "target",
	        message: "Please select the target to update documents:",
	        choices: utils.map(repos, function (repo) {
	            return repo.name;
	        }),
	        filter: function filter(value) {
	            return utils.find(repos, function (item) {
	                return item.name && item.name === value;
	            });
	        }
	    }, {
	        type: 'input',
	        name: 'folder',
	        message: 'Please enter valid dist folder to store updated items',
	        default: function _default() {
	            return path.resolve('./');
	        },
	        validate: function validate(value) {
	            return fs.existsSync(value) && fs.statSync(value).isDirectory();
	        },
	        filter: function filter(value) {
	            return path.resolve(value);
	        }
	    }, {
	        type: 'input',
	        name: 'template',
	        message: 'Please enter custom template path (if needed)',
	        default: function _default() {
	            //TODO: remove hadcoded template to config.
	            return path.resolve(path.join(__dirname, 'tasks/docs/templates/manual.tpl'));
	        }
	    }];
	};

	exports.widget = widget;
	exports.login = login;
	exports.makeDocsQuestions = makeDocsQuestions;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shell = __webpack_require__(9);
	var path = __webpack_require__(7);
	var Client = __webpack_require__(125).Client;
	var utils = __webpack_require__(5);

	module.exports = function (stashURL) {
	    'use strict';

	    var _client = null;
	    stashURL = stashURL || 'http://stash.backbase.com/rest/api/1.0/';

	    function createConnection(credentials) {
	        return _client = new Client(stashURL, credentials.login, credentials.password);
	    }

	    function getReposListByKey(projectKey) {
	        return _client.repos.get(projectKey);
	    }

	    function cloneRepo(args) {
	        return shell.exec(['git clone', args.cloneUrl, args.target].join(' '));
	    }

	    function getCloneLink(item, protocol) {
	        protocol = protocol || 'ssh';
	        return utils.find(item.links.clone, function (link) {
	            return link.name && link.name === protocol;
	        }).href;
	    }

	    return {
	        // returns promise
	        connect: function connect(credentials) {
	            return _client ? _client : createConnection(credentials || {});
	        },
	        // returns promise
	        getProjectsList: function getProjectsList() {
	            return _client.projects.get();
	        },
	        // returns promise
	        cloneReposFromProject: function cloneReposFromProject(project) {
	            return getReposListByKey(project.target.key).then(function cloneReposList(reposList) {
	                project.repos = reposList.values;
	                (reposList.values || []).forEach(function clone(repo) {
	                    cloneRepo({
	                        cloneUrl: getCloneLink(repo, 'ssh'),
	                        target: path.join(project.folder, repo.slug)
	                    });
	                });
	                return project;
	            });
	        }
	    };
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(7);
	var fs = __webpack_require__(26);
	var utils = __webpack_require__(5);
	var git = __webpack_require__(33);
	var tasks = __webpack_require__(37);
	var shell = utils.shell();
	var display = utils.display();
	var colors = utils.colors();
	var questions = __webpack_require__(123).widget;

	function repoResolver(template, widgetPath, widgetModel) {

	    var repoParts = template.split('#');
	    var repoUrl = repoParts[0];
	    var branchName = repoParts[1];
	    if (!shell.which('git')) {
	        display.warn('This command requires git to be installed on the system');
	        shell.exit(1);
	    }

	    git.cloneRepo(repoUrl, widgetModel.name);

	    if (!utils.isUndefined(branchName)) {
	        shell.cd(widgetModel.name);
	        display.info('Checkout ' + branchName);
	        if (git.checkout(branchName).code !== 0) {
	            display.error('Unable to switch to ' + branchName + '. Does it exists?');
	            shell.exit(1);
	        }
	    }
	    var gitFolder = path.resolve(widgetPath, '.git');
	    return shell.rm('-rf', gitFolder);
	}

	function localResolver(localPath, widgetPath, widgetModel) {
	    var fromPath = path.resolve(localPath);
	    var toPath = path.resolve(widgetPath);
	    var fromPath = path.resolve(localPath);
	    var gitFolder = path.resolve(widgetPath, '.git');
	    var cmd = utils.template('cp -Rf ${fromPath} ${toPath}')({
	        fromPath: fromPath,
	        toPath: toPath
	    });
	    shell.exec(cmd);
	    return shell.rm('-rf', gitFolder);
	}
	/**
	 * To refactor into more robust generators
	 * @jira https://backbase.atlassian.net/browse/LF-152
	 */
	module.exports = function generate(v) {

	    var args = v.args;

	    var prcessImages = v.options.prcessImages;

	    var template = args[0];
	    var target = args[1];
	    var widgetPath;
	    var widgetModel;

	    utils.prompt(questions).then(function (answers) {
	        var resolver = null;
	        widgetPath = utils.projectPath(answers.name);
	        widgetModel = answers;
	        widgetModel.path = widgetPath;
	        // tmp custom name transformations
	        widgetModel.transforms = {
	            name: {
	                camelCase: utils.camelCase(widgetModel.name),
	                capitalizeFirstLetter: utils.capitalizeFirstLetter(widgetModel.name)
	            }
	        };
	        // Check if the argument is folder
	        try {
	            if (fs.lstatSync(template).isDirectory()) {
	                resolver = localResolver(template, widgetPath, widgetModel);
	            }
	        } catch (err) {
	            resolver = repoResolver(template, widgetPath, widgetModel);
	        }

	        return widgetModel;
	    }).then(function (widgetModel) {

	        if (widgetModel.standalone === false) {
	            display.info('Deleting standalone files');
	            var toDelete = [path.resolve(widgetModel.path, '.*'), path.resolve(widgetModel.path, '*.json'), path.resolve(widgetModel.path, 'model.xml'), path.resolve(widgetModel.path, 'Makefile'), path.resolve(widgetModel.path, 'CHANGELOG.md'), path.resolve(widgetModel.path, 'LICENSE'), path.resolve(widgetModel.path, 'index.dev.html')];
	            shell.rm('-rf', toDelete);
	        }
	        return widgetModel;
	    }).then(function (widgetModel) {
	        var data = {
	            module: widgetModel,
	            widget: widgetModel,
	            component: widgetModel
	        };
	        var options = {
	            prcessImages: prcessImages
	        };
	        tasks.template(widgetModel.path, data, options);
	        return widgetModel;
	    }).then(function (widgetModel) {
	        if (path.resolve(target) !== utils.projectPath()) {
	            display.info('Generate destination ' + colors.green(path.resolve(target)));
	            shell.mv(widgetModel.path, path.resolve(target));
	        }
	        return widgetModel;
	    }).catch(utils.handleError).done(function () {
	        shell.exit(0);
	    });
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Install bower components
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var display = utils.display();
	var colors = utils.colors();
	var shell = utils.shell();

	if (!shell.which('bower')) {
	    display.warn('Sorry, this script requires ' + colors.info('bower'));
	    display.info('Use, ' + colors.info('npm i bower -g') + ' to install bower globally');
	    shell.exit(1);
	}

	module.exports = function install(v) {

	    display.warn('This method is deprecated. Please use `bower install` instead!');
	    shell.exit(0);

	    var linkCmd = __webpack_require__(128);

	    var verbose = v.options.verbose;
	    var link = v.options.link;
	    var dep = v.args[0];

	    var cmd = utils.trim('bower install ' + dep + ' --config.interactive=false');
	    display.info('Instaling  dependencies: ' + colors.info(cmd));
	    shell.exec(cmd, function (code, output) {
	        if (code > 0) {
	            utils.handleError(output);
	        } else {
	            // AutoLink
	            if (link) {
	                linkCmd(v);
	            }
	        }
	    });
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Link dependencies
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);

	var display = utils.display();
	var colors = utils.colors();
	var shell = utils.shell();

	if (!shell.which('bower')) {
	    display.warn('Sorry, this script requires ' + colors.info('bower'));
	    display.info('Use, ' + colors.info('npm i bower -g') + ' to install bower globally');
	    shell.exit(1);
	}

	module.exports = function link(v) {

	    display.warn('This method is deprecated. Please use `bower link` instead!');
	    shell.exit(0);
	    // #TODO check if is a .bowerc in $HOME or local and if there's a directory prop
	    var defaultBowerDirectory = 'bower_components'; //default bower_components dir
	    var depsPath = utils.projectPath(defaultBowerDirectory);

	    if (!shell.test('-d', depsPath)) {
	        display.warn('Sorry, ' + colors.info(depsPath) + ' can\'t be found.');
	        display.info('Make sure you, ' + colors.info('bb install'));
	        shell.exit(1);
	    }
	    var deps = utils.readDir(depsPath);
	    var cmd = 'for c in ' + deps.join(' ') + '; do if [ -d "' + depsPath + '/$c" ]; then bower link $c; fi; done';
	    display.info('Linking dependencies: ' + colors.info(cmd));
	    shell.exec(cmd);
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Test widget
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var colors = utils.colors();

	module.exports = function test(params) {

	    params.cmd = 'publish';
	    tasks.registerPackage(params).then(function (cmd) {
	        display.info('Exec: ' + colors.info(cmd));
	    }).catch(function (err) {
	        display.error(err);
	    }).done(function () {});
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	/*----------------------------------------------------------------*/
	/* Start local server
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var colors = utils.colors();
	var config = __webpack_require__(32);
	var path = __webpack_require__(7);
	var fs = __webpack_require__(26);

	module.exports = function start(v) {
	    config.server.port = v.options.port;
	    config.server.logLevel = v.options.logLevel;
	    config.data.useApiVersion = v.options.apiVersion;
	    config.build.noMinify = v.options.expand;
	    config.deploy = v.options.deploy;
	    if (v.options.template) {
	        var tplPath = path.resolve(v.options.template);
	        fs.access(tplPath, fs.F_OK, function (err) {
	            if (err) {
	                display.error('Template not found: ', tplPath);
	                process.exit(1);
	            }
	        });
	        config.paths.index = v.options.template;
	    }
	    if (!/\.html$/.test(config.paths.index)) {
	        config.paths.index += '.html';
	    }

	    tasks.start();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Test widget
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var shell = utils.shell();
	var colors = utils.colors();

	module.exports = function test(v) {

	    var options = utils.assign({
	        config: null,
	        watch: false,
	        coverage: false,
	        browsers: null,
	        moduleDirectories: []
	    }, v);

	    return tasks.test(v).catch(function (err) {
	        display.error(colors.error(err.message));
	        shell.exit(1);
	    }).done(function () {
	        shell.exit(0);
	    });
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*----------------------------------------------------------------*/
	/* Test widget
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var display = utils.display();
	var colors = utils.colors();

	module.exports = function test(params) {

	    params.cmd = 'unpublish';
	    tasks.registerPackage(params).then(function (cmd) {
	        display.info('Exec: ' + colors.info(cmd));
	    }).catch(function (err) {
	        display.error(err);
	    }).done(function () {});
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * port existing theme build
	 * https://github.com/Backbase/bb-cli/blob/nightly/commands/theme-build.js
	 */

	//
	/*----------------------------------------------------------------*/
	/* Build LP theme
	/*----------------------------------------------------------------*/

	var utils = __webpack_require__(5);
	var gulp = __webpack_require__(38);
	var tasks = __webpack_require__(134);
	var fs = __webpack_require__(30);
	var glob = __webpack_require__(8).denodeify(__webpack_require__(135));
	var Promise = __webpack_require__(8);
	var path = __webpack_require__(7);

	/*----------------------------------------------------------------*/
	/*
	/*----------------------------------------------------------------*/
	module.exports = function build(v) {
	    var config = getConfig(v);
	    if (config.watch) {
	        gulp.watch(config.watchFiles, run.bind(null, utils.defaults({
	            assets: false
	        }, config)));
	    }

	    return run(config);
	};

	function getConfig(cmdArguments) {
	    var target = cmdArguments.args[1];
	    var config = utils.defaults({
	        edition: cmdArguments.args[0],
	        target: target,
	        bowerFiles: target + '/**/bower.json',
	        watchFiles: cmdArguments.options.watch && target + '/**/*.less',
	        ignore: [target + '/**/bower_components/**', target + '/**/node_modules/**'],
	        ie: !!cmdArguments.options.ie,
	        compress: !cmdArguments.options['disable-compress'],
	        assets: !cmdArguments.options['disable-assets'],
	        dist: path.resolve(cmdArguments.args[1], cmdArguments.options.target)
	    }, cmdArguments.options);

	    return config;
	}

	function run(config) {
	    // Find bower.json files, as entry for themes.
	    return glob(config.bowerFiles, { ignore: config.ignore }).then(utils.partial(buildAll, utils, config)).catch(function (err) {
	        utils.handleError('Error: ' + err.message || err.error);
	    });
	}

	function buildAll(files, options) {
	    return Promise.all(files.map(function (f) {
	        return fs.readJsonAsync(f).then(utils.partial(buildTheme, utils, options));
	    }));
	}

	function buildTheme(bowerJson, options) {
	    // Normalise main to an array.
	    // Prefix with target.
	    var entry = [].concat(bowerJson.main).map(function (f) {
	        return path.join(options.target, f);
	    });

	    return utils.reduce(['ie', 'compress', 'assets', 'deploy'], function (promise, action) {
	        return promise.then(function (entry) {
	            if (!options[action]) {
	                return entry;
	            }

	            return tasks[action](entry, options);
	        });
	    }, tasks.compile(entry, options));
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var gulp = __webpack_require__(38);
	var path = __webpack_require__(7);
	var utils = __webpack_require__(5);
	var tasks = __webpack_require__(37);
	var through = __webpack_require__(60);
	var plugins = __webpack_require__(42)();
	var Promise = __webpack_require__(8);
	var pkg = __webpack_require__(3);
	var config = __webpack_require__(32);

	function distDirname(dirname, dist) {
	    return dirname.replace('styles', path.join(dist, 'styles'));
	}

	function compile(entry, options) {
	    return new Promise(function (resolve, reject) {
	        var files = [];

	        gulp.src(entry, { base: options.target }).pipe(plugins.if(function () {
	            return !!options.sourcemaps;
	        }, plugins.sourcemaps.init())).pipe(plugins.debug({ title: 'compiling' })).pipe(plugins.less({
	            modifyVars: utils.merge({}, { // use options if defined.
	                edition: options.edition,
	                'base-path': options['base-path'] || undefined
	            })
	        })).on('error', reject).pipe(plugins.rename(function (path) {
	            path.dirname = distDirname(path.dirname, options.dist);
	            path.basename = 'base';
	        })).on('error', reject).pipe(plugins.if(function () {
	            return !!options.sourcemaps;
	        }, plugins.sourcemaps.write('.')))

	        // Save files for promise resolve.
	        .pipe(through.obj(function (file, enc, cb) {
	            if (file.path.substring(file.path.length - 4) !== '.map') {
	                files.push(file.path);
	            }
	            cb(null, file);
	        })).pipe(plugins.debug({ title: 'writing' })).pipe(plugins.header(utils.banner(pkg, config))).pipe(gulp.dest(options.target)).on('end', function () {
	            resolve(files);
	        });
	    });
	}

	function reworkIe(files, options) {
	    // Helper function to plugins.rework CSS for IE8.
	    function reworkIe8(ast) {
	        // Push custom rule for IE8 to prevent responsiveness.
	        ast.rules.push({
	            type: 'rule',
	            selectors: ['.container-fluid'],
	            declarations: [{
	                type: 'declaration',
	                property: 'min-width',
	                value: '1024px'
	            }]
	        });
	    }

	    return new Promise(function (resolve, reject) {
	        // Create .ie.css for ie8 support (TODO: drop ie8 support).
	        gulp.src(files, { base: options.target }).pipe(plugins.debug({ title: 'reworking' })).pipe(plugins.rename({
	            suffix: '.ie',
	            extname: '.css'
	        })).pipe(plugins.mqRemove({ width: '1024px' })).pipe(plugins.rework(reworkIe8)).pipe(plugins.debug({ title: 'writing' }))
	        // Save files for promise resolve.
	        .pipe(through.obj(function (file, enc, cb) {
	            files.push(file.path);
	            cb(null, file);
	        })).pipe(gulp.dest(options.target)).on('error', reject).on('end', function () {
	            resolve(files);
	        });
	    });
	}

	function compress(entry, options) {
	    return new Promise(function (resolve, reject) {
	        gulp.src(entry, { base: options.target }).pipe(plugins.debug({ title: 'compressing' })).pipe(plugins.if(function () {
	            return !!options.sourcemaps;
	        }, plugins.sourcemaps.init({ loadMaps: true }))).pipe(plugins.minifyCss({ keepBreaks: true })).pipe(plugins.rename({
	            suffix: '.min',
	            extname: '.css'
	        })).pipe(plugins.if(function () {
	            return true;
	        }, plugins.sourcemaps.write('.'))).pipe(plugins.debug({ title: 'writing' })).pipe(gulp.dest(options.target)).on('error', reject).on('end', resolve);
	    });
	}

	function copyAssets(entry, options) {
	    var fontGlob = path.join(options.target, '**', '*.{ttf,woff,woff2,eof,svg}');
	    var imageGlob = path.join(options.target, '**', '*.{jpg,jpeg,png,svg,gif}');
	    var noDistGlob = path.join(options.target, '!**', options.dist, '**'); // don't copy from `dist` directories
	    var noBowerGlob = path.join(options.target, '!bower_components', '**'); // don't copy from `bower_components` directories

	    gulp.task('copyThemeAssets', [], function () {
	        var basePath = path.join(options.target, 'bower_components', 'theme');
	        var universalAssets = gulp.src([path.join(basePath, 'universal', fontGlob), path.join(basePath, 'universal', imageGlob)], { follow: true });
	        var retailAssets = gulp.src([path.join(basePath, 'retail', fontGlob), path.join(basePath, 'retail', imageGlob)], { follow: true });
	        return plugins.merge(universalAssets, retailAssets).pipe(plugins.debug({ title: 'copying' })).pipe(gulp.dest(options.dist));
	    });

	    gulp.task('copyBowerAssets', ['copyThemeAssets'], function () {
	        var assets = gulp.src([path.join(options.target, 'bower_components', fontGlob), path.join(options.target, 'bower_components', imageGlob), path.join(options.target, '!bower_components', 'theme', '**')], { follow: true });
	        return assets.pipe(plugins.debug({ title: 'copying' })).pipe(plugins.rename(function (file) {
	            // drop the module name from the path
	            file.dirname = path.join.apply(null, file.dirname.split(path.sep).slice(1));
	        })).pipe(gulp.dest(options.dist));
	    });

	    return new Promise(function (resolve, reject) {
	        gulp.task('copyAssets', ['copyThemeAssets', 'copyBowerAssets'], function () {
	            var assetPaths = [fontGlob, imageGlob, noBowerGlob, noDistGlob];
	            return gulp.src(assetPaths, { follow: true }).pipe(plugins.debug({ title: 'copying' })).pipe(gulp.dest(options.dist)).on('error', reject).on('end', resolve);
	        });

	        gulp.start('copyAssets');
	    });
	}

	function deploy() {
	    return new Promise(function (resolve, reject) {
	        gulp.start('deploy:item');
	    });
	}

	module.exports = {
	    compile: compile,
	    ie: reworkIe,
	    compress: compress,
	    assets: copyAssets,
	    deploy: deploy
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_135__;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cliparse = __webpack_require__(2);
	var parsers = cliparse.parsers;
	var colors = __webpack_require__(4);
	var utils = __webpack_require__(5);
	var config = __webpack_require__(32);

	module.exports = {
	    description: 'Launchpad theme subcommands',
	    commands: [cliparse.command('build', {
	        description: 'Build launchpad theme',
	        args: [cliparse.argument('collection', {
	            description: 'Collection',
	            parser: function parser(v) {
	                if (['retail', 'universal'].indexOf(v) !== -1) return {
	                    success: v
	                };else return {
	                    error: 'Collection!'.red
	                };
	            },
	            default: 'universal'
	        }), cliparse.argument('entry', {
	            description: 'Entry folder path. Default path is ' + colors.info(utils.resolve('./')),
	            default: utils.resolve('./')
	        })],
	        options: [cliparse.option('watch', {
	            aliases: ['w'],
	            description: 'Watch theme changes and trigger a build'
	        }), cliparse.option('target', {
	            description: 'Target folder to output compiled theme',
	            parser: cliparse.parsers.stringParser,
	            default: config.paths.target
	        }), cliparse.option('base-path', {
	            description: 'Pass base-path var to less.',
	            parser: cliparse.parsers.stringParser
	        }), cliparse.option('disable-compress', {
	            description: 'Don\'t compress CSS into .min files.'
	        }), cliparse.option('ie', {
	            description: 'Don\'t create reworked .ie files for IE8.'
	        }), cliparse.option('disable-assets', {
	            description: 'Don\'t collect font/image assets.'
	        }), cliparse.flag('sourcemaps', {
	            description: 'Whether to generate source maps.'
	        }), cliparse.option('deploy', {
	            description: 'Run bblp deploy after building.',
	            parser: cliparse.parsers.booleanParser
	        })]
	    }, __webpack_require__(133))]
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = {
		"parser": "babel-eslint",
		"parserOptions": {
			"ecmaVersion": 6,
			"sourceType": "module",
			"ecmaFeatures": {
				"jsx": true,
				"modules": true
			}
		},
		"rules": {
			"quotes": [
				2,
				"single"
			],
			"no-unused-vars": [
				2,
				{
					"vars": "local",
					"args": "none"
				}
			],
			"no-debugger": [
				1
			],
			"dot-notation": [
				0
			],
			"max-statements": [
				1,
				15
			],
			"max-depth": [
				1,
				2
			],
			"new-cap": [
				0
			],
			"no-underscore-dangle": [
				1
			],
			"complexity": [
				1,
				5
			]
		},
		"globals": {},
		"ecmaFeatures": {
			"modules": true
		},
		"env": {
			"browser": true,
			"amd": true,
			"node": true,
			"jasmine": true,
			"es6": true
		}
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var path = __webpack_require__(7);
	var webpack = __webpack_require__(40);
	var utils = __webpack_require__(5);
	var fs = __webpack_require__(26);
	var display = utils.display();
	var shell = utils.shell();
	var colors = utils.colors();
	var yaml = __webpack_require__(139);
	var config = __webpack_require__(32);
	var baseWebpackConfig = __webpack_require__(140)(path.resolve(__dirname, './webpack.conf.js'));
	baseWebpackConfig.externals.unshift(/^$/);
	var webpackConf = utils.deepMerge(baseWebpackConfig, {
	    // extension
	    module: {
	        preLoaders: [{
	            test: /\.js$/,
	            loaders: ['isparta'],
	            // exclude node_modules and test files
	            exclude: /node_modules|features|test|bower_components|\.test.js$|\.spec\.js$/,
	            include: [utils.resolve(config.paths.scripts), utils.resolve(config.paths.components)]
	        }]
	    },
	    plugins: [new webpack.ContextReplacementPlugin(config.tests.requestInternalRegExp, config.tests.includeInternalRegExp)],
	    isparta: {
	        embedSource: true,
	        noAutoWrap: true
	    },
	    devtool: 'inline-source-map'
	});

	var reportsPath = path.join(config.paths.reports, config.name + '-v' + config.version);

	module.exports = function (karmaConfig) {
	    display.info('Running tests with:', colors.info('Karma'));
	    var options = utils.defaults(karmaConfig.options, {});

	    var moduleDirectories = options.moduleDirectories && options.moduleDirectories.split(',') || [];
	    moduleDirectories = webpackConf.resolve.modulesDirectories.concat(moduleDirectories);
	    webpackConf.resolve.modulesDirectories = moduleDirectories;

	    var reporters = ['mocha'];
	    var browsers = ['PhantomJS'];
	    var preprocessors = {};

	    var entry = utils.projectPath(config.paths.test + '/unit/index.js').replace(/\[(.+?)\]/g, function ($0, $1) {
	        return '\\[' + $1 + '\\]';
	    });

	    preprocessors[entry] = ['webpack', 'sourcemap'];
	    if (options.coverage) {
	        reporters.push('coverage');
	    }

	    var defaultConfig = {
	        // ... normal karma configuration
	        basePath: '',
	        frameworks: ['jasmine'],
	        coverageReporter: {
	            dir: path.resolve(reportsPath, 'coverage'),
	            reporters: [{ type: 'html' }, { type: 'cobertura' }, { type: 'text-summary' }]
	        },

	        reporters: reporters,
	        preprocessors: preprocessors,
	        browsers: browsers,
	        failOnEmptyTestSuite: false,
	        browserNoActivityTimeout: 60000,
	        files: ['../shims/bind.js', '../../node_modules/jasmine-expect/dist/jasmine-matchers.js', '../../node_modules/jasmine-promise-matchers/dist/jasmine-promise-matchers.js', entry],
	        mochaReporter: {
	            output: 'autowatch'
	        },
	        logLevel: 'error',
	        webpack: webpackConf,
	        webpackMiddleware: {
	            noInfo: true,
	            stats: {
	                colors: true
	            }
	        },
	        plugins: ['karma-*']
	    };

	    var customConfig = config.karma;
	    var configOptions = {};
	    var customConfigPath;
	    var yamlCustomConfigPath;
	    var jsonCustomConfigPath;

	    if (!utils.isUndefined(customConfig)) {
	        if (utils.fileIs(customConfig, 'yaml')) {
	            yamlCustomConfigPath = utils.projectPath(customConfig);
	        } else if (utils.fileIs(customConfig, 'json')) {
	            jsonCustomConfigPath = utils.projectPath(customConfig);
	        }
	    } else {
	        customConfig = path.resolve('configs', 'karma.conf');
	        yamlCustomConfigPath = utils.projectPath(customConfig) + '.yaml';
	        jsonCustomConfigPath = utils.projectPath(customConfig) + '.json';
	    }

	    if (shell.test('-f', yamlCustomConfigPath)) {
	        customConfigPath = yamlCustomConfigPath;
	        configOptions = yaml.load(customConfigPath, process.argv.NODE_ENV);
	    } else if (shell.test('-f', jsonCustomConfigPath)) {
	        customConfigPath = jsonCustomConfigPath;
	        configOptions = __webpack_require__(140)(customConfigPath);
	    }

	    defaultConfig = utils.assign(defaultConfig, configOptions);
	    if (options.browsers) {
	        utils.merge(browsers, options.browsers.split(','));
	    }
	    display.info('Launching browsers:', colors.info(defaultConfig.browsers));

	    if (customConfigPath) {
	        display.info('Using custom karma config file:', colors.info(customConfigPath));
	    }

	    if (utils.includes(defaultConfig.reporters, 'coverage')) {
	        display.info('Recording coverages:', colors.info(reportsPath));
	    }

	    karmaConfig.set(defaultConfig);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_139__;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./eslint.conf": 137,
		"./eslint.conf.json": 137,
		"./karma.conf": 138,
		"./karma.conf.js": 138,
		"./webpack.conf": 61,
		"./webpack.conf.js": 61
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 140;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(7);
	var fs = __webpack_require__(26);
	var utils = __webpack_require__(5);
	var defaults = {
	    customComponents: [],
	    componentBase: null,
	    componentMain: null
	};

	module.exports = function (content) {
	    this.cacheable();
	    var callback = this.async();
	    var options = this.options["customDepsLoader"] || defaults;

	    var components = Object.keys(options.customComponents).reduce(function (components, name) {
	        components[path.resolve(path.join(options.componentBase, name, options.componentMain))] = options.customComponents[name];
	        return components;
	    }, {});

	    var tmpContent;
	    if (!! ~Object.keys(components).indexOf(this.resource)) {
	        content = utils.excludeDependenciesByName(components[this.resource].excludes, this.resource);
	    }
	    callback(null, content);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fs = __webpack_require__(26);
	var path = __webpack_require__(7);
	var esprima = __webpack_require__(143);
	var escodegen = __webpack_require__(144);
	var util = __webpack_require__(145);

	var defaults = {
	    injectingDependency: '',
	    condition: function condition() {
	        return true;
	    }
	};

	function isASTCallExpr(node) {
	    return node && node.expression && node.expression.type === 'CallExpression';
	}

	function isASTFuncExpr(node) {
	    return node && node.type === 'FunctionExpression';
	}

	function injectDependency(sourceCode, dependency) {
	    var sourceAST = esprima.parse(sourceCode);

	    // extracting destination module due to following code structure:
	    // define(function(...) { // module body });
	    var module = function getModuleBody() {
	        var ASTNodes = sourceAST.body;
	        var body = null;
	        for (var i = 0, len = ASTNodes.length; i < len; i++) {
	            if (isASTCallExpr(ASTNodes[i]) && isASTFuncExpr(ASTNodes[i].expression.arguments[0])) {
	                body = ASTNodes[i].expression.arguments[0].body;
	                break;
	            }
	        }
	        return body;
	    }();

	    if (module && module.body) {
	        module.body.unshift(esprima.parse('require("' + dependency + '");'));
	        sourceCode = escodegen.generate(sourceAST);
	    }

	    return sourceCode;
	}

	module.exports = function (content) {
	    this.cacheable();
	    var callback = this.async();

	    var options = this.options['injectingLoader'] || {};
	    var injectionCondition = typeof options.condition === 'function' ? options.condition : defaults.condition;
	    var injectingDependency = options.injectingDependency || defaults.injectingDependency;
	    var dependencyPath = path.join(path.dirname(this.resource), injectingDependency);

	    if (injectionCondition.call(this) && fs.existsSync(dependencyPath)) {
	        this.addDependency(dependencyPath);
	        content = injectDependency(content, injectingDependency);
	    }
	    callback(null, content);
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_143__;

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_144__;

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(5);
	var defaults = {
	    enabled: false,
	    events: {
	        start: 'performance.start',
	        end: 'performance.end'
	    }
	};

	function transformAllAnnotations(source, params) {
	    var lines = source.split('\n');

	    lines = lines.map(function (line) {
	        if (line.indexOf('@performance:start') !== -1 || line.indexOf('@performance:end') !== -1) {
	            return transformAnnotation(line, params);
	        } else {
	            return line;
	        }
	    });

	    return lines.join('\n');
	}

	function transformAnnotation(annotation, params) {
	    var performanceParams = JSON.stringify(params);
	    var performance = 'require(\'base\').performance(' + performanceParams + ')';
	    var indent = annotation.split('//')[0];
	    var annotationParams = parseAnnotation(annotation);

	    return stringify(performance, annotationParams, indent);
	}

	function parseAnnotation(annotation) {
	    annotation = annotation.split('//')[1].trim().replace('@performance:', '');

	    var chunks = annotation.split(' ');
	    var message = chunks.shift();
	    var sender = chunks.shift();
	    var operation = chunks.shift();
	    var id = chunks.shift();
	    var tags = parseTags(chunks.join(' '));
	    var params = {
	        message: message,
	        operation: operation,
	        sender: sender,
	        tags: tags
	    };

	    if (id !== '-') {
	        params.id = id;
	    }

	    return params;
	}

	function stringify(performance, annotationParams, indent) {
	    var message = annotationParams.message;
	    var operation = annotationParams.operation;

	    annotationParams = JSON.stringify({
	        sender: annotationParams.sender,
	        id: annotationParams.id,
	        tags: annotationParams.tags
	    });

	    return '{indent}{performance}.{event}("{operation}", {params})'.replace('{indent}', indent).replace('{performance}', performance).replace('{event}', message).replace('{operation}', operation).replace('{params}', annotationParams);
	}

	function parseTags(tags) {
	    tags = tags.replace('[', '').replace(']', '').split(',').map(function (tag) {
	        return tag.trim();
	    });
	    return tags;
	}

	module.exports = function (source, map) {
	    var options = utils.defaults({}, this.options['performanceLoader'], defaults);

	    this.cacheable();

	    if (options.enabled) {
	        source = transformAllAnnotations(source, {
	            events: options.events
	        });
	    }

	    this.callback(null, source, map);
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Adapted from https://github.com/Raynos/function-bind
	 * Copyright 2013 Raynos.
	 * MIT license, see license.md for detail.
	 */

	(function () {
	  if (Function.prototype.bind) {
	    return;
	  }

	  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	  var slice = Array.prototype.slice;
	  var toStr = Object.prototype.toString;
	  var funcType = '[object Function]';

	  Function.prototype.bind = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	      throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var binder = function binder() {
	      if (this instanceof bound) {
	        var result = target.apply(this, args.concat(slice.call(arguments)));
	        if (Object(result) === result) {
	          return result;
	        }
	        return this;
	      } else {
	        return target.apply(that, args.concat(slice.call(arguments)));
	      }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	      boundArgs.push('$' + i);
	    }

	    var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	      var Empty = function Empty() {};
	      Empty.prototype = target.prototype;
	      bound.prototype = new Empty();
	      Empty.prototype = null;
	    }

	    return bound;
	  };
	})();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cli.js.map