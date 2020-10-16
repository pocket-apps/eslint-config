module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/jsx-sort-props': [
      'error', {
        noSortAlphabetically: false,
        shorthandFirst: true,
        reservedFirst: true,
        callbacksLast: true,
      },
    ],
  },
};
