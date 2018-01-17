const entries = require(`ordered-entries`)

const baseArray = (unnamedInput, namedMap) => unnamedInput || entries(namedMap).map(([ , value ]) => value)
const rowArray = (named, unnamed) => {
	const output = baseArray(unnamed, named)
	entries(named).forEach(([ key, value ]) => {
		output[key] = value
	})
	return output
}

module.exports = [
	{
		name: `2011`,
		url: `https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html`,
		key: `0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE`,
		workbook: {
			name: `Foods for Tabletop sample`,
			authors: [
				{
					name: `jonathan.soma`,
					email: `jonathan.soma@gmail.com`,
				},
			],
			updated: `2015-04-07T04:45:51.207Z`,
			sheets: [
				{ name: `Sheet1`, id: `od6`, updated: `2015-04-07T04:45:51.207Z` },
			],
		},
		sheets: {
			od6: {
				name: `Sheet1`,
				updated: `2015-04-07T04:45:51.207Z`,
				authors: [
					{
						name: `jonathan.soma`,
						email: `jonathan.soma@gmail.com`,
					},
				],
				rows: [
					rowArray({ name: `Carrot`, category: `Vegetable`, healthiness: `Adequate` }),
					rowArray({ name: `Pork Shoulder`, category: `Meat`, healthiness: `Questionable` }),
					rowArray({ name: `Bubblegum`, category: `Candy`, healthiness: `Super High` }),
				],
			},
		},
	}, {
		name: `2014`,
		url: `https://docs.google.com/spreadsheets/d/1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU/pubhtml`,
		key: `1Vmj7tj64bz1cFRnbCJCAAXufonxIVOKqhZDTfPOvFTU`,
		workbook: {
			name: `new-doc-new-gdrive`,
			authors: [
				{
					name: `daguar`,
					email: `daguar@gmail.com`,
				},
			],
			updated: `2014-02-17T21:44:15.142Z`,
			sheets: [
				{ name: `Sheet1`, id: `od6`, updated: `2014-02-17T21:44:15.142Z` },
			],
		},
		sheets: {
			od6: {
				name: `Sheet1`,
				updated: `2014-02-17T21:44:15.142Z`,
				authors: [
					{
						name: `daguar`,
						email: `daguar@gmail.com`,
					},
				],
				rows: [
					rowArray({ c: `3`, d: `4` }),
					rowArray({ c: `5`, d: `6` }),
				],
			},
		},
	}, {
		name: `2016`,
		url: `https://docs.google.com/spreadsheets/d/1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc/pubhtml`,
		key: `1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc`,
		workbook: {
			name: `Some books`,
			authors: [
				{
					name: `jonathan.soma`,
					email: `jonathan.soma@gmail.com`,
				},
			],
			updated: `2017-09-07T20:06:40.466Z`,
			sheets: [
				{ name: `books`, id: `od6`, updated: `2017-09-07T20:06:40.466Z` },
			],
		},
		sheets: {
			od6: {
				name: `books`,
				authors: [
					{
						name: `jonathan.soma`,
						email: `jonathan.soma@gmail.com`,
					},
				],
				updated: `2017-09-07T20:06:40.466Z`,
				rows: [
					rowArray({
						title: `The Left Hand of Darkness`,
						author: `Ursula K. Le Guin`,
						goodreadsrating: `4.05`,
						onamazon: `8.75`,
					}),
					rowArray({
						title: `Kindred`,
						author: `Octavia Butler`,
						goodreadsrating: `4.16`,
						onamazon: `9.04`,
					}),
					rowArray({
						title: `The Handmaid's Tale`,
						author: `Margaret Atwood`,
						goodreadsrating: `4.01`,
						onamazon: `9.57`,
					}),
					rowArray({
						title: `A Swiftly Tilting Planet`,
						author: `Madeleine L'Engle`,
						goodreadsrating: `4.12`,
						onamazon: `6.8`,
					}),
				],
			},
		},
	}, {
		name: `My sheetsy example`,
		url: `https://docs.google.com/spreadsheets/d/14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs/pubhtml`,
		key: `14uk6kljx-tpGJeObmi22DkAyVRFK5Z1qKmSXy1ewuHs`,
		workbook: {
			name: `Sheetsy test`,
			authors: [
				{
					name: `joshduffman`,
					email: `joshduffman@gmail.com`,
				},
			],
			updated: `2017-07-14T04:59:24.123Z`,
			sheets: [
				{ name: `Herp`, id: `od6`, updated: `2017-07-14T04:59:24.123Z` },
				{ name: `Derp`, id: `of6b9b5`, updated: `2017-07-14T04:59:24.123Z` },
			],
		},
		sheets: {
			od6: {
				name: `Herp`,
				updated: `2017-07-14T04:59:24.123Z`,
				authors: [
					{
						name: `joshduffman`,
						email: `joshduffman@gmail.com`,
					},
				],
				rows: [
					rowArray({
						firstheader: `Something's up`,
						secondheader: `That's "cool"`,
					}),
					rowArray({
						firstheader: `a3`,
						secondheader: `b3`,
					}, [ `a3`, `b3`, `c3` ]),
				],
			},
			of6b9b5: {
				name: `Derp`,
				updated: `2017-07-14T04:59:24.123Z`,
				authors: [
					{
						name: `joshduffman`,
						email: `joshduffman@gmail.com`,
					},
				],
				rows: [
					rowArray({
						firstcolumninsecondsheet: `What's even going on here`,
						secondcolumn: ``,
					}),
				],
			},
		},
	},
]
