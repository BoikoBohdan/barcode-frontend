'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

const config = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  settings: {
    'import/resolver': {
      alias: [
        ['@/*  */', './src'],
        ['UI/*', '*/', './src/components/UI'],
      ],
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      WARN,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': OFF,
    'react/prop-types': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-expressions': [ERROR, { allowShortCircuit: true }],
    'class-methods-use-this': [
      ERROR,
      { exceptMethods: ['renderSlide', 'renderContent'] },
    ],
    'import/imports-first': ['error', 'absolute-first'],
    'space-infix-ops': ['error', { int32Hint: false }],
    complexity: ['error', { max: 30 }],
    'import/prefer-default-export': OFF,
    'import/newline-after-import': 'error',
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/alt-text': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    'jsx-a11y/no-autofocus': OFF,
    'jsx-a11y/mouse-events-have-key-events': OFF,
    'no-magic-numbers': ['warn', { ignore: [-WARN, OFF, WARN] }],
    'no-console': WARN,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'no-param-reassign': OFF,
    'no-duplicate-imports': ERROR,
    'prefer-object-spread': WARN,
    'no-await-in-loop': WARN,
    'no-debugger': WARN,
    'no-dupe-keys': WARN,
    'array-callback-return': WARN,
    'block-scoped-var': WARN,
    'no-else-return': WARN,
    'no-empty-function': WARN,
    'no-empty': WARN,
    'array-bracket-spacing': WARN,
    'import/no-unresolved': OFF,
    'import/no-cycle': OFF,
    'func-names': OFF,
    'no-restricted-syntax': OFF,
    'no-nested-ternary': OFF,
    'no-unneeded-ternary': OFF,
    'no-plusplus': OFF,
    'no-continue': OFF,
    'no-case-declarations': OFF,
    'max-lines-per-function': ['warn', 40],
    complexity: ['warn', 5],
  },
  overrides: [
    {
      files: ['*.test.js', '*.tests.js'],

      rules: {
        'no-unused-vars': OFF,
      },
    },
  ],
};

module.exports = config;
