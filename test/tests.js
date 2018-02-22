const tape = require(`tape`)
const { urlToKey, getSheet, getWorkbook } = require(`../`)

const testCases = require(`./cases.js`)

module.exports = getFunction => {
	tape(`URL parser`, t => {
		testCases.forEach(testCase => {
			t.test(testCase.name, t => {
				const actualKey = urlToKey(testCase.url)
				t.equal(actualKey, testCase.key, `Output matches`)
				t.end()
			})
		})

		t.test(`Throws on invalid input`, t => {
			t.throws(() => urlToKey(`nothin`), /No key found/)
			t.end()
		})
	})

	tape(`getWorkbook`, t => {
		testCases.forEach(testCase => {
			t.test(testCase.name, t => {
				getWorkbook(testCase.key, getFunction).then(actualOutput => {
					const expectedOutput = testCase.workbook
					t.deepEqual(actualOutput, expectedOutput)
					t.end()
				}).catch(err => {
					t.error(err)
					t.end()
				})
			})
		})
	})

	tape(`getSheet`, t => {
		testCases.forEach(testCase => {
			testCase.workbook.sheets.forEach(sheet => {
				t.test(`${ testCase.name } - ${ sheet.name }`, t => {
					getSheet(testCase.key, sheet.id, getFunction).then(actualOutput => {
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
	})
}
