const encrypt = require("bcrypt");
const saltRound = 5;

const encryptPwd = data => {
    return encrypt.hashSync(String(data), saltRound)
};

module.exports =  { encryptPwd }