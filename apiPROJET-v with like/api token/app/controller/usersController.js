//import
var bcrypt = require ('bcryptjs');
var jwtUtils = require('../utilis/jwt.utilis');
var User = require('../model/usersModel.js');

		
exports.login = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

//check if the email or the password is null
    if (email == null || password == null) {
        return res.status(400).json({ 'error': 'missing parameter'});
    } else {
        User.searchUser(email, function(err, result) {
            if(err) {
                return res.send(err);
            } else {
                if(result) {
                    
                    //compare the password of the login with the password on the bdd (register)
                    //bdcrypt is the encryption used
                    bcrypt.compare(password, result[0].password, function(errBycrypt, resBycrypt) {
                       
                       //if resBycrypt return true (password entered = password registered)
                        if(resBycrypt) {
                            
                            //return a json with a generated token
                            return res.status(200).json({
                                    'IDuser': result[0].IDuser,
                                    
                                    //just a test    
                                    'token': 'THE TOKEN',
                                    
                                    //the token is genereted in jwt.utilis.js
                                    'token': jwtUtils.generateTokenForUser(result[0])
                            });
                        } else {
                            return res.status(403).json({ 'error': 'invalid password' });
                        }
                    });
                } else {
                    return res.status(404).json({ 'error': 'user not exist in bddStras' });
                }
            }
        });
     }
}