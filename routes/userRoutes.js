const express = require("express")
const userCtrl = require("../controllers/userCtrl")


const router = express()

router.set("views","./views/user")

router.get("/",userCtrl.loadHome)

router.get("/register",userCtrl.loadRegister)
router.post("/register",userCtrl.saveRegister_loadLogin)

router.get("/login",userCtrl.loadLogin)

router.get("/category",userCtrl.loadShop)
router.get("/productDetail",userCtrl.loadProductDetail)


module.exports = router;