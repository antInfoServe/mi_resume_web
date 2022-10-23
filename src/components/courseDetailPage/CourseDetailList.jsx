import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const CourseDetailList = ({ courseList,
    staticText,
    CourseDetailForm,
    DatePicker,
    handleChange,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addCourse,
    handleEdit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div>
                {
                    addCourse ? <CourseDetailForm
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
                    //courseDetailCard
                    courseList.length > 0 ? courseList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.instituteName}</p><p className='text_regular'>{ele.instituteName}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.courseName}</p><p className='text_regular'>{ele.courseName}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.period}</p><p className='text_regular'>{ele.startDate.month} / {ele.startDate.year} to {ele.presentHere ? "present" : ele.endDate.month + ' / ' + ele.endDate.year}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.certificate}</p><p className='text_regular'>{ele.certificate}</p>
                            </div>
                            <div className="box_flex_row_right">
                                <button id='delete' className='button_white' value = {index}onClick={handleDelete}>{staticText.delete}</button>
                                <button value={index} className="button_regular" onClick={handleEdit} >{staticText.edit}</button>
                            </div>
                        </div>
                    ) : <div></div>
                }
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={() => handleModal(true)}>{staticText.add}</button>
                    <button className="button_regular">{staticText.submit}</button>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailList