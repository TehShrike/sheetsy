function getFileName(url) {
	const sheetListMatch = url.match(/worksheets\/([^\/]+)\/public/)

	if (sheetListMatch) {
		return `./fixture/${sheetListMatch[1]}.json`
	}

	const [ , key, id ] = url.match(/list\/([^\/]+)\/([^\/]+)\/public/)
	return `./fixture/${key}-sheet-${id}.json`
}

const testGet = url => Promise.resolve(require(getFileName(url)))

require('./tests.js')(testGet)
