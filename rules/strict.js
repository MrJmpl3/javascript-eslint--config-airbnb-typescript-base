import * as tseslint from 'typescript-eslint';

export default tseslint.config({
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
});
