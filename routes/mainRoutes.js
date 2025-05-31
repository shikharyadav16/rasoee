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

module.exports = router;