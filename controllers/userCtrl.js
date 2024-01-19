const User = require("../model/userModel")


const loadHome = (req,res,next) => {
    try {
        res.render("home")
    } catch (error) {
        console.log(error);
    }
}

const loadRegister = (req,res,next) => {
    try {
        res.render("register")
    } catch (error) {
        console.log(error);
    }
}

const saveRegister_loadLogin = async (req,res,next) => {
    try {
        const {fname,lname,email,mobile,password,cpassword} = req.body;
    if (password==cpassword){
        const userData = await User.findOne({email})
        if (userData) {
            return res.render("register", {message:'User already Exists'})   // what if eede return kodthillang.....what if retur kodtheng...
        }
        else {
            let newUserData = new User ({
                fname,
                lname,
                email,
                mobile,
                password
            })

            await newUserData.save()
        }
        res.render("otpValidation")
    }else {
        res.render("register",{message:'Password is not matching'})    // idanne frontend validation l cheythittee.....appo ad override aana ??
    }
    } catch (error) {
        console.log(error);
    }
}

const loadLogin = (req,res,next) => {
    try {
        res.render("login")
    } catch (error) {
        console.log(error);
    }
} 

const loadShop = (req,res,next) => {
    try {
        res.render("category")
    } catch (error) {
        console.log(error);
    }
}

const loadProductDetail = (req,res,next) => {
    try {
        res.render("productDetail")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {loadRegister,loadLogin,loadHome,loadShop,loadProductDetail,saveRegister_loadLogin};