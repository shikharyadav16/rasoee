const User = require("../models/User");
const { setUser } = require("../service/auth");

async function handlePostLoginReq(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ success: false, msg: "Invalid email!" })
        } else if (user.password !== password) {
            return res.status(401).json({ success: false, msg: "Invalid password!" });
        } else {
            const token = setUser(user);
            res.cookie("uid", token);
            return res.status(200).json({ success: true, msg: "", address: user.address })
        }
    } catch (err) {
        console.log("Error", err);
        process.exit(1);
    }
}

async function handlePostSignupReq(req, res) {
    const { name, email, password, address } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ success: false, msg: "User already exist" });
        } else {
            await User.create({
                name: name,
                email: email,
                password: password,
                address: address
            });
            const user = await User.findOne({email: email})
            const token = setUser(user);
            res.cookie("uid", token);
            return res.status(201).json({ success: true, msg: "", address: address });
        }
    } catch (err) {
        console.log("Error", err);
        process.exit(1);
    }
}

module.exports = { handlePostLoginReq, handlePostSignupReq };