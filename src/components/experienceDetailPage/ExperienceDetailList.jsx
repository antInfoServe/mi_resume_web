import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const ExperienceDetailList = ({ experienceList,
    staticText,
    ExperienceDetailForm,
    DatePicker,
    handleChange,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addExperience,
    handleEdit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div>
                {
                    addExperience ? <ExperienceDetailForm
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
                    //experienceDetailCard
                    experienceList.length > 0 ? experienceList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.employerName}</p><p className='text_regular'>{ele.employerName}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.designation}</p><p className='text_regular'>{ele.designation}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.period}</p><p className='text_regular'>{ele.startDate.month} / {ele.startDate.year} to {ele.presentHere ? "present" : ele.endDate.month + ' / ' + ele.endDate.year}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.detail}</p><p className='text_regular'>{ele.detail}</p>
                            </div>
                            <div className="box_flex_row_right">
                                <button id='delete' className='button_white' value={index} onClick={handleDelete}>{staticText.delete}</button>
                                <button value={index} className="button_regular" onClick={handleEdit} >{staticText.edit}</button>
                            </div>
                        </div>
                    ) : <div></div>
                }
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={() => handleModal(true)}>{staticText.add}</button>
                    <button className="button_regular">{staticText.submitExperience}</button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceDetailList