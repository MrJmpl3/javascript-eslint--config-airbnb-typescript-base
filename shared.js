/* eslint-disable import/extensions */
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

import bestPracticesRules from './rules/bestPractices.js';
import errorsRules from './rules/errors.js';
import es6Rules from './rules/es6.js';
import importRules from './rules/import.js';
import strictRules from './rules/strict.js';
import styleRules from './rules/style.js';
import variablesRules from './rules/variables.js';

export default tseslint.config(
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      perfectionist.configs['recommended-alphabetical'],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2015,
      },
      parserOptions: {
        ecmaFeatures: {
          generators: false,
          jsx: true,
          objectLiteralDuplicateProperties: false,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    settings: {
      'import/core-modules': [],
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/ignore': [
        'node_modules',
        '\\.(coffee|scss|css|less|hbs|svg|json)$',
      ],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  bestPracticesRules,
  errorsRules,
  es6Rules,
  importRules,
  strictRules,
  styleRules,
  variablesRules,
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
      // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
      // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      'constructor-super': 'off',
      'getter-return': 'off',
      // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
      // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      // Disable `import/no-unresolved`, see README.md for details
      'import/no-unresolved': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-native-nonconstructor': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'valid-typeof': 'off',
    },
  },
);
