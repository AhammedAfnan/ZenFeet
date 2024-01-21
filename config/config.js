const mongoose = require("mongoose")

let mongoConnect = () => mongoose.connect(process.env.MONGO_URI,console.log("MongoDB Connected"))

module.exports = mongoConnect
