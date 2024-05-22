const eslint = require('@repo/eslint');

module.exports = [
  ...eslint,
  {
    ignores: ['babel.config.js', 'metro.config.js'],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
