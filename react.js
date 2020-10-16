module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: false,
        shorthandFirst: true,
        reservedFirst: true,
        callbacksLast: true,
      },
    ],
  },
}
