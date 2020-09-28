module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['unused-imports', 'replace-relative-imports'],
  ignorePatterns: ['node_modules/**/*', 'dist', 'build', 'android', 'ios'],
  rules: {
    // Basics
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    // Typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // React
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    // Imports
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', {
      pathGroups: [
        { pattern: 'react', group: 'builtin' },
        { pattern: 'helpers', group: 'external', position: 'after' },
        { pattern: 'typings', group: 'external', position: 'after' },
        { pattern: 'lookups', group: 'external', position: 'after' },
        { pattern: 'components', group: 'external', position: 'after' },
        { pattern: 'hooks', group: 'external', position: 'after' },
        { pattern: 'pages', group: 'external', position: 'after' },
        { pattern: 'plugins', group: 'external', position: 'after' },
      ],
    }],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'replace-relative-imports/replace': ['error', {
      aliases: [
        { name: 'helpers', path: './src/helpers' },
        { name: 'typings', path: './src/typings' },
        { name: 'lookups', path: './src/lookups' },
        { name: 'components', path: './src/components' },
        { name: 'hooks', path: './src/hooks' },
        { name: 'pages', path: './src/pages' },
        { name: 'plugins', path: './src/plugins' },
      ],
    }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
