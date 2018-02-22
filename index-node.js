const got = require(`got`)
const createApi = require(`./index.js`)

const defaultGet = url => got(url).then(response => JSON.parse(response.body))

module.exports = createApi(defaultGet)
