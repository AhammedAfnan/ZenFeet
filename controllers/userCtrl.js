const User = require("../model/userModel");
const { sendVerifyMail } = require("../services/nodemailer");
const {getOTP,securePassword} = require("../helpers/generator")


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
        
        const OTP = req.session.OTP = getOTP()
        console.log(OTP);

        sendVerifyMail(email,OTP)
        res.render("otpValidation", {
            fname,
            lname,
            email,
            mobile,
            password,
            message:null,
        })
    } else {
        res.render("register",{message:'Password is not matching'})    // idanne frontend validation l cheythittee.....appo ad override aana ??
     }
    } catch (error) {
        console.log(error);
    }
}

const validateOTP = async(req,res,next) => {
    try {
        const {fname,lname,email,mobile,password} = req.body;

        const userOTP = req.body.OTP;

        if (userOTP==req.session.OTP) {
            const sPassword = await securePassword(password)

            let newUserData;

            newUserData = await new User({
                fname,
                lname,
                email,
                mobile,
                password:sPassword,
            }).save()

            req.session.userId = newUserData._id;
            req.session.OTP = null
            res.redirect('/')
        }else{
            // incorrect OTP
            
            if (req.session.OTP){
                console.log("incorrect OTP");
                res.render('otpValidation',{
                    fname,
                    lname,
                    email,
                    mobile,
                    password,
                    message:"Incorrect OTP"
                })
            }else{
                res.render('otpValidation',{
                    fname,
                    lname,
                    email,
                    mobile,
                    password,
                    message:"OTP expired"
                })
            }
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



module.exports = {loadRegister,loadLogin,loadHome,loadShop,loadProductDetail,saveRegister_loadLogin,validateOTP};