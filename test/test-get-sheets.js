const tape = require('tape')
const { getSheets } = require('../index.js')
const testCases = require('./cases.js')

const testGet = key => Promise.resolve(require(`./fixture-${key}.json`))

testCases.forEach(testCase => {
	tape(`getting sheets - ${testCase.name}`, t => {
		getSheets(testCase.key, testGet).then(actualOutput => {
			const expectedOutput = testCase.sheets
			t.deepEqual(actualOutput, expectedOutput)
			t.end()
		}).catch(err => {
			t.error(err)
			t.end()
		})
	})
})
