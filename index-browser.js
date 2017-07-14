const createApi = require('./index.js')

function defaultGet(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()
		request.addEventListener('load', () => resolve(JSON.parse(request.responseText)))
		request.addEventListener('error', reject)
		request.addEventListener('abort', reject)
		request.open('GET', url)
		request.send()
	})
}

module.exports = createApi(defaultGet)
