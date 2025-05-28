const mongoose = require("mongoose");
const vegItemSchema = mongoose.Schema({
    id: {
        type:  String,
        required: true,
        unique: true
    },
    itemImg: {
        type: String
    },
    itemName: {
        type: String,
        required: true 
    },
    itemDes: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
})

const VegItem = mongoose.model("vegitems", vegItemSchema);
module.exports = VegItem;