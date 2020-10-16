module.exports = {
  extends: ['airbnb-base'],
  ignorePatterns: ['node_modules/**/*', 'dist', 'build', 'android', 'ios'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': 'off',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-curly-newline': ['error', { consistent: true }],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
  },
}
