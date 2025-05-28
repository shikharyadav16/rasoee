const mongoose = require("mongoose");
const VegItem = require("../models/vegItem");
const NonVegItem = require("../models/nonVegItem");
const BevItem = require("../models/beverageItem");

const handleGetHomeReq = async(req, res) => {
    try {
        const vegItems = await VegItem.find({});
        const nonVegItems = await NonVegItem.find({})
        const bevItems = await BevItem.find({})
        return res.render("home.ejs" ,{vegItems, nonVegItems, bevItems});
    } catch(err) {
        console.log("Server error:", err);
        process.exit(1);
    }
}

module.exports = {handleGetHomeReq}