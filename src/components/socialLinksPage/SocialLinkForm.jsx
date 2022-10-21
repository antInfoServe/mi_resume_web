import React from 'react'
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const SocialLinkForm = ({ staticText, input, handleChange, handleBlur, handleSubmit }) => {
    return (
        <div className='display_regular'>
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div className='box_flex_col_left'>
                {
                    [
                        "linkedin",
                        "instagram",
                        "facebook",
                        "github",
                        "portfolio"

                    ].map((ele, index) =><div key={index}>
                        <p className='text_regular'>{staticText[ele]}</p>
                        <input className='input_box_regular' type='url' id={ele} placeholder={staticText[ele]} />
                    </div>)
                }
            </div>
            <div className='box_flex_row_right'>
                <button className='button_regular'>{staticText.submit}</button>
            </div>
        </div>
    )
}

export default SocialLinkForm