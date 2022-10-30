import React from 'react'

const LanguageDetailForm = ({ staticText, handleModal, handleChange, handleSave, formData }) => {
    return (
        <div className='box_modal_small'>
            <div className='box_flex_row_right'>
                <button className='button_link' onClick={() => handleModal(false)}>{staticText.closeModal}</button>
            </div>
            <div>
                <p className='text_regular'>{staticText.language_label}</p>
                <input id='language' value={formData.language} onChange={handleChange} className='input_box_regular' placeholder={staticText.language_label} />
            </div>
            <div>
                <p className='text_regular'>{staticText.proficiency}</p>
                <select id="proficiency" value={formData.proficiency} className='dropdown_regular' onChange={handleChange}>
                    <option value={staticText.beginner}>{staticText.beginner}</option>
                    <option value={staticText.intermediate}>{staticText.intermediate}</option>
                    <option value={staticText.expert}>{staticText.expert}</option>
                </select>
            </div>
            <div className='box_flex_row_right'>
                <button id='submit' className='button_regular' onClick={handleSave}>{staticText.save}</button>
            </div>
        </div>
    )
}

export default LanguageDetailForm