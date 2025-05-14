module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Use Prettier plugin
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [ 'prettier'], // Add Prettier plugin
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    'prettier/prettier': [
      'error',
      {
        semi: false, // Disable semicolons
      },
    ],
  },
}
