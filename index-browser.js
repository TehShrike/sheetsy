const createRequestFunction = require(`basic-xhr`)
const createApi = require(`./index.js`)

module.exports = createApi(createRequestFunction())
