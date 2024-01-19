const mongoose = require("mongoose")
require("dotenv").config()

let mongoConnect = () => mongoose.connect(process.env.MONGO_URI,console.log("MongoDB Connected"))

module.exports = mongoConnect
