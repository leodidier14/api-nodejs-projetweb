var connection = require('./dbCommune.js');

//users object constructor
var User = function(user){
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.city = user.city;
    this.email = user.email;
    this.password = user.password;
    this.imgUser = user.imgUser;
    this.IDrole = user.IDrole;

};

//get user with his mail
User.searchUser = function(email, result) {
    connection.query({
        sql: 'SELECT * FROM users WHERE email = ?',
        timeout: 40000,
        values: [email]
        }, 
        function(error, rows, fields) {
            if(error || rows[0] == null) {
                console.log(error);
                return result(error, null);
            } else {
                return result(null, rows);
            }
    });     
}

module.exports = User;