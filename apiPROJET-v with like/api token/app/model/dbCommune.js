//import
const mysql = require('mysql');

//connection for bddcommune which contains the events/ideas
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'bddcommune'
});

connection.connect(function(err){
	  if (err) throw err;
        console.log('Connected to bddcommune');
});

//export the connection
module.exports = connection;