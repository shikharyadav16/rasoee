const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    }
})

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;