const express = require("express");
const {handleGetHomeReq} = require("../controllers/fetch");
const router = express.Router();

router.get("/home", handleGetHomeReq);

module.exports = router;