const jwt = require("jsonwebtoken");

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    return jwt.sign(payload, process.env.JWT_TOKEN);
}

function getUser(token) {
    return jwt.verify(token, process.env.JWT_TOKEN);
}

module.exports = {setUser, getUser};