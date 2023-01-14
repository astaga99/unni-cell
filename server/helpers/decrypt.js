const decrypt = require("bcrypt");

const decryptPwd = (data, pwd) => {
    return decrypt.compareSync(String(data), pwd)
}

module.exports = { decryptPwd }


