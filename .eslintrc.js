module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/no-multiple-template-root": ["warn"],
    "no-undef": ["warn"],
    "no-empty": ["warn"],
    "no-unused-vars": ["warn"],
  },
  plugins: ["vue"],
  extends: ["eslint:recommended", "plugin:vue/essential"],
};
