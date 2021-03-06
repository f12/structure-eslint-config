module.exports = {
  'env': {
    'node': true,
    'es6': true,
    'mocha': true
  },
  'globals': {
    'expect': false,
    'sinon': false
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': 'eslint:recommended',
  'rules': {
    // Possible Errors
    'no-negated-in-lhs': 2,
    // Best Practices
    'block-scoped-var': 2,
    'default-case': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'no-console': 0,
    'no-alert': 2,
    'no-caller': 2,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-floating-decimal': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-unused-vars': [2, {
      "args": "none"
    }],
    'no-void': 0,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': 2,
    // Strict Mode
    'strict': [2, 'global'],
    // Variables
    'no-catch-shadow': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': 2,
    // Stylistic Issues
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'brace-style': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    "curly": 2,
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-multiple-empty-lines': [2, { "max": 1}],
    'operator-assignment': [2, 'always'],
    'quote-props': [2, 'consistent'],
    'semi': [2, 'never'],
    'space-before-blocks': 2,
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'template-curly-spacing': [2, 'never']
  }
}
