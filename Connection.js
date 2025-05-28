const mongoose = require("mongoose");

async function connectToDb(url) {
    try {
        await mongoose.connect(url);
        console.log("Database connected!")
    } catch(err) {
        console.log("Database connection error:", err);
        process.exit(1);
    }
}

module.exports = {connectToDb};