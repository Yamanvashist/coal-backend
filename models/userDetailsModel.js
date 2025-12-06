const mongoose = require("mongoose")

const userDetailSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
    },
    phone : {
        required : true,
        type : String,
    },
    location : {
        required : true,
        type : String,
    },
    details : {
        required : true,
        type : String,
    }
},{timestamps : true})

module.exports = mongoose.model("UserFeedbacks",userDetailSchema)