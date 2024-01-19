function loadAdminLogin (req,res,next) {
    try {
        res.render("adminLogin")
    } catch (error) {
        console.log(error);
    }
}

function loadAdminDashboard(req,res,next) {
    try {
        res.render("dashboard")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {loadAdminLogin,loadAdminDashboard}