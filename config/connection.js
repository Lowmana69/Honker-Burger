var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL ||{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'burgers_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('connection as id: ' + connection.threadId);
});

module.exports = connection;