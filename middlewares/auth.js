const {getUser} = require("../service/auth")

async function restrictToLogin(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) return res.redirect("/login");

    try {
        const decoded = getUser(userUid);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }

}

module.exports = {restrictToLogin}