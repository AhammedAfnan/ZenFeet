const express = require("express")
const path = require("path")
const mongoConnect = require("./config/config")

const userRoutes = require("./routes/userRoutes")
const amdinRoutes = require("./routes/adminRoutes")

const app = express()
mongoConnect()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine","ejs")

app.use("/",userRoutes)
app.use("/admin",amdinRoutes)


app.listen(PORT, ()=>{
    console.log("server started")
})