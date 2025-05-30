const User = require("../models/User");

async function handlePostLoginReq(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ success: false, msg: "Invalid email!" })
        } else if (user.password !== password) {
            return res.status(401).json({ success: false, msg: "Invalid password!" });
        } else {
            return res.status(200).json({ success: true, msg: "" })
        }
    } catch (err) {
        console.log("Error", err);
        process.exit(1);
    }
}

async function handlePostSignupReq(req, res) {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ success: false, msg: "User already exist" });
        } else {
            await User.create({
                name: name,
                email: email,
                password: password
            });
            return res.status(201).json({success: true, msg: ""});
        }
    } catch(err) {
        console.log("Error", err);
        process.exit(1);
    }
}

module.exports = {handlePostLoginReq, handlePostSignupReq};