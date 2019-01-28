

var Idea = require('../model/appModel.js');

exports.list_all_ideas = function(req, res) {
  Idea.getAllIdeas(function(err, idea) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', idea);
    res.send(idea);
  });
};



exports.create_an_idea = function(req, res) {
  var new_idea = new Idea(req.body);
  console.log(new_idea);

  //handles null error 
//    if(!new_idea.name || !new_idea.description|| !new_idea.validated || !new_idea.IDuser){
// console.log(new_idea.name);
//             res.status(400).send({ error:true, message: 'Please provide name/description/validated/IDuser' });

//         }
// else{
  
  Idea.createIdea(new_idea, function(err, idea) {
    
    if (err)
      res.send(err);
    res.json(idea);
  });
// }
};


exports.read_an_idea= function(req, res) {
  Idea.getIdeaById(req.params.idevent, function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};


exports.update_an_idea = function(req, res) {
  Idea.updateById(req.params.idevent, new Idea(req.body), function(err, idea) {
    if (err)
      res.send(err);
    res.json(idea);
  });
};


exports.delete_an_idea = function(req, res) {


  Idea.delete( req.params.idevent, function(err, idea) {
    if (err)
      res.send(err);
    res.json({ message: 'Idea successfully deleted' });
  });
};