/*----------------------------------------------------------------*/
/* Utilities
/*----------------------------------------------------------------*/
'use strict';
var path = require('path');
var Promise = require('promise');
var shell = require('shelljs');
var utils = require('lodash').noConflict();
var colors = require('colors/safe');
var deepMerge = require('deep-merge');
var fs = require('fs');
var JXON = require('jxon');
var _ = require('lodash');
var inquirer = require('inquirer');
var xml2js = require('xml2js');

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

exports.readFiles = function(inputFiles, postProcessingConfig) {
    var fs = require('fs-extra-promise');
    var postProcessing = _.extend({}, postProcessingDefaultConfig, postProcessingConfig);
    var inputFilesExtended = _.map(inputFiles, function(url, key) {
        var extension = url.replace(/.*\.(\w+)$/, '$1');
        return {
            url: url,
            key: key,
            extension: extension,
            post: postProcessing[extension]
        };
    });

    var promise = Promise.all(
        _.map(inputFilesExtended, function(info) {
            return fs.existsSync(info.url) && fs.statSync(info.url).isFile() && fs.readFileAsync(info.url);
        })
    ).then(function(files) {
        return _.reduce(files, function(memo, stream, index) {
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

exports.readDir = function(currDir) {
    var dirs = [];
    var isVisible = function(path) {
        return (/(^|.\/)\.+[^\/\.]/g).test(path) === false;
    };
    fs.readdirSync(currDir).map(function(file) {
        return path.join(currDir, file);
    }).filter(function(file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function(file) {
        dirs.push(file.slice(file.lastIndexOf(path.sep) + 1));
    });

    return dirs.filter(isVisible);
};

exports.deepMerge = deepMerge(function(target, source, key) {
    if (target instanceof Array) {
        return [].concat(target, source);
    }
    return source;
});

exports.bowerMainJs = function(main) {
    return (utils.isString(main)) ? main : utils(main).filter(function(f) {
        return /\.js$/.test(f);
    }).map(function(f) {
        return f;
    }).head();
};
exports.getStyleEntry = function(main) {
    return (utils.isString(main)) ? main : utils(main).filter(function(f) {
        return /\.(scss|css|less)$/.test(f);
    }).map(function(f) {
        return f;
    }).head();
};

exports.excludeDependenciesByName = function(excludes, filePath) {
    var excludesRegExp = new RegExp(
        '\\s*require\\([\'\"]{1}[\\.\\\/\\\\\\w]+(' + excludes.join('|') + ')[\\\/\\\\\\w]+[\'\"]\\)\\.name,?', 'ig');
    return fs.readFileSync(filePath).toString().replace(excludesRegExp, '');
};

exports.orderMain = function(main) {
    return (utils.isString(main)) ? main : utils.sortBy(main, function(f) {
        return /\.js$/.test(f) ? 1 : 0;
    });
};

exports.isUrl = function(str) {
    var re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(:\d{2,4})*\/?$/gi;
    return re.test(str);
};
/*----------------------------------------------------------------*/
/* Colors
/*----------------------------------------------------------------*/
exports.colors = function() {
    return colors;
};
/*----------------------------------------------------------------*/
/* Paths
/*----------------------------------------------------------------*/

exports.escape = function(pathStr) {
    return pathStr ? pathStr.replace(/[\[\]]/g, '\\$&') : pathStr;
};

exports.resolve = function() {
    return exports.escape(path.resolve.apply(path, Array.prototype.slice.call(arguments)));
};

exports.projectPath = function(p) {
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
    }
    /*----------------------------------------------------------------*/
    /* Display - Use a logging system
    /*----------------------------------------------------------------*/
exports.display = function(config) {
    var Logger = require('logdown');
    // Logger.disable('*');
    var inst;
    return (inst instanceof Logger) ? inst : inst = new Logger(config);
};
/*----------------------------------------------------------------*/
/* Shell
/*----------------------------------------------------------------*/
exports.shell = function(config) {
    // TODO config;
    shell.config = config;
    return shell;
};

exports.handleError = function(err) {
    exports.display().error(colors.error(err));
    throw new Error(err);
};

/*----------------------------------------------------------------*/
/* Read JSON from file
/*----------------------------------------------------------------*/
exports.getJsonFromFile = function(_path) {
    var config;
    _path = require('path').resolve(_path);
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
exports.prompt = function(questions) {
    return new Promise(function(resolve) {
        inquirer.prompt(questions, function(answers) {
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

exports.json2xml = function(input) {
    var builder = new xml2js.Builder();
    return builder.buildObject(input);
};

exports.xml2json = function(input, options) {
    options = _.defaults({
        explicitArray: true,
    }, options);
    var parser = new xml2js.Parser(options);
    return new Promise(function(resolve, reject) {
        parser.parseString(input, function(err, result) {
            if (err) {
                throw new Error(err);
            }
            resolve(result);
        })
    });
};


exports.banner = function(pkg, config) {
    var BANNER = '/* ${config.name}@v${config.version} build with ♥ by ${ pkg.name }@v${ pkg.version } */';

    return  utils.template(BANNER)({
        pkg: pkg,
        config: config || {},
        sys: {
            date: new Date()
        }
    });
}
/*----------------------------------------------------------------*/
/* log Object
/*----------------------------------------------------------------*/
exports.logObj = function(obj, type) {
    type = type || 'info';
    return colors[type](JSON.stringify(obj, null, 4));
};

exports.debug = function(params) {
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
exports.capitalizeFirstLetter = function(str) {
    str = utils.camelCase(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = utils.mixin(exports);
