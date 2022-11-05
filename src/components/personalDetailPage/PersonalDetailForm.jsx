import React from 'react'
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const PersonalDetailForm = ({ staticText, formData, handleChange, handleSubmit }) => {
    return (
        <div className='display_regular'>
            <div className='box_banner'>
                <img src={MiResumeLogo} alt="MiResume.org logo" />
            </div>
            <div className='box_flex_col_left'>
                <div>
                    <p className='text_regular'>{staticText.name}</p>
                    <input className='input_box_regular' id="name" onChange={handleChange} value={formData.name} type='text' placeholder={staticText.name} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.mobile}</p>
                    <input className='input_box_regular' id="mobile" onChange={handleChange} value={formData.mobile} type='text' placeholder={staticText.mobile} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.email}</p>
                    <input className='input_box_regular' id="email" onChange={handleChange} value={formData.email} type='text' placeholder={staticText.email} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.city}</p>
                    <input className='input_box_regular' id="city" onChange={handleChange} value={formData.city} type='text' placeholder={staticText.city} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.pincode}</p>
                    <input className='input_box_regular' id="pincode" onChange={handleChange} value={formData.pincode} type='text' placeholder={staticText.pincode} />
                </div>
            </div>
            <div className='box_flex_row_right'>
                <button className='button_regular' onClick={handleSubmit}>{staticText.submitPersonalDetails}</button>
            </div>
        </div>
    )
}

export default PersonalDetailForm