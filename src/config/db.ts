const mysql = require('mysql')
const db = mysql.createConnection({
host: "10.10.136.100",
user: "adm",
password: "",
database:"banco_teste" 
})

module.exports = db;