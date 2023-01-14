const encrypt = require("bcrypt");
const saltRound = 5;

const encryptPwd = data => {
    return encrypt.hashSync(data, saltRound)
};

module.exports =  { encryptPwd }