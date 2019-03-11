const { buildIndexUrl, buildSheetUrl } = require(`./url-builder.js`)
const entries = require(`ordered-entries`)

module.exports = defaultGet => ({
	getWorkbook(key, get = defaultGet) {
		return get(buildIndexUrl(key)).then(workbookData => {
			const feed = workbookData.feed
			const sheets = feed.entry.map(sheetData => {
				const selfSheetUrl = sheetData.link.find(link => link.rel === `self`).href
				return {
					name: textOf(sheetData.title),
					id: afterLastSlash(selfSheetUrl),
					updated: textOf(sheetData.updated),
				}
			})

			return {
				name: textOf(feed.title),
				updated: textOf(feed.updated),
				authors: getAuthors(feed),
				sheets,
			}
		})
	},
	getSheet(key, id, get = defaultGet) {
		return get(buildSheetUrl(key, id)).then(sheetData => {
			const feed = sheetData.feed
			const rows = (feed.entry || []).map(entry => {
				const originalCellKeysAndValues = entries(entry)
					.filter(([ key ]) => /^gsx\$/.test(key))
					.map(([ key, value ]) => ({
						key: key.replace(`gsx$`, ``),
						value: textOf(value),
					}))

				const array = originalCellKeysAndValues.map(({ value }) => value)

				originalCellKeysAndValues
					.filter(({ key }) => /^[^_]/.test(key))
					.forEach(({ key, value }) => {
						array[key] = value
					})

				return array
			})

			return {
				name: textOf(feed.title),
				updated: textOf(feed.updated),
				authors: getAuthors(feed),
				rows,
			}
		})
	},
	urlToKey(url) {
		return firstCapture(/key=(.*?)(&|#|$)/, url)
			|| firstCapture(/d\/(.*?)\/pubhtml/, url)
			|| firstCapture(/spreadsheets\/d\/(.*?)\//, url)
			|| toss(`No key found in ${ url }`)
	}
})

const textOf = field => field.$t

const getAuthors = data => data.author.map(({ name, email }) => ({
	name: textOf(name),
	email: textOf(email),
}))

const afterLastSlash = str => str.split(`/`).pop()

const firstCapture = (regex, str) => {
	const match = regex.exec(str)
	return match && match[1]
}

const toss = message => {
	throw new Error(message)
}
