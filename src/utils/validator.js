const validatorFactory = () => new Validator()

class Validator {
    constructor() {
        this.error = null
    }

    name(name) {
        if (name == "" || name == undefined) {
            this.error = new Error('please enter your name')
            this.error.id = 'name'
            throw this.error
        }
        const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/
        if (regex.test(name)) {
            this.error = new Error("name should not contain any special characters or numeric values")
            this.error.id = "name"
            throw this.error
        }
        return true
    }

    email(email) {
        if (email == "" || email == undefined) {
            this.error = new Error('please enter email address')
            this.error.id = "email"
            throw this.error
        }
        const regex = /^[a-zA-Z0-9][a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/
        if (!regex.test(email)) {
            this.error = new Error("please enter a valid email id")
            this.error.id = "email"
            throw this.error
        }
        return true
    }

    city(city) {
        const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/
        if (regex.test(city)) {
            this.error = new Error("city should not contain any special characters or numeric values")
            this.error.id = 'city'
            throw this.error
        }
        return true
    }

    mobile(mobile) {
        if (mobile == "" || mobile == undefined) {
            this.error = new Error('please enter your mobile number')
            this.error.id = 'mobile'
            throw this.error
        }
        const regex = /^[5-9]\d{9}$/
        if (!regex.test(mobile)) {
            this.error = new Error("please enter a valid mobile number")
            this.error.id = 'mobile'
            throw this.error
        }
        return true
    }

    pincode(pincode) {
        if (pincode == "" || pincode == undefined) {
            return
        }
        const regex = /^\d{7}$/
        if (!regex.test(pincode)) {
            this.error = new Error("please enter a valid pincode")
            this.error.id = 'pincode'
            throw this.error
        }
        return true
    }

    personalDetails({ name, mobile, email, city, pincode }) {
        this.name(name)
        this.mobile(mobile)
        this.email(email)
        this.city(city)
        this.pincode(pincode)
    }
}
export default validatorFactory