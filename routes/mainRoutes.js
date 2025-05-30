const express = require("express");
const router = express.Router();

// router.get("/home", (req, res)=> {
//     res.render("home.ejs");
// })
router.get("/profile", (req, res)=> {
    res.render("profile.ejs");
})

router.get("/cart", (req, res)=> {
    res.render("cart.ejs")
})
router.get("/login", (req, res)=> {
    res.render("login.ejs")
})
router.get("/signup", (req, res)=> {
    res.render("register.ejs")
})

module.exports = router;