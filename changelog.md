# 2.1.3

- Documentation: update instructions for getting the spreadsheet URL.  [commit](https://github.com/TehShrike/sheetsy/commit/d9051f94bcc0f0b1ae5d98c3a78c90dba061b042)

# 2.1.2

- Documentation: attempt to clarify how rows work.  [commit](https://github.com/TehShrike/sheetsy/commit/79fc4cbef3d25baa0a4a152c29573dc5a5064e17)
- Refactor: use `basic-xhr` instead of a custom function.  [commit](https://github.com/TehShrike/sheetsy/commit/2243d32004cdaf638ea9445e527f249108f95493)

# 2.1.1

- Documentation: clarify how the http getting function works.  [commit](https://github.com/TehShrike/sheetsy/commit/539465f4181dbe9b3056b7282452546563f90563)

# 2.1.0

- Documentation: note the `name` property in the workbook results
- Feature: add `name` to sheet results

# 2.0.0

- Breaking: `getSheetList` renamed to `getWorkbook`. `getWorkbook` and `getSheet` now return an object with metadata about the workbook/sheet, instead of each just returning an array. [#1](https://github.com/TehShrike/sheetsy/pull/1)

