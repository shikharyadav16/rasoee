const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    code: {
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
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const History = mongoose.model("history", historySchema);

module.exports = History;