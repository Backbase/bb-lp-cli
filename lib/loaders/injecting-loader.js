var fs = require('fs');
var path = require('path');
var esprima = require('esprima');
var escodegen = require('escodegen');
var util = require('util');

var defaults = {
    injectingDependency: '',
    condition: function() { return true; }
};

function isASTCallExpr(node) {
    return node && node.expression
        && node.expression.type === 'CallExpression';
}

function isASTFuncExpr(node) {
    return node && node.type === 'FunctionExpression';
}

function injectDependency(sourceCode, dependency) {
    var sourceAST = esprima.parse(sourceCode);

    // extracting destination module due to following code structure:
    // define(function(...) { // module body });
    var module = (function getModuleBody() {
        var ASTNodes = sourceAST.body;
        var body = null;
        for (var i = 0, len = ASTNodes.length; i < len; i++) {
            if (isASTCallExpr(ASTNodes[i]) && isASTFuncExpr(ASTNodes[i].expression.arguments[0])) {
                body = ASTNodes[i].expression.arguments[0].body;
                break;
            }
        }
        return body;
    })();

    if (module && module.body) {
        module.body.unshift(esprima.parse('require("' + dependency + '");'));
        sourceCode = escodegen.generate(sourceAST);
    }

    return sourceCode;
}

module.exports = function(content) {
    this.cacheable();
    var callback = this.async();

    var options = this.options['injectingLoader'] || {};
    var injectionCondition = typeof options.condition === 'function'
        ? options.condition
        : defaults.condition;
    var injectingDependency = options.injectingDependency || defaults.injectingDependency;
    var dependencyPath = path.join(path.dirname(this.resource), injectingDependency);

    if (injectionCondition.call(this) && fs.existsSync(dependencyPath)) {
        this.addDependency(dependencyPath);
        content = injectDependency(content, injectingDependency);
    }
    callback(null, content);
};
