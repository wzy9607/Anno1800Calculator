module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
