const express = require("express")
const admCtrl = require("../controllers/adminCtrl")

const adm_router = express()

adm_router.set("views",'./views/admin')

adm_router.get("/login",admCtrl.loadAdminLogin)
adm_router.get("/dashboard",admCtrl.loadAdminDashboard)

module.exports = adm_router;