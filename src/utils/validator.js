const validatorFactory = (container) => new Validator(container)

class Validator {
    constructor(container) {
        this.error = null
        this.staticText = container.staticText
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
        const regex = /^\d{6}$/
        if (!regex.test(pincode)) {
            this.error = new Error("please enter a valid pincode")
            this.error.id = 'pincode'
            throw this.error
        }
        return true
    }
    isEmpty(value, id, name = 'field') {
        if (value == '' || value == undefined) {
            this.error = new Error(`${name} cannot be empty`)
            this.error.id = id
            throw this.error
        }
        return true
    }

    isDateEmpty(date, id, name = 'date') {
        if (date.month == '' || date.month == undefined) {
            this.error = new Error(`${name} month cannot be empty`)
            this.error.id = id + 'Month'
            throw this.error
        }

        if (date.year == '' || date.year == undefined) {
            this.error = new Error(`${name} year cannot be empty`)
            this.error.id = id + 'Year'
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

    addEducation({ universityName, degree, field, startDate, endDate, presentHere }) {
        this.isEmpty(universityName, 'universityName', this.staticText.universityName)
        this.isEmpty(degree, 'degree', this.staticText.degree)
        this.isEmpty(field, 'field', this.staticText.field)
        this.isDateEmpty(startDate, 'startDate', this.staticText.startDate)
        if (!presentHere) {
            this.isDateEmpty(endDate, 'endDate', this.staticText.endDate)
        }
        return true
    }

    addExperience({ employerName, designation, startDate, endDate, workHere }) {
        this.isEmpty(employerName, 'employerName', this.staticText.employerName)
        this.isEmpty(designation, 'designation', this.staticText.designation)
        this.isDateEmpty(startDate, 'startDate', this.staticText.startDate)
        if (!workHere) {
            this.isDateEmpty(endDate, 'endDate', this.staticText.endDate)
        }
        return true
    }

    addLanguage({ language, proficiency }) {
        this.isEmpty(language, 'language', this.staticText.language)
        this.isEmpty(proficiency, 'proficiency', this.staticText.proficiency)
        return true
    }

    addCourse({instituteName, courseName, startDate, endDate, presentHere}){
        this.isEmpty(instituteName, 'instituteName', this.staticText.instituteName)
        this.isEmpty(courseName, 'courseName', this.staticText.courseName)
        this.isDateEmpty(startDate, 'startDate', this.staticText.startDate)
        if (!presentHere) {
            this.isDateEmpty(endDate, 'endDate', this.staticText.endDate)
        }
        return true
    }

    addSkill(value) {
        this.isEmpty(value, 'searchSkill')
        return true
    }

    addReference({name, companyName, designation, mobile, email}){
        this.isEmpty(name, 'name', this.staticText.name)
        this.isEmpty(companyName, 'companyName', this.staticText.companyName)
        this.isEmpty(designation, 'designation', this.staticText.designation)
        this.isEmpty(mobile, 'mobile', this.staticText.mobile)
        this.isEmpty(email, 'email', this.staticText.email)
        return true
    }
}
export default validatorFactory