/* eslint-disable import/extensions,import/no-extraneous-dependencies */
import eslintConfigPrettier from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';

import withoutTsTypeChecking from './without-ts-type-checking.js';

export default tseslint.config(
  {
    ignores: ['/node_modules/**', '/.pnpm-store/**'],
  },
  { extends: [withoutTsTypeChecking] },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { extends: [eslintConfigPrettier] },
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
);
