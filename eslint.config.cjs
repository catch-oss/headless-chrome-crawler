const js = require('@eslint/js');

const baseGlobals = {
  window: 'readonly',
  document: 'readonly',
  console: 'readonly',
  module: 'readonly',
  require: 'readonly',
  process: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  Buffer: 'readonly',
  URL: 'readonly',
  URLSearchParams: 'readonly',
  navigator: 'readonly',
  XMLHttpRequest: 'readonly',
  fetch: 'readonly',
  $: 'readonly',
};

const jestGlobals = {
  afterAll: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  beforeEach: 'readonly',
  describe: 'readonly',
  expect: 'readonly',
  it: 'readonly',
  jest: 'readonly',
  test: 'readonly',
};

module.exports = [
  {
    ignores: ['.yarn/**', 'tmp/**', '.pnp.*'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
      globals: baseGlobals,
    },
    rules: {
      'arrow-parens': ['warn', 'as-needed'],
      'class-methods-use-this': 'off',
      'func-names': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-void': 'off',
      'no-param-reassign': 'off',
      'no-bitwise': 'off',
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true, caughtErrors: 'none' }],
    },
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: { ...baseGlobals, ...jestGlobals },
    },
  },
  {
    files: ['examples/**/*.js'],
    languageOptions: {
      globals: baseGlobals,
    },
  },
  {
    files: ['lib/**/*.js'],
    languageOptions: {
      globals: { ...baseGlobals },
    },
  },
];
