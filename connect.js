const mongoose = require("mongoose");

async function connection(path) {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${path}`);
        console.log("MongoDB connected 😎");
    } catch (err) {
        console.error("MongoDB error:", err.message);
    }
}

module.exports = connection;
