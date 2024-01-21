const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    logger:false,
    debug:false,
    secureConnection:false,
    requireTLS:true,
    auth:{
        user:process.env.GMAIL,
        pass:process.env.GMAIL_PASSWORD,
    },
    tls:{
        rejectUnauthorized:true,
    }
})

const sendVerifyMail = async(userEmail,OTP)=> {
    try {
        const mailOptions = {
            from:process.env.GMAIL,
            to:userEmail,
            subject:'Email Verification',
            html:'<p>Hello please Enter this otp to verify '+OTP+'of your mail</p>'
        }

        transporter.sendMail(mailOptions, function(error,info){
            if (error) {
                console.log(error);
            }else{
                console.log('Email has been sent :- ',info.response);
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendVerifyMail
}