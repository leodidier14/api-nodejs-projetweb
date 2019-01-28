const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'bddstras'
});

connection.connect(function(err){
	  if (err) throw err;
        console.log('Connected to bddstras');
});

module.exports = connection;