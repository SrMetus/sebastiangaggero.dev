import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/**', '.astro/**']),
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.astro'],
    extends: [tseslint.configs.recommended],
  },
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
]);
