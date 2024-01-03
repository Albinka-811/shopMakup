module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "indent": ["error", 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-unused-vars': 'warn',
    'prefer-promise-reject-errors': 'off',

    semi: [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    'no-var': 'error',
    'no-tabs': [ 'error' ],
    'no-trailing-spaces': 'error',
    'eol-last': [ 'error', 'always' ],
    'linebreak-style': [ 'error', 'unix' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'object-curly-newline': [ 'error', { consistent: true } ],
    'space-unary-ops': 'error',
    'space-before-function-paren': 'error',
    'space-infix-ops': [ 'error', { int32Hint: false } ],
    'key-spacing': [ 'error', { afterColon: true } ],
    'keyword-spacing': 'error',
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
    'brace-style': 'error',
    'array-element-newline': [ 'error', 'consistent' ],
    'comma-spacing': [
      'error', {
        before: false,
        after: true
      }
    ],
    'no-extra-semi': 'error',
    'semi-spacing': [
      'error', {
        before: false,
        after: true
      }
    ],
    'no-mixed-operators': [ 'error' ],
    'object-curly-spacing': [ 'error', 'always', { objectsInObjects: true } ],
    'array-bracket-spacing': [ 'error', 'always', { singleValue: true } ],
    'newline-before-return': 'error',
    'default-case-last': 'off',
    'no-unused-expressions': 'error'
  }
};
