import React from "react";
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
    handleAdd,
    addCourse,
    handleEdit,
    handleMove,
    handleSubmit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <img src={MiResumeLogo} alt="MiResume.org logo" />
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
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={handleAdd}>{staticText.add}</button>
                    <button className="button_regular" onClick={handleSubmit}>{staticText.submit}</button>
                </div>
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
                                {index > 0 ? <button className="button_white" name="moveUp" id={index} onClick={handleMove}>↑</button> : null}
                                {index < courseList.length - 1 ? <button className="button_white" name="moveDown" id={index} onClick={handleMove}>↓</button> : <div className='button_spacer'></div>}
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

export default CourseDetailList