import React from 'react'

const EducationDetailForm = ({ staticText, DatePicker }) => {

    return (
        <div className='display_regular'>
            <div className='box_modal'>
                <div className='box_flex_row_right'>
                    <button className='button_link'>{staticText.closeModal}</button>
                </div>
                <div>
                    <p className='text_regular'>{staticText.universityName}</p>
                    <input id='universityName' className='input_box_regular' placeholder={staticText.universityName} />
                </div>
                <div>
                    <p className='text_regular'>{staticText.degree}</p>
                    <select id="degree" className='dropdown_regular'>
                        <option value="phd">{staticText.phd}</option>
                        <option value="masters">{staticText.masters}</option>
                        <option value="pdgm">{staticText.pgdm}</option>
                        <option value="graduation">{staticText.graduation}</option>
                        <option value="diploma">{staticText.diploma}</option>
                        <option value="tenthPlusTwo">{staticText.tenthPlusTwo}</option>
                        <option value="tenth">{staticText.tenth}</option>
                    </select>
                </div>
                <div>
                    <p className='text_regular'>{staticText.field}</p>
                    <input id='field' className='input_box_regular' placeholder={staticText.field} />
                </div>
                <div>
                    <DatePicker id='startDate' staticText={staticText} />
                </div>
                <div>
                    <DatePicker id='endDate' staticText={staticText} />
                </div>
                <div>
                    <label><input className='checkbox_regular' type='checkbox' id='presentHere' value='presentHere' /> {staticText.presentHere}</label>
                </div>
                <div>
                    <p className='text_regular'>{staticText.detail}</p>
                    <textarea id='detail' className='text_area_regular' placeholder={staticText.detail} />
                </div>
                <div className='box_flex_row'>
                    <button id='delete' className='button_white'>{staticText.delete}</button>
                    <button id='submit' className='button_regular'>{staticText.submitEducation}</button>
                </div>
            </div>
        </div>
    )
}

export default EducationDetailForm