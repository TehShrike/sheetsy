const got = require('got')

module.exports = url => got(url).then(response => JSON.parse(response.body))
