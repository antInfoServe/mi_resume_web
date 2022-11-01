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
    handleAdd,
    addExperience,
    handleEdit,
    handleMove,
    handleSubmit
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
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={handleAdd}>{staticText.add}</button>
                    <button className="button_regular" onClick={handleSubmit}>{staticText.submitExperience}</button>
                </div>
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
                                <p className="text_label">{staticText.detail}</p>
                                {
                                    ele.detail.map((e, index) => <p key={index} className='text_regular'>● {e}</p>)
                                }
                            </div>
                            <div className="box_flex_row_right">
                                {index > 0 ? <button className="button_white" name="moveUp" id={index} onClick={handleMove}>↑</button> : null}
                                {index < experienceList.length -1 ? <button className="button_white" name="moveDown" id={index} onClick={handleMove}>↓</button> : <div className='button_spacer'></div>}
                                <button id='delete' className='button_white' value={index} onClick={handleDelete}>{staticText.delete}</button>
                                <button value={index} className="button_regular" onClick={handleEdit} >{staticText.edit}</button>
                            </div>
                        </div>
                    ) : <div></div>
                }
            </div>
        </div>
    )
}

export default ExperienceDetailList