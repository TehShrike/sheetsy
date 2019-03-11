const createRequestFunction = require(`basic-xhr`)
const createApi = require(`./index.js`)

const { urlToKey, getWorkbook, getSheet } = createApi(createRequestFunction())

module.exports.urlToKey = urlToKey
module.exports.getWorkbook = getWorkbook
module.exports.getSheet = getSheet
