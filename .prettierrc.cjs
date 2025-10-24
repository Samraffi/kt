module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  importOrder: [
    "^@/.*(?<!\\.(c|le|sc)ss)$",
    "\\.\\.\\/\\.\\.\\/.*(?<!\\.(c|le|sc)ss)$",
    "\\.\\.\\/|\\.\\/.*(?<!\\.(c|le|sc)ss)$",
    "^\\.\\.$",
    "\\.(c|le|sc)ss$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
