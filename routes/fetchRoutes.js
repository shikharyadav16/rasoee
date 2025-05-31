const express = require("express");
const { handleGetHomeReq, handlePostHomeReq } = require("../controllers/fetchHome");
const {handlePostOrderReq} = require("../controllers/fetchCart")
// const {} = require("./fetchHistory");
const router = express.Router();

router.route("/home")
    .get(handleGetHomeReq)
    .post(handlePostHomeReq);


router.post("/create-order", handlePostOrderReq)

router.get("/get-key", (req, res)=> {
    return res.json({key: process.env.RAZORPAY_KEY_ID});
})

// router.get("/history", handleGetHistoryReq);

module.exports = router;