const jwtoken = require("jsonwebtoken")
const secretCode = "padang"

const tokenGeneratorAdmin = (data) => {
    const { id, name, username, email, password } = data
    return jwtoken.sign({
        id, name, username, email, password
    }, secretCode);
}

const tokenGeneratorBrand = (data) => {
    const { id, name, address, website } = data
    return jwtoken.sign({
        id, name, address, website
    }, secretCode);
}

const tokenVerifier = (data) => {
    return jwtoken.verify(data, secretCode)
}


module.exports = { tokenGeneratorAdmin, tokenVerifier, tokenGeneratorBrand}