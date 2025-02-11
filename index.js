/* eslint-disable import/extensions */
import * as tseslint from 'typescript-eslint';

import shared from './shared.js';

export default tseslint.config(
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      shared,
    ],
  },
  {
    rules: {
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
      '@typescript-eslint/no-implied-eval': ['error'],
      '@typescript-eslint/no-throw-literal': ['error'],
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    },
  },
);
