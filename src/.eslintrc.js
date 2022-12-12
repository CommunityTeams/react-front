module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": 0,
  },
};
