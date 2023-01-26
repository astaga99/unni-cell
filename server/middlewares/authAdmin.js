const { tokenVerifier } = require('../helpers/jsonwebtoken')

const authAdmin = (req, res, next) => {
    console.log("middleware authentication");
    const access_token_admin = req.headers.access_token_admin;
  
    if (access_token_admin) {
      console.log("ada token");
      try {
        let verifyToken = tokenVerifier(access_token_admin);
        req.adminData = verifyToken;
        next();
      } catch (err) {
        res.status(401).json({
          message: "token admin not authenticated!",
        });
      }
    } else {
      res.status(401).json({
        message: "access token admin not found!",
      });
    }
  }

  module.exports = { authAdmin }