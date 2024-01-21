const bcrypt = require("bcrypt")

const getOTP = () => Math.floor( 1000000*Math.random() ) 

const securePassword = async (pass) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(pass,salt)
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getOTP,securePassword}