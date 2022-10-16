import React from 'react'
import MiResumeLogo from '../../assets/mi_resume_logo.svg'
import LandingPageVector from '../../assets/landing_page_vector.svg'

const LandingPageForm = ({ staticText, useNavigate }) => {
    const navigate = useNavigate()
    return (
        <div className='display_regular'>
            <div className='box_flex_row box_banner'>
                <p className='text_regular'>{staticText.bannerText}</p>
                <button className='button_regular'>{staticText.bannerButton}</button>
            </div>
            <div className='box_flex_col'>
                <MiResumeLogo className="logo_landing"/>
                <p className='text_h1'>{staticText.landingPageTitle}</p>
                <p className='text_regular'>{staticText.resumesCreated}</p>
                <LandingPageVector />
                <button className='button_regular' onClick={()=>navigate("/personalDetail")}>{staticText.newResume}</button>
                <button className='button_regular'>{staticText.existingResume}</button>
            </div>
        </div>
    )
}

export default LandingPageForm