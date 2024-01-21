const express = require("express")
const session = require("express-session")
const path = require("path")
const mongoConnect = require("./config/config")

require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const amdinRoutes = require("./routes/adminRoutes")

const app = express()
mongoConnect()

app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } //30 days
}))

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine","ejs")

app.use("/",userRoutes)
app.use("/admin",amdinRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})