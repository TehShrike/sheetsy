module.exports = function parseUrl(url) {
	if (/key=/.test(url)) {
		return objectWithKey(url.match('key=(.*?)(&|#|$)')[1])
	}

	if (/pubhtml/.test(url)) {
		return objectWithKey(url.match('d\\/(.*?)\\/pubhtml')[1])
	}

	if (/spreadsheets\/d/.test(url)) {
		return objectWithKey(url.match('d\\/(.*?)\/')[1])
	}


	throw new Error(`No key found in ${url}`)
}

const objectWithKey = str => ({ key: str })
