const pgp = require('pg-promise')()
const connectionString = "MySQLhttp://root:@localhost:port/practise" 
const db = pgp(connectionString)
module.exports = db;