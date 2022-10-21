import React, {useState} from 'react'

const WithSocialLinkPage = (container) => {
    return (props) => {
        const[input, setInput] = useState({})

        return (
            <>
                <container.SocialLinkForm
                    staticText={container.staticText}
                    useNavigate={container.useNavigate}
                />
            </>
        )
    }
}

export default WithSocialLinkPage