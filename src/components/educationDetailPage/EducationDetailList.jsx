import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const EducationDetailList = ({ educationList,
    staticText,
    EducationDetailForm,
    DatePicker,
    handleChange,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addEducation,
    handleEdit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div>
                {
                    addEducation ? <EducationDetailForm
                        staticText={staticText}
                        DatePicker={DatePicker}
                        handleModal={handleModal}
                        handleChange={handleChange}
                        handleSave={handleSave}
                        formData={formData}
                    /> : <div></div>
                }
            </div>
            <div className="box_flex_col_left">
                {
                    //educationDetailCard
                    educationList.length > 0 ? educationList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.universityName}</p><p className='text_regular'>{ele.universityName}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.degree}</p><p className='text_regular'>{ele.degree}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.field}</p><p className='text_regular'>{ele.field}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.period}</p><p className='text_regular'>{ele.startDate.month} / {ele.startDate.year} to {ele.presentHere ? "present" : ele.endDate.month + ' / ' + ele.endDate.year}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.detail}</p><p className='text_regular'>{ele.detail}</p>
                            </div>
                            <div className="box_flex_row_right">
                                <button id='delete' className='button_white' value = {index}onClick={handleDelete}>{staticText.delete}</button>
                                <button value={index} className="button_regular" onClick={handleEdit} >{staticText.edit}</button>
                            </div>
                        </div>
                    ) : <div></div>
                }
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={() => handleModal(true)}>{staticText.addEducation}</button>
                    <button className="button_regular">{staticText.submitEducation}</button>
                </div>
            </div>
        </div>
    )
}

export default EducationDetailList