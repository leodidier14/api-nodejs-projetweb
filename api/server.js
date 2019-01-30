
//import
const express = require('express');
var bodyParser = require('body-parser')

//define app and the port
app = express();
port =  3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-csrf-token");
  next();
});

//listen the port 3000
app.listen(port);

console.log('Server node.js API started on port: ' + port);

	//cal the route
//importing route
var routes = require('./app/route/approutes'); 
//register the route
routes(app); 