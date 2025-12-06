const express = require("express")
const sendDetail = require("../controllers/detail")

const router = express.Router();

router.post("/send",sendDetail)

module.exports = router;