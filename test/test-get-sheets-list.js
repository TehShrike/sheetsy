const tape = require('tape')
const { getSheetsList } = require('../index.js')
const testCases = require('./cases.js')
const getKeyFromUrl = url => url.match(/worksheets\/([^\/]+)\/public/)[1]

const testGet = url => Promise.resolve(require(`./fixture-${getKeyFromUrl(url)}.json`))

testCases.forEach(testCase => {
	tape(`getting sheets - ${testCase.name}`, t => {
		getSheetsList(testCase.key, testGet).then(actualOutput => {
			const expectedOutput = testCase.sheetsList
			t.deepEqual(actualOutput, expectedOutput)
			t.end()
		}).catch(err => {
			t.error(err)
			t.end()
		})
	})
})
