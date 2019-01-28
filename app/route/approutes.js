module.exports = function(app) {
  var ideaList = require('../controller/appController');

  // todoList Routes
  app.route('/events')
    .get(ideaList.list_all_ideas)
    .post(ideaList.create_an_idea);
   
   app.route('/events/:idevent')
    .get(ideaList.read_an_idea)
    .put(ideaList.update_an_idea)
    .delete(ideaList.delete_an_idea);
    };