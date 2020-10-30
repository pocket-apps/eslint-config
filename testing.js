module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
  },
}
