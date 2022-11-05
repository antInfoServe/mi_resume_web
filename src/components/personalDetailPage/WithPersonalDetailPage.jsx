import React, { useState, useEffect } from 'react'

const WithPersonalDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {

        const [formData, setFormData] = useState(() => {
            if (Object.keys(resumeData.personal).length === 0) {
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
                gtag('event', 'click', {
                    'event_category': 'personalPage',
                    'event_label': 'submit personal details'
                })
                window.location.href = '/education'
            } catch (err) {
                window.alert(err.message)
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