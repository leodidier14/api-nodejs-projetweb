//imports
module.exports = function(app) {
  var ideaList = require('../controller/appController');
  var userList = require('../controller/usersController');

  // ideaList Routes
  app.route('/events')
    .get(ideaList.list_all_ideas)
    .post(ideaList.create_an_idea);
   
   app.route('/events/:idevent')
    .get(ideaList.read_an_idea)
    .put(ideaList.update_an_idea)
    .delete(ideaList.delete_an_idea);

  // userList Routes
      app.route('/users/login')
    .post(userList.login);
    };



