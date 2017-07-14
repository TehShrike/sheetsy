const { buildIndexUrl, buildSheetUrl } = require('./url-builder.js')
const entries = require('ordered-entries')

module.exports = defaultGet => {
	function getSheetList(key, get = defaultGet) {
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

	function urlToKey(url) {
		return firstCapture(/key=(.*?)(&|#|$)/, url)
			|| firstCapture(/d\/(.*?)\/pubhtml/, url)
			|| firstCapture(/spreadsheets\/d\/(.*?)\//, url)
			|| toss(`No key found in ${url}`)
	}


	return {
		getSheetList,
		getSheet,
		urlToKey
	}
}

const afterLastSlash = str => str.split('/').pop()

const firstCapture = (regex, str) => {
	const match = regex.exec(str)
	return match && match[1]
}

const toss = message => {
	throw new Error(message)
}
