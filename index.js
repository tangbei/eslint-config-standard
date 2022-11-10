module.exports = {
  extends: [
    '@tangbei/eslint-config-standard-base',
    './rules/react.js',
    './rules/react-jsx-a11y.js',
  ].map(require.resolve),
  // 解析器
  parser: '@typescript-eslint/parser',
  rules: {
    'no-async-promise-executor': 'off',
  },
};
