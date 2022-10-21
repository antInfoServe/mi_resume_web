import React from 'react'

const CourseDetailForm = ({ staticText, DatePicker, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div>
            <div className='box_modal'>
                <div className='box_flex_row_right'>
                    <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
                </div>
                <div>
                    <p className='text_regular'>{staticText.instituteName}</p>
                    <input id='instituteName' value={formData.instituteName} onChange={handleChange} className='input_box_regular' placeholder={staticText.instituteName} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.courseName}</p>
                    <input id='courseName' className='input_box_regular' value={formData.courseName} onChange={handleChange} placeholder={staticText.courseName} />
                </div>
                <div>
                    <DatePicker id='startDate' staticText={staticText} date={formData.startDate} handleChange={handleChange} />
                </div>
                <div>
                    <DatePicker id='endDate' staticText={staticText} date={formData.endDate} handleChange={handleChange} />
                </div>
                <div>
                    <label><input className='checkbox_regular' type='checkbox' id='presentHere' value={formData.presentHere} onChange={handleChange} /> {staticText.presentHere}</label>
                </div>
                <div>
                    <p className='text_regular'>{staticText.certificate}</p>
                    <input id='certificate' className='input_box_regular' onChange={handleChange} placeholder={staticText.certificate} />
                </div>
                <div className='box_flex_row_right'>
                    <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailForm