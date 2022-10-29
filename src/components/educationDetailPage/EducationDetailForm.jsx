import React from 'react'

const EducationDetailForm = ({ staticText, DatePicker, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div>
            <div className='box_modal'>
                <div className='box_flex_row_right'>
                    <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
                </div>
                <div>
                    <p className='text_regular'>{staticText.universityName}</p>
                    <input id='universityName' name={staticText.universityName} value={formData.universityName} onChange={handleChange} className='input_box_regular' placeholder={staticText.universityName} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.degree}</p>
                    <select id="degree" name={staticText.degree} value={formData.degree} className='dropdown_regular' onChange={handleChange}>
                        <option value={staticText.phd}>{staticText.phd}</option>
                        <option value={staticText.masters}>{staticText.masters}</option>
                        <option value={staticText.pgdm}>{staticText.pgdm}</option>
                        <option value={staticText.graduation}>{staticText.graduation}</option>
                        <option value={staticText.diploma}>{staticText.diploma}</option>
                        <option value={staticText.tenthPlusTwo}>{staticText.tenthPlusTwo}</option>
                        <option value={staticText.tenth}>{staticText.tenth}</option>
                    </select>
                </div>
                <div>
                    <p className='text_regular'>{staticText.field}</p>
                    <input id='field' className='input_box_regular' name={staticText.field} value={formData.field} onChange={handleChange} placeholder={staticText.field} />
                </div>
                <div>
                    <DatePicker id='startDate' staticText={staticText} date={formData.startDate} handleChange={handleChange} />
                </div>
                <div>
                    <DatePicker id='endDate' staticText={staticText} date={formData.endDate} handleChange={handleChange} />
                </div>
                <div>
                    <label><input className='checkbox_regular' type='checkbox' id='presentHere' onChange={handleChange} checked={formData.presentHere} /> {staticText.presentHere}</label>
                </div>
                <div>
                    <p className='text_regular'>{staticText.detail}</p>
                    <textarea id='detail' name={staticText.detail} className='text_area_regular' value={formData.detail} onChange={handleChange} placeholder={staticText.detail} />
                </div>
                <div className='box_flex_row_right'>
                    <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
                </div>
            </div>
        </div>
    )
}

export default EducationDetailForm