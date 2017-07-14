const parse = require('../url-parser')
const tape = require('tape')

const testCases = require('./cases.js')

testCases.forEach(testCase => {
	tape(`URL parser: ${testCase.name}`, t => {
		const actualKey = parse(testCase.url)
		t.equal(actualKey, testCase.key, 'Output matches')
		t.end()
	})
})

tape(`Throws on invalid input`, t => {
	t.throws(() => parse('nothin'), /No key found/)
	t.end()
})
