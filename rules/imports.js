module.exports = {
  plugins: ['unused-imports', 'replace-relative-imports'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'padding-line-between-statements': ['error', { blankLine: 'never', prev: 'import', next: 'import' }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
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
        'newlines-between': 'never',
      },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'replace-relative-imports/replace': [
      'error',
      {
        aliases: [
          { name: 'helpers', path: './src/helpers' },
          { name: 'typings', path: './src/typings' },
          { name: 'lookups', path: './src/lookups' },
          { name: 'components', path: './src/components' },
          { name: 'hooks', path: './src/hooks' },
          { name: 'pages', path: './src/pages' },
          { name: 'plugins', path: './src/plugins' },
        ],
      },
    ],
  },
}
