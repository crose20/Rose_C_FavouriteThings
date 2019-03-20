var mysql = require('mysql'); // like php require or require_once
var config = require('../config'); // contains the settings to connect to the database

const connect = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pword,
    database: config.database
});

module.exports = connect;