const createApi = require('./index.js')

const success = request => request.status >= 200 && request.status < 400

function defaultGet(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()
		request.addEventListener('load', handleResult)
		request.addEventListener('error', reject)
		request.addEventListener('abort', reject)
		request.open('GET', url)
		request.send()

		function handleResult() {
			try {
				const response = JSON.parse(request.responseText)

				success(request) ? resolve(response) : reject(response)
			} catch (e) {
				reject('Invalid response: ' + request.responseText)
			}
		}
	})
}

module.exports = createApi(defaultGet)
