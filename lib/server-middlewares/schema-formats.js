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
