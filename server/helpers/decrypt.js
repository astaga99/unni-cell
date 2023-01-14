const decrypt = require("bcrypt");

const decryptPwd = (data, pwd) => {
    return decrypt.compareSync(data, pwd)
}

module.exports = { decryptPwd }


