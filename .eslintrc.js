module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['build/**/*', 'dist/**/*', '*.min.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'warn',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'prefer-spread': 'off',
  },
};