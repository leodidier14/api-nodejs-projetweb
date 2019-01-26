
var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-csrf-token");
  next();
});

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'bddstras'
});

connection.connect(function(){
        console.log('Connected to bddstras');
});
app.get('/events', function(req, resp) {
    connection.query({
        sql:'SELECT * FROM events',
        timeout: 40000,
    }, function(error, rows, fields) {
        console.log('Successful GET quiery')
        resp.json(rows);
        console.log(rows);

    });
}); 
app.get('/events/:idevent', function(req, resp) {
    connection.query({
        sql:'SELECT * FROM events WHERE idevent = ?',
        timeout: 40000,
        values:[req.params.idevent]  
    }, function(error, rows, fields) {
        console.log('Successful GET quiery')
        resp.json(rows);
        console.log(rows);

    });
});

app.post('/events', function(req, resp) {
    connection.query({
        sql:'INSERT INTO events SET name = ?, date = ?,  description = ?, imgEvent = ?, price = ?,  validated = ?, IDuser = ?, reaction=?, hasliked=?',
        timeout: 40000,
        values:[req.body.name, req.body.date, req.body.description, req.body.imgEvent, req.body.price, req.body.validated, req.body.IDuser, req.body.reaction, req.body.hasliked]       
    }, function(error, rows, fields) {
        if (error) throw error;
        console.log('Successful POST quiery')
        resp.json(rows);
        console.log(rows);
        console.log(req.body);
    });
});


app.delete('/events/:idevent', function(req, resp) {
    connection.query({
        sql:'DELETE FROM events WHERE idevent = ?',
        timeout: 40000,
        values:[req.params.idevent]   
    }, function(error, rows, fields) {
        console.log('Successful DELETE quiery')
        resp.json(rows);
        console.log(rows);
    });
});

app.put('/events/:idevent', function(req, resp) {
    connection.query({
        sql:'UPDATE events SET name = ?, date = ?,  description = ?, imgEvent = ?, price = ?,  validated = ?, IDuser = ?, reaction=?, hasliked=? WHERE idevent = ?',
        timeout: 40000,
        values:[req.body.name, req.body.date, req.body.description, req.body.imgEvent, req.body.price, req.body.validated, req.body.IDuser, req.body.reaction, req.body.hasliked, req.params.idevent]   
    }, function(error, rows, fields) {
        console.log('Successful PUT quiery')
        resp.json(rows);
        console.log(rows);
    });
});

app.listen(3000, '127.0.0.1');
