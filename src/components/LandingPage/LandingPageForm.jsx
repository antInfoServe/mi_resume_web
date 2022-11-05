import React from 'react'
import MiResumeLogo from '../../assets/mi_resume_logo.svg'
import LandingPageVector from '../../assets/landing_page_vector.svg'
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
        <div className='display_regular'>
            <div className='box_banner '>
                <p className='text_regular'>{staticText.bannerText}</p>
                <button className='button_regular'>{staticText.bannerButton}</button>
            </div>
            <div className='box_flex_col'>
                <img src={MiResumeLogo} className="logo_landing" alt="MiResume.org logo"/>
                <p className='text_h1'>{staticText.landingPageTitle}</p>
                <p className='text_regular'>{staticText.resumesCreated}</p>
                <img src={LandingPageVector} alt="create resumes online with MiResume.org"/>
                <button className='button_regular' onClick={() => {
                    gaEvent(staticText.newResume)
                    return navigate("/personal")
                }}>{staticText.newResume}</button>
                <div className='box_flex_row'>
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