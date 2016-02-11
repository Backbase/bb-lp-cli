/**
 * @todo
 * - combine all html/md into one static site, using a backbase template style.
 */
var utils = require('../../utils');
var config = require('../../config');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var runSeq = require('run-sequence').use(gulp);
var g = require('gulp-load-plugins')();
var display = utils.display();
var gutil = require('gulp-util');
var through = require('through2');
var raml2md = require('raml2md');
var raml2html = require('raml2html');
var outputHtmlPath = utils.resolve(config.paths.docs);

/**
 * @todo fix them
 * impurities :)
 */
var params = {};
var simplifyMark = function(mark) {
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

    var stream = through.obj(function(file, enc, done) {
        var fail = function(message) {
            done(new gutil.PluginError('raml2html', message));
        };
        if (file.isBuffer()) {
            var cwd = process.cwd();
            process.chdir(path.resolve(path.dirname(file.path)));
            raml2html.render(file.contents, options.config).then(
                function(output) {
                    process.chdir(cwd);
                    stream.push(new gutil.File({
                        base: file.base,
                        cwd: file.cwd,
                        path: gutil.replaceExtension(file.path, options.extension || '.' + options.type),
                        contents: new Buffer(output)
                    }));
                    done();
                },
                function(error) {
                    process.chdir(cwd);
                    simplifyMark(error.context_mark);
                    simplifyMark(error.problem_mark);
                    process.nextTick(function() {
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

    var stream = through.obj(function(file, enc, done) {
        var fail = function(message) {
            done(new gutil.PluginError('raml2md', message));
        };
        if (file.isBuffer()) {
            var cwd = process.cwd();
            process.chdir(path.resolve(path.dirname(file.path)));
            raml2md.render(file.contents, options.config).then(
                function(output) {
                    process.chdir(cwd);
                    stream.push(new gutil.File({
                        base: file.base,
                        cwd: file.cwd,
                        path: gutil.replaceExtension(file.path, options.extension || '.' + options.type),
                        contents: new Buffer(output)
                    }));
                    done();
                },
                function(error) {
                    process.chdir(cwd);
                    simplifyMark(error.context_mark);
                    simplifyMark(error.problem_mark);
                    process.nextTick(function() {
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
    var domain = params.services !== 'true' ? params.services : '' ;
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
gulp.task('docs:services:clean', function() {
    var paths = [
        outputHtmlPath
    ];
    return del.sync(paths);
});
/**
 * Generate HTML files
 */
gulp.task('docs:services:html', function() {
    display.info('Start generating HTML documentation.');
    var src = config.data.files.concat([
        // ignore this ones
        '!**/node_modules/**/*.raml',
        '!**/bower_components/**/*.raml',
        '!**/docs/**/*.raml'
    ]);

    return gulp.src(src)
        .pipe(replaceBaseUrl())
        .pipe(gulpRAML2HTML())
        .on('error', logErrorAndQuit)
        .pipe(g.rename(function(f) {
            f.basename = 'index';
            f.path = path.join(config.paths.docs, f.dirname, f.basename + f.extname);
            var info = utils.template('Generate HTML: ${path.green}')(f);
            display.info(info);
        }))
        .on('end', function() {
            display.info('Done generating HTML documentation!');
        })
        .pipe(gulp.dest(outputHtmlPath))
});
/**
 * Generate markdown README's
 */
gulp.task('docs:services:md', function() {
    display.info('Start generating MarkDown documentation.');
    var src = config.data.files.concat([
        // ignore this ones
        '!**/node_modules/**/*.raml',
        '!**/bower_components/**/*.raml',
        '!**/docs/**/*.raml'
    ]);

    return gulp.src(src)
        .pipe(replaceBaseUrl())
        .pipe(gulpRAML2MD())
        .on('error', logErrorAndQuit)
        .pipe(g.rename(function(f) {
            f.basename = 'README';
            f.path = path.join(config.paths.docs, f.dirname, f.basename + f.extname);
            var info = utils.template('Generate MarkDown: ${path.green}')(f);
            display.info(info);
        }))
        .on('end', function() {
            display.info('Done generating MarkDown documentation!');
        })
        .pipe(gulp.dest(outputHtmlPath))
});

/**
* ------------------------------------------------------------------------
* Public
* ------------------------------------------------------------------------
*/
exports.generate = function(args) {
    params = utils.assign(args, {});
    return new Promise(function(resolve, reject) {
        return runSeq([
            'docs:services:clean',
            'docs:services:html',
            'docs:services:md'
        ], function(err, done) {
            if (err) {
                reject(err);
            } else {
                resolve(done);
            }
        });
    });
};
