import React from 'react'
import MiResumeLogo from '../../assets/mi_resume_logo.svg'
import FreeTag from '../../assets/free_tag_mi_resume.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Youtube from '../../assets/youtube.svg'

const LandingPageForm = ({ staticText, useNavigate }) => {

    const gaEvent = (label) => gtag('event', 'click', {
        'event_category': 'landingPage',
        'event_label': label
    })
    const navigate = useNavigate()
    return (
        <div className='display_landing'>
            <div className='box_banner_landing'>
                <img src={MiResumeLogo} alt="MiResume.org logo" />
            </div>
            <div className='box_flex_landing'>
                <div className='box_flex_row'>
                    <div>
                        <h1 className='text_h1'>{staticText.landingPageTitle}</h1>
                    </div>
                    <img src={FreeTag} />
                </div>
                <button className='button_large' onClick={() => {
                    gaEvent(staticText.newResume)
                    return navigate("/personal")
                }}>{staticText.newResume}</button>
                <br /><br />
                <button className='button_link' onClick={() => gaEvent(staticText.viewSampleResume)}>{staticText.viewSampleResume}</button>
                <br /><br />
                <p className='text_regular'>{staticText.followUs}</p>
                <div className='box_flex_row_left'>
                    <a href="https://www.facebook.com/miresumeorg/" target='_blank'><img src={Facebook} alt='click to visit MiResume facebook page' /></a>
                    <a href="https://www.instagram.com/mi_resume/" target='_blank'><img src={Instagram} alt="click to visit MiResume instagam page" /></a>
                    <img src={Whatsapp} alt="click to chat with MiResume on whatsapp" />
                    <img src={Youtube} alt="click to see how to make resume on yourtube by MiResume" />
                </div>
            </div>
        </div>
    )
}

export default LandingPageForm