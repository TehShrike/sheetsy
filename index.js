const defaultGet = require('./get.js')

const afterLastSlash = str => str.split('/').pop()

function getSheetsList(key, get = defaultGet) {
	return get(key).then(data => {
		return data.feed.entry.map(sheetData => {
			const lastSheetUrl = sheetData.link.find(link => link.rel === 'self').href
			return {
				name: sheetData.title['$t'],
				id: afterLastSlash(lastSheetUrl)
			}
		})
	})
}

module.exports = {
	getSheetsList
}
