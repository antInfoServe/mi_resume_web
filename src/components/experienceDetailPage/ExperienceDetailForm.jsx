import React from 'react'

const ExperienceDetailForm = ({ staticText, DatePicker, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div className='box_modal'>
            <div className='box_flex_row_right'>
                <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
            </div>
            <div>
                <p className='text_regular'>{staticText.employerName}</p>
                <input id='employerName' name={staticText.employerName} value={formData.employerName} onChange={handleChange} className='input_box_regular' placeholder={staticText.employerName} />
            </div>
            <div>
                <p className='text_regular'>{staticText.designation}</p>
                <input id='designation' name={staticText.designation} className='input_box_regular' value={formData.designation} onChange={handleChange} placeholder={staticText.designation} />
            </div>
            <div>
                <DatePicker id='startDate' staticText={staticText} date={formData.startDate} handleChange={handleChange} />
            </div>
            <div>
                <DatePicker id='endDate' staticText={staticText} date={formData.endDate} handleChange={handleChange} />
            </div>
            <div>
                <label><input className='checkbox_regular' type='checkbox' id='workHere' checked={formData.workHere} onChange={handleChange} /> {staticText.workHere}</label>
            </div>
            <div>
                <p className='text_regular'>{staticText.detail}</p>
                <textarea id='detail' className='text_area_regular' onChange={handleChange} placeholder={staticText.detail} value={formData.detail} />
            </div>
            <div className='box_flex_row_right'>
                <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
            </div>
        </div>
    )
}

export default ExperienceDetailForm