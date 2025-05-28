const mongoose = require("mongoose");
const nonVegItemSchema = mongoose.Schema({
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

const NonVegItem = mongoose.model("nonvegitems", nonVegItemSchema);
module.exports = NonVegItem;