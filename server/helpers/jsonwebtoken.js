const jwtoken = require("jsonwebtoken")
const secretCode = "padang"

const tokenGenerator = (data) => {
    const { id, name, username, email, password } = data
    return jwtoken.sign({
        id, name, username, email, password
    }, secretCode);
}

const tokenVerifier = (data) => {
    return jwtoken.verify(data, secretCode)
}


module.exports = { tokenGenerator, tokenVerifier}