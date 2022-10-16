import React from 'react'
import staticText from '../../utils/staticText';

const WithLandingPage = (container) => {
    return class LandingPageContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                staticText: container.staticText
            }
        }

        render() {
            const { staticText } = this.state
            return (
                <>
                    <container.LandingPageForm
                        staticText={staticText}
                    />
                </>
            )
        }
    }
}

export default WithLandingPage