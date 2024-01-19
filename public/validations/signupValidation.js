// let lastValidatedField = null;

const fnameError = document.getElementById("fnameErr")
const lnameError = document.getElementById("lnameErr")
const emailError = document.getElementById("emailErr")
const mobileError = document.getElementById("mobileErr")
const passwordError = document.getElementById("passwordErr")
const cpasswordError = document.getElementById("cpasswordErr")
const userExistError = document.getElementsByClassName("erro")


const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

function clearErrorMessages () {
    fnameError.innerHTML = '';
    lnameError.innerHTML = '';
    emailError.innerHTML = '';
    mobileError.innerHTML = '';
    passwordError.innerHTML = '';
    cpasswordError.innerHTML = '';
    userExistError.innerHTML = '';
}

function validateFname () {
    let name = document.getElementById("fname").value.trim()
    if (name.length===0){
        fnameError.innerHTML = "First name required"
        // lastValidatedField = 'fname'
        return false
    }
    else if (!name.match(nameRegex)){
        fnameError.innerHTML = "Enter valid First name"
        // lastValidatedField = 'fname'
        return false
    }else{
        fnameError.innerHTML = ''
        return true
    }
}

function validateLname() {
    let name = document.getElementById("lname").value.trim()
    if (name.length===0){
        lnameError.innerHTML = "Last name required"
        // lastValidatedField = 'lname'
        return false
    }
    else if (!name.match(nameRegex)){
        lnameError.innerHTML = "Enter valid Last Name"
        // lastValidatedField = 'lname'
        return false
    }else {
        lnameError.innerHTML = ''
        return true
    }
}

function validateEmail() {
    let email = document.getElementById("email").value.trim()
    if (email.length===0){
        emailError.innerHTML = "Email required"
        // lastValidatedField = 'email'
        return false
    }
    else if (!email.match(emailRegex)){
        emailError.innerHTML = "Enter valid Email"
        // lastValidatedField = 'email'
        return false
    }else {
        emailError.innerHTML = ''
        return true
    }
}

function validateMobile() {
    let mobile = document.getElementById("mobile").value.trim()
    if (mobile.length===0){
        mobileError.innerHTML = "mobile number required"
        // lastValidatedField = 'mobile'
        return false
    }
    else if (!mobile.match(mobileRegex)){
        mobileError.innerHTML = "Enter valid mobile number"
        // lastValidatedField = 'mobile'
        return false
    }else {
        mobileError.innerHTML = ''
        return true
    }
}

function validatePassword() {
    let password = document.getElementById("password").value.trim()
    if (password.length===0){
        passwordError.innerHTML = "password required"
        // lastValidatedField = 'password'
        return false
    }
    else if (!password.match(passwordRegex)){
        passwordError.innerHTML = "Enter valid password"
        // lastValidatedField = 'password'
        return false
    }else {
        passwordError.innerHTML = ''
        return true
    }
}

function validateCpassword() {
    let password = document.getElementById("password").value.trim()
    let cpassword = document.getElementById("cpassword").value.trim()
    if (cpassword.length===0){
        cpasswordError.innerHTML = "Confirm password required"
        // lastValidatedField = 'cpassword'
        return false
    }
    else if (password!==cpassword){
        cpasswordError.innerHTML = "Password doesn't match"
        // lastValidatedField = 'cpassword'
        return false
    } else {
        cpasswordError.innerHTML = ''
        return true
    }
}

function validateSignup(event) {
    clearErrorMessages();
    if (!validateFname() || !validateLname() || !validateEmail() || !validateMobile() || !validatePassword() || !validateCpassword()) {
        event.preventDefault();
        return false;
    }
    return true;
}

function validateLogin(event) {
    clearErrorMessages();
    if (!validateEmail() || !validatePassword()) {
        event.preventDefault();
        return false;
    }
    return true;
}