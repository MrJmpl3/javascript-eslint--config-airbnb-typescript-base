/* eslint-disable import/extensions */
import * as tseslint from 'typescript-eslint';

import shared from './shared.js';

export default tseslint.config({
  extends: [tseslint.configs.recommended, tseslint.configs.stylistic, shared],
});
