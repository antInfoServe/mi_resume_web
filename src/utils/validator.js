const validatorFactory = () => new Validator()

class Validator {
    constructor() {
    }

    name(name) {
        if (name == "") {
            throw new Error('please enter your name')
        }
        const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        if(regex.test(name)){
            throw new Error("name should not contain any special characters")
        }
        return true
    }

    mobileNo(mobileNo) {
        const regex = /^[5-9]\d{9}$/
        return regex.test(mobileNo)
    }

    emailId(email) {
        if (email == "") {
            throw new Error('please enter email id')
            return
        }
        const regex = /^[a-zA-Z0-9][a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!regex.test(email)){
            throw new Error("please enter a valid email id")
        }
        return true
    }

    password(password, reEnterPassword) {
        if (password == "") {
            throw new Error('please enter password')
            return
        }
        if (reEnterPassword == "") {
            throw new Error('please re-enter password')
            return
        }
        if(password.length < 6 || reEnterPassword.length < 6){
            throw new Error('password should have least 6 characters')
        }
        if (password != reEnterPassword) {
            throw new Error("password mismatch")
        }
        return true
    }
}

export default validatorFactory