
'use strict';
/**
 *  ----------------------------------------------------------------
 *  Copyright © Backbase B.V.
 *  ----------------------------------------------------------------
 *  Author : Backbase R&D - Amsterdam - New York
 *  Filename : eslint.conf.js
 *  Description: ES lint configuration file
 *  http://eslint.org/docs/
 *  ----------------------------------------------------------------
 */

module.exports = {

    rulesPaths: [
        './eslint-rules'
    ],

    rules: {
        'quotes': [2, 'single'],
        'no-unused-vars': [2, {'vars': 'local', 'args': 'none'}],
        'no-debugger': [1],
        'dot-notation': [0]
    },
    globals: {

    },

    envs: {
        browser: true,
        amd: true,
        node: true,
        jasmine: true
    }
};
