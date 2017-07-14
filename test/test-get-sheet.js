const tape = require('tape')
const { getSheet } = require('../index.js')
const testCases = require('./cases.js')
const parseUrl = url => {
	const [ , key, id ] = url.match(/list\/([^\/]+)\/([^\/]+)\/public/)
	return { key, id }
}

const testGet = url => {
	const { key, id } = parseUrl(url)
	return Promise.resolve(require(`./fixture/${key}-sheet-${id}.json`))
}

testCases.forEach(testCase => {
	testCase.sheetsList.forEach(sheet => {
		tape(`getting sheet - ${testCase.name} - ${sheet.name}`, t => {
			console.log('sheet id', sheet.id)
			getSheet(testCase.key, sheet.id, testGet).then(actualOutput => {
				const expectedOutput = testCase.sheets[sheet.id]
				t.deepEqual(actualOutput, expectedOutput)
				t.end()
			}).catch(err => {
				t.error(err)
				t.end()
			})
		})
	})
})
