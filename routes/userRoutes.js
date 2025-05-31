const express = require("express");
const {handlePostLoginReq, handlePostSignupReq} = require("../controllers/fetchUser")
const router = express.Router()

router.route("/signup")
    .post(handlePostSignupReq)
    .get((req, res)=> {
        res.render("register.ejs");
    })

router.route("/login")
    .post(handlePostLoginReq)
    .get((req, res)=> {
    res.render("login.ejs")
    });


module.exports = router;