const jwt = require('jsonwebtoken');
const secret = 'Ayush@123'


function setUser(user) {  
  try {
      return jwt.sign({
          _id: user._id,
          email: user.email,
      }, secret);
  } catch (error) {
      console.error("Error signing JWT token:", error);
      return null;
  }
}


function getUser(token) {
    
        if (!token) return null;
        try {
        return jwt.verify(token, secret);
    } catch (error) {

        return null;
    }
}


module.exports = {
  setUser,
  getUser,
};
