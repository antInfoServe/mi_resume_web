import React, {useState} from 'react'

const WithPersonalDetailPage = (container) => {
    return (props) => {
        const[input, setInput] = useState({})

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = "black"
            input[e.target.id] = e.target.value
            setInput(input)
            return
        }

        const handleBlur = (e) => {
            try {
                switch (e.target.id) {
                    case "name":
                        container.validator().name(e.target.value)
                        break
                    case "mobile":
                        container.validator().mobile(e.target.value)
                        break
                    case "email":
                        container.validator().email(e.target.value)
                        break
                    case "city":
                        container.validator().city(e.target.value)
                        break
                    case "pincode":
                        container.validator().pincode(e.target.value)
                }
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleSubmit = () => {
            try {
                container.validator().personalDetails(input)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
            }

        }
        return (
            <>
                <container.PersonalDetailForm
                    staticText={container.staticText}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    input={input}
                />
            </>
        )
    }
}

export default WithPersonalDetailPage