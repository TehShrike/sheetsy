const { buildIndexUrl, buildSheetUrl } = require('./url-builder.js')
const defaultGet = require('./get.js')
const entries = require('ordered-entries')

const afterLastSlash = str => str.split('/').pop()

function getSheetsList(key, get = defaultGet) {
	return get(buildIndexUrl(key)).then(data => {
		return data.feed.entry.map(sheetData => {
			const lastSheetUrl = sheetData.link.find(link => link.rel === 'self').href
			return {
				name: sheetData.title['$t'],
				id: afterLastSlash(lastSheetUrl)
			}
		})
	})
}

function getSheet(key, id, get = defaultGet) {
	return get(buildSheetUrl(key, id)).then(data => {
		return data.feed.entry.map(entry => {
			const originalValues = entries(entry)
				.filter(([ key ]) => /^gsx\$/.test(key))
				.map(([ key, value ]) => ({
					key: key.replace('gsx$', ''),
					value: value['$t']
				}))

			const array = originalValues.map(({ value }) => value)

			originalValues
				.filter(({ key }) => /^[^_]/.test(key))
				.forEach(({ key, value }) => {
					array[key] = value
				})

			return array
		})
	})
}

function parseUrl(url) {
	if (/key=/.test(url)) {
		return url.match('key=(.*?)(&|#|$)')[1]
	}

	if (/pubhtml/.test(url)) {
		return url.match('d\\/(.*?)\\/pubhtml')[1]
	}

	if (/spreadsheets\/d/.test(url)) {
		return url.match('d\\/(.*?)\/')[1]
	}


	throw new Error(`No key found in ${url}`)
}


module.exports = {
	getSheetsList,
	getSheet,
	parseUrl
}
