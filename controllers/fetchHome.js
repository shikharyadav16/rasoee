const VegItem = require("../models/vegItem");
const NonVegItem = require("../models/nonVegItem");
const BevItem = require("../models/beverageItem");

const handleGetHomeReq = async (req, res) => {
    try {
        const vegItems = await VegItem.find({});
        const nonVegItems = await NonVegItem.find({})
        const bevItems = await BevItem.find({})
        return res.render("home", { vegItems, nonVegItems, bevItems });
    } catch (err) {
        console.log("Server error:", err);
        process.exit(1);
    }
}

const handlePostHomeReq = async (req, res) => {
    const items = req.body.item;
    const cleanedItems = items
        .map((value, index) => ({ index, value }))
        .filter(item => item.value !== 0 && item.value !== null);
    let data = [];
    let values = [];
    try {
        for (const element of cleanedItems) {
            let item;
            values.push(element.value)
            if (element.index >= 100) {
                item = await BevItem.findOne({ id: element.index.toString() });
            } else if (element.index >= 50) {
                item = await NonVegItem.findOne({ id: element.index.toString() });
            } else {
                item = await VegItem.findOne({ id: element.index.toString() });
            }
            if (item) data.push(item);
        }
        return res.json({ items: data, values: values });
    } catch (err) {
        console.log("Some error occured!");
        process.exit(1)
    }

};


module.exports = { handleGetHomeReq, handlePostHomeReq}