const jwtoken = require("jsonwebtoken")
const secretCode = "padang"

const tokenGenerator = (data) => {
    const { username, email, password } = data
    return jwtoken.sign({
        username, email, password
    }, secretCode);
}

const tokenVerifier = (data) => {
    return jwtoken.verify(data, secretCode)
}


module.exports = { tokenGenerator, tokenVerifier}