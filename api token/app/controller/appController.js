//import
var Idea = require('../model/appModel.js');

//get all the ideas
exports.list_all_ideas = function (req, res) {
  Idea.getAllIdeas(function (err, idea) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', idea);
    res.send(idea);
  });
};

//get one idea with his ID
exports.read_an_idea = function (req, res) {
  Idea.getIdeaById(req.params.idevent, function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//post an idea
exports.create_an_idea = function (req, res) {
  var new_idea = new Idea(req.body);
  Idea.createIdea(new_idea, function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//put one idea with his ID
exports.update_an_idea = function (req, res) {
  Idea.updateById(req.params.idevent, new Idea(req.body), function (err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};

//delete one idea with his ID
exports.delete_an_idea = function (req, res) {
  Idea.delete(req.params.idevent, function (err, idea) {
    if (err)
      res.send(err);
    res.json({
      message: 'successfully delete'
    });
  });
};