import React from 'react'

const WithLandingPage = (container) => {
    return (props) => {
        return (
            <>
                <container.LandingPageForm
                    staticText={container.staticText}
                    useNavigate={container.useNavigate}
                />
            </>
        )
    }
}

export default WithLandingPage