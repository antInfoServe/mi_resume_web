import React, { useState } from 'react'

const WithSocialLinkPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [formData, setFormData] = useState(() => {
            if (Object.keys(resumeData.socialLink).length === 0) {
                return { linkedin: '', instagram: '', facebook: '', github: '', portfolio: '' }
            }
            return resumeData.socialLink
        })

        const handleChange = (e) => {
            const data = { ...formData }
            data[e.target.id] = e.target.value
            return setFormData(data)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('socialLink', formData)
                gtag('event', 'click', {
                    'event_category': 'socialLinkPage',
                    'event_label': 'submit social link detail'
                })
                return window.location.href = '/menu'
            } catch (err) {
                console.log(err.message)
            }
        }

        return (
            <>
                <container.SocialLinkForm
                    staticText={container.staticText}
                    useNavigate={container.useNavigate}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithSocialLinkPage