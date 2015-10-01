var jjv = require('jjv'),
    _ = require('lodash');

var generatorsCache = {};

/**
 * creates an environment
 * @param {Object} [file] - if exists and has a name param, will be added to environment by its name value
 */
module.exports = function (file) {
    var env = jjv();

    if (file && file.name) {
        addSchema(file.name, file);
    }

    return {
        is: isValid,
        add: addSchema,
        generate: generateValidator,
        find: find
    };

    /**
    * addSchema - add json schema by current name
     * @param {String} url, which will be enabled in environment
     * @param {Object} jsonData
     */
    function addSchema(url, jsonData) {
        env.addSchema(url, jsonData);
    }

    /**
     * addSchema - add json schema by current name
     * @param {String} url, which will be enabled in environment
     * @param {Object} jsonData
     * @return {Boolean} valid - does this object valid for this schema
     */
    function isValid(url, jsonData) {
        var invalid = env.validate(url, jsonData);

        return !invalid;
    }

    /**
     * generateValidator - generates function, which takes one argument data object and returns isValidl; once generated, function will be taken from local cache
     * @param {String} url - environment url
     * @param {Boolean} isReverse - if we need reverse value for isValid
     * @returns {Function}
     */
    function generateValidator(url, isReverse) {
        var generatedKey = (isReverse ? '!' : '') + url;
        return generatorsCache[generatedKey] = generatorsCache[generatedKey] || (isReverse ? function (jsonData) {
            return !isValid(url, jsonData);
        } : function (jsonData) {
            return isValid(url, jsonData);
        });
    }

    /**
    * @description find returns first valid type from type params, little factory util
    * @param {Object/Array} types - { schemaReference : Object }
    * @param {Object} jsonData
    * @param {Boolean} silent
    * @returns Object
    */
    function find(types, jsonData, silent) {
        var resultType,
            found = false;

        _.each(types, function (type, reference) {
            if (isValid(reference, jsonData)) {
                resultType = type;
                found = true;
                return false;
            }
        });

        if (!found && !silent) {
            throw new Error('Schema not found');
        }

        return resultType;
    }
};