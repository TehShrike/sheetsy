const entries = require('ordered-entries')

const baseArray = (unnamedInput, namedMap) => {
	return unnamedInput || entries(namedMap).map(([ , value ]) => value)
}
const rowArray = (named, unnamed) => {
	const output = baseArray(unnamed, named)
	entries(named).forEach(([ key, value ]) => {
		output[key] = value
	})
	return output
}

module.exports = [
	{
		name: '2011',
		url: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html',
		key: '0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE',
		sheetsList: [
			{ name: 'Sheet1', id: 'od6' }
		],
		sheets: {
			od6: [
				rowArray({ name: 'Carrot', category: 'Vegetable', healthiness: 'Adequate' }),
				rowArray({ name: 'Pork Shoulder', category: 'Meat', healthiness: 'Questionable' }),
				rowArray({ name: 'Bubblegum', category: 'Candy', healthiness: 'Super High' }),
			],
		}
	}, {
		name: '2014',
		url: 'https://docs.google.com/spreadsheets/d/1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU/pubhtml',
		key: '1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU',
		sheetsList: [
			{ name: 'Sheet1', id: 'od6' }
		],
		sheets: {
			od6: [
				rowArray({ c: '3', d: '4' }),
				rowArray({ c: '5', d: '6' }),
			],
		}
	}, {
		name: '2016',
		url: 'https://docs.google.com/spreadsheets/d/1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc/pubhtml',
		key: '1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc',
		sheetsList: [
			{ name: 'books', id: 'od6' }
		],
		sheets: {
			od6: [
				rowArray({
					title: `The Left Hand of Darkness`,
					author: `Ursula K. Le Guin`,
					goodreadsrating: `4.05`,
				}),
				rowArray({
					title: `Kindred`,
					author: `Octavia Butler`,
					goodreadsrating: `4.16`,
				}),
				rowArray({
					title: `The Handmaid's Tale`,
					author: `Margaret Atwood`,
					goodreadsrating: `4.01`,
				}),
				rowArray({
					title: `A Swiftly Tilting Planet`,
					author: `Madeleine L'Engle`,
					goodreadsrating: `4.12`,
				}),
			],
		}
	}, {
		name: 'My sheetsy example',
		url: 'https://docs.google.com/spreadsheets/d/14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs/pubhtml',
		key: '14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs',
		sheetsList: [
			{ name: 'Herp', id: 'od6' },
			{ name: 'Derp', id: 'of6b9b5' }
		],
		sheets: {
			od6: [
				rowArray({
					firstheader: `Something's up`,
					secondheader: `That's "cool"`,
				}),
				rowArray({
					firstheader: 'a3',
					secondheader: 'b3',
				}, [ 'a3', 'b3', 'c3' ])
			],
			of6b9b5: [
				rowArray({
					firstcolumninsecondsheet: `What's even going on here`,
					secondcolumn: ``
				})
			]
		}
	},
]
