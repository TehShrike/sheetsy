module.exports = {
	buildIndexUrl: key => `https://spreadsheets.google.com/feeds/worksheets/${key}/public/basic?alt=json`,
	buildSheetUrl: (key, sheetId) => `https://spreadsheets.google.com/feeds/list/${key}/${sheetId}/public/values?alt=json`,
}
