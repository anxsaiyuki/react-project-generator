var mysql = require('mysql');

//Configuration for mysql db
const HOST = 'localhost';
const USER = 'user';
const PASSWORD = 'password';
const DATABASE = 'database';

var connection = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PASSWORD,
  database : DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
