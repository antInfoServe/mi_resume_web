import React, { useState, useEffect } from 'react'

const WithPersonalDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        
        const [formData, setFormData] = useState(() => {
            if (resumeData.personal == undefined) {
                return { name: "", mobile: "", email: "", city: "", pincode: "" }
            }
            return resumeData.personal
        })

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = "black"
            const data = { ...formData }
            data[e.target.id] = e.target.value
            setFormData(data)
            return
        }

        const handleSubmit = () => {
            try {
                container.validator().personalDetails(formData)
                handleSetResume('personal', formData)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
            }

        }
        return (
            <>
                <container.PersonalDetailForm
                    staticText={container.staticText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
            </>
        )
    }
}

export default WithPersonalDetailPage