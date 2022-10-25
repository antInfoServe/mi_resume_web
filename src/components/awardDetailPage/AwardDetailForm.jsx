import React from 'react'

const AwardDetailForm = ({ staticText, DatePicker, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div>
            <div className='box_modal'>
                <div className='box_flex_row_right'>
                    <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
                </div>
                <div>
                    <p className='text_regular'>{staticText.issuer}</p>
                    <input id='issuer' name={staticText.issuer} value={formData.issuer} onChange={handleChange} className='input_box_regular' placeholder={staticText.issuer} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.title}</p>
                    <input id='title' className='input_box_regular' name={staticText.title} value={formData.title} onChange={handleChange} placeholder={staticText.title} />
                </div>
                <div>
                    <DatePicker id='issueDate' staticText={staticText} date={formData.issueDate} handleChange={handleChange} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.detail}</p>
                    <textarea id='detail' name={staticText.detail} className='text_area_regular' onChange={handleChange} placeholder={staticText.detail} />
                </div>
                <div className='box_flex_row_right'>
                    <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
                </div>
            </div>
        </div>
    )
}

export default AwardDetailForm