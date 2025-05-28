const mongoose = require("mongoose");
const bevItemSchema = mongoose.Schema({
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

const BevItem = mongoose.model("bevitems", bevItemSchema);
module.exports = BevItem;