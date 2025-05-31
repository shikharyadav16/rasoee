const express = require("express");
const { handleGetHomeReq, handlePostHomeReq } = require("../controllers/fetchHome");
// const {} = require("./fetchHistory");
const router = express.Router();

router.route("/home")
    .get(handleGetHomeReq)
    .post(handlePostHomeReq);


// router.get("/history", handleGetHistoryReq);

module.exports = router;