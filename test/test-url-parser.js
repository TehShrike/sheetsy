const parse = require('../url-parser')
const tape = require('tape')

const testCases = [
	{
		name: '2011',
		url: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html',
		output: { key: '0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE' }
	}, {
		name: '2014',
		url: 'https://docs.google.com/spreadsheets/d/1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU/pubhtml',
		output: { key: '1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU' }
	}, {
		name: '2016',
		url: 'https://docs.google.com/spreadsheets/d/1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc/pubhtml',
		output: { key: '1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc' }
	}, {
		name: 'My sheetsy example',
		url: 'https://docs.google.com/spreadsheets/d/14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs/pubhtml',
		output: { key: '14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs' }
	},
]

testCases.forEach(testCase => {
	tape(`URL parser: ${testCase.name}`, t => {
		const actualOutput = parse(testCase.url)
		t.deepEqual(actualOutput, testCase.output, 'Output matches')
		t.end()
	})
})

tape(`Throws on invalid input`, t => {
	t.throws(() => parse('nothin'), /No key found/)
	t.end()
})
