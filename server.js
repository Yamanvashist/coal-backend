const express= require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoute")
const connection = require("./connect")
const app = express()

app.use(cors())
app.use(express.json()); // <- mandatory bro

app.use("/api",userRoute)

connection()

app.listen(8000,()=>console.log("Server started"))