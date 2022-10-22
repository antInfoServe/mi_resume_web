import React from 'react'

const ReferenceDetailForm = ({ staticText, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div>
            <div className='box_modal'>
                <div className='box_flex_row_right'>
                    <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
                </div>
                <div>
                    <p className='text_regular'>{staticText.name}</p>
                    <input id='employerName' value={formData.name} onChange={handleChange} className='input_box_regular' placeholder={staticText.name} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.companyName}</p>
                    <input id='designation' className='input_box_regular' value={formData.companyName} onChange={handleChange} placeholder={staticText.companyName} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.designation}</p>
                    <input id='designation' className='input_box_regular' value={formData.designation} onChange={handleChange} placeholder={staticText.designation} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.mobile}</p>
                    <input id='designation' className='input_box_regular' value={formData.mobile} onChange={handleChange} placeholder={staticText.mobile} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.email}</p>
                    <input id='designation' className='input_box_regular' value={formData.email} onChange={handleChange} placeholder={staticText.email} />
                </div>
                <div className='box_flex_row_right'>
                    <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
                </div>
                
            </div>
        </div>
    )
}

export default ReferenceDetailForm