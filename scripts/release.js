'use strict'
var fs = require('fs')
var path = require('path')
var pJsonPath = path.resolve(__dirname, '../package.json')
var pJson = require(pJsonPath)
var semver = require('semver')

/**
 * Increase the next version value
 * @param  {String} inc  patch, minor, major
 * @param  {String} suffix Alpha/Beta suffix
 * @return {string} Next version
 */
exports.getNextVersion = function (inc, suffix) {
    if(typeof inc !== 'string') {
        throw new Error('Please set a proper incremental value! EX: patch, minor, major etc. ')
    }
    inc = inc || 'prerelease'
    suffix = suffix || ''
    return semver.inc(pJson.version, inc, suffix)
}

/**
 * Bump the version in the package.json
 * @param  {String} version Valid semver release
 * @return {undefined}
 */
exports.bump = function (version) {
    // clean it
    version = version.trim();
    // Validate version
    if(! semver.valid(version)) {
        throw new Error('Invalid version value:' + version)
    }
    pJson.version = version
    var s = JSON.stringify(pJson, null, 2)
    fs.writeFileSync(pJsonPath, s, 'utf8');
}

