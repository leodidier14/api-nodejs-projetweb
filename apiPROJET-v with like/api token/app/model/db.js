//import
const mysql = require('mysql');

//connection for bddstras which contains the users
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

//export the connection
module.exports = connection;


