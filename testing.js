module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:cypress/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
    'jest/expect-expect': 'off',
  },
}
