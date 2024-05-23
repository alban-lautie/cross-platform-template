const eslint = require('@repo/eslint');
const eslintNext = require('@next/eslint-plugin-next');

module.exports = [
  ...eslint,
  {
    ignores: ['next.config.js', '.next'],
  },
  {
    plugins: { eslintNext },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
