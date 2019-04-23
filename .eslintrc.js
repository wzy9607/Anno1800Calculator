module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/html-self-closing": "off",
    "vue/html-indent": "off",
    "vue/array-bracket-spacing": "warning",
    "vue/arrow-spacing": "warning",
    "vue/block-spacing": "warning",
    "vue/brace-style": "warning",
    "vue/camelcase": "warning",
    "vue/comma-dangle": "warning",
    "vue/component-name-in-template-casing": "warning",
    "vue/eqeqeq": "warning",
    "vue/key-spacing": "warning",
    "vue/match-component-file-name": "warning",
    "vue/no-boolean-default": "warning",
    "vue/no-restricted-syntax": "warning"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
