var connection = require('./db.js');

//idea object constructor
var Idea = function(idea){
    this.name = idea.name;
    this.description = idea.description;
    this.imgEvent = idea.imgEvent;
    this.price = idea.price;
    this.validated = idea.validated;
    this.IDuser = idea.IDuser;
    this.reaction = idea.reaction;
    this.hasliked = idea.hasliked;
    this.past = idea.past;
    this.payable = idea.payable;
    this.IDpunctuality = idea.IDpunctuality;
};

var Idea2 = function(idea){
    this.IDevent = idea.IDevent;
    this.IDuser = idea.IDuser;
    this.reaction = idea.reaction;
};

//get model for all ideas
Idea.getAllIdeas = function(result) { 
        connection.query({
        sql:'SELECT * FROM events',
        timeout: 40000,
    }, function(error, rows, fields) {
        console.log('Successful GET quiery')
        result(null,rows);
        console.log(rows);
    }); 
};

//get model for one idea
Idea.getIdeaById = function(idevent, result) {
    connection.query({
        sql:'SELECT * FROM events WHERE idevent = ?',
        timeout: 40000,
        values:[idevent]  
    }, function(error, rows, fields) {
        console.log('Successful GET quiery')
        result(null,rows);
    });
};

//post model
Idea.createIdea = function(newIdea, result) {
    connection.query({
        sql:'INSERT INTO events SET name = ?, description = ?,  date = ?, IDuser = ?, validated = 0',
        timeout: 40000,
        values:[newIdea.name, newIdea.description, newIdea.date,  newIdea.IDuser]       
    }, function(error, rows, fields) {
        if (error) throw error;
        console.log('Successful POST quiery')
 	console.log(rows.insertId);
    result(null, rows.insertId);
    });
};

//put model
Idea.updateById = function(idevent, idea, result) {
    connection.query({
        sql:'UPDATE events SET imgEvent = ?, price = ?,  validated = ?,  reaction=?, hasliked=? WHERE idevent = ?',
        timeout: 40000,
        values:[idea.imgEvent, idea.price, idea.validated, idea.reaction, idea.hasliked, idevent]   
    }, function(error, rows, fields) {
        console.log('Successful PUT quiery')
        result(null,rows);
        console.log(rows);
    });
};

//delete model
Idea.delete = function(idevent, result) {
    connection.query({
        sql:'DELETE FROM events WHERE idevent = ?',
        timeout: 40000,
        values:[idevent]   
    }, function(error, rows, fields) {
        console.log('Successful DELETE quiery')
        result(null, result);
    });
};

//----------------------------------------------------LIKE

Idea.createIdea2 = function(idevent, newIdea, result) {
    connection.query({
        sql:'INSERT INTO vote SET IDuser = ?, IDevent = ?, reaction = ?',
        timeout: 40000,
        values:[newIdea.IDuser, idevent, newIdea.reaction]       
    }, function(error, rows, fields) {
        if (error) throw error;
        console.log('Successful POST quiery')
    console.log(rows.insertId);
    result(null, rows.insertId);
    });
};

Idea.getIdeaById2 = function(idevent, result) {
    connection.query({
        sql:'SELECT * FROM vote WHERE IDuser = ?',
        timeout: 40000,
        values:[idevent]  
    }, function(error, rows, fields) {
        console.log('Successful GET quiery')
        result(null,rows);

    });
};

Idea.updateById2 = function(idevent, idea, result) {
    connection.query({
        sql:'UPDATE events SET reaction = ? WHERE idevent = ?',
        timeout: 40000,
        values:[idea.reaction, idevent]   
    }, function(error, rows, fields) {
        console.log('Successful PUT quiery')
        result(null,rows);
        console.log(rows);
    });
};

Idea.delete2 = function(idevent, newIdea, result) {
    connection.query({
        sql:'DELETE FROM vote WHERE idevent = ? AND IDuser = ?',
        timeout: 40000,
        values:[idevent, newIdea.IDuser]   
    }, function(error, rows, fields) {
        console.log('Successful DELETE quiery')
        result(null, result);
    });
};

Idea.delete3 = function(idevent, newIdea, result) {
    connection.query({
        sql:'DELETE FROM vote WHERE idevent = ?',
        timeout: 40000,
        values:[idevent]   
    }, function(error, rows, fields) {
        console.log('Successful DELETE quiery')
        result(null, result);
    });
};



//export mdoel
module.exports= Idea;