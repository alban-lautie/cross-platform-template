const eslint = require('@repo/eslint');

module.exports = [
  ...eslint,
  {
    ignores: ['.storybook'],
  },
];
