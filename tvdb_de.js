let TVDB = require('node-tvdb');

module.exports = new TVDB(process.env.TVDB_API_KEY, 'de')