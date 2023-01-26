const { tokenVerifier } = require('../helpers/jsonwebtoken')

const authBrand = (req, res, next) => {
    console.log("middleware authentication");
    const access_token_brand = req.headers.access_token_brand;
  
    if (access_token_brand) {
      console.log("ada token");
      try {
        let verifyToken = tokenVerifier(access_token_brand);
        req.brandData = verifyToken;
        next();
      } catch (err) {
        res.status(401).json({
          message: "token brand not authenticated!",
        });
      }
    } else {
      res.status(401).json({
        message: "access token brand not found!",
      });
    }
  }

  module.exports = { authBrand }