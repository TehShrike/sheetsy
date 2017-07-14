module.exports = function parseUrl(url) {
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
