module.exports = {
  overrides: [
    {
      files: ['src/generated/**'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
