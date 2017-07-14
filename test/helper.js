const httpGet = require('../get.js')
const { buildIndexUrl, buildSheetUrl } = require('../url-builder')
const fs = require('fs')

const testCases = require('./cases.js')

function outputSheet(key, sheetId) {
	httpGet(buildSheetUrl(key, sheetId)).then(body => {
		const json = JSON.stringify(body, null, '\t')
		fs.writeFileSync(`./fixture-${key}-sheet-${sheetId}.json`, json)
	})
}

function outputIndex(key) {
	httpGet(buildIndexUrl(key)).then(body => {
		const json = JSON.stringify(body, null, '\t')
		fs.writeFileSync(`./fixture-${key}.json`, json)
	})
}

testCases.forEach(testCase => {
	outputIndex(testCase.key)
	testCase.sheetsList.forEach(sheet => {
		outputSheet(testCase.key, sheet.id)
	})
})
