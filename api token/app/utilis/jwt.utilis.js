// Imports
var jwt = require('jsonwebtoken');

// Token key
const JWT_SIGN = 'qsd9zerzeabytj6lombgfee7sgfbt3ezs4q6qfrgn2addds';

// Exported functions
module.exports = {
    
    // Generate Token
    generateTokenForUser: function(userData) {
        //sign the token
        return jwt.sign({
            IDuser: userData.IDuser,
            IDrole: userData.IDrole
        },
        JWT_SIGN,
        {
            expiresIn: '2h'
        });
    },
}