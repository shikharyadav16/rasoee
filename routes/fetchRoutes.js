const express = require("express");
const { handleGetHomeReq, handlePostHomeReq } = require("../controllers/fetchHome");
// const {} = require("./fetchHistory");
const {handlePostLoginReq, handlePostSignupReq} = require("../controllers/fetchUser")
const router = express.Router();

router.route("/home")
    .get(handleGetHomeReq)
    .post(handlePostHomeReq);

router.post("/signup", handlePostSignupReq)
router.post("/login", handlePostLoginReq)

// router.get("/history", handleGetHistoryReq);

module.exports = router;