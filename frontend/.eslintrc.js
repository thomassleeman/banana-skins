module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },

  env: {
    es6: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },

  extends: ['plugin:react-hooks/recommended'],
};
