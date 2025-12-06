const UserFeedbacks = require("../models/userDetailsModel")

const sendDetail = async(req,res)=>{
    const {name,phone,location,details} = req.body
    if (!name.trim() || !phone.trim() || !location.trim() || !details.trim()) return res.status(400).json({message : "Fill all Details"});

    try {
        const userDetail = await UserFeedbacks.create({
            name,
            phone,
            location,
            details,
        })
        return res.status(201).json(userDetail)
    }catch(err){
        res.status(500).json({message : "Server Error"})
    }
}

module.exports = sendDetail