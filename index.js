/*
 * Copyright (c) 2021.
 *
 * File created to GLEN SOFT company.
 */

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    require.resolve('./shared'),
  ],
  rules: {
    // encourages use of dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // disallow use of eval()-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': ['error'],

    // restrict what can be thrown as an exception
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
  },
};
