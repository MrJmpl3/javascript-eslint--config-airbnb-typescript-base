const { resolve } = require('path');

module.exports = {
  root: true,
  parserOptions: {
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  extends: [require.resolve('./without-ts-type-checking'), 'prettier'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
