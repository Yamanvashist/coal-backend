const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected 😎");
    } catch (err) {
        console.error("MongoDB error:", err.message);
    }
}

module.exports = connection;
