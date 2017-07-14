const httpGet = require('./get.js')
const buildIndexUrl = key => `https://spreadsheets.google.com/feeds/worksheets/${key}/public/basic?alt=json`
const buildTableUrl = (key, sheetId) => `https://spreadsheets.google.com/feeds/list/${key}/${sheetId}/public/values?alt=json`
const fs = require('fs')

const testCases = require('./test/cases.js')

function outputSheet(key, sheetId) {
	httpGet(buildTableUrl(key, sheetId)).then(body => {
		const json = JSON.stringify(body, null, '\t')
		fs.writeFileSync(`test/fixture-${key}-sheet-${sheetId}.json`, json)
	})
}

function outputIndex(key) {
	httpGet(buildIndexUrl(key)).then(body => {
		const json = JSON.stringify(body, null, '\t')
		fs.writeFileSync(`test/fixture-${key}.json`, json)
	})
}

testCases.forEach(testCase => {
	outputIndex(testCase.key)
	testCase.sheets.forEach(sheet => {
		outputSheet(testCase.key, sheet.id)
	})
})
