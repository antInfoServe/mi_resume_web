import React from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const EducationDetailList = ({ educationList,
    staticText,
    EducationDetailForm,
    DatePicker,
    handleChange,
    handleAdd,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addEducation,
    handleEdit,
    handleSubmit,
    handleMove
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
            <img src={MiResumeLogo} alt="MiResume.org logo" />
            </div>
            <div>
                <div className="box_flex_row_right">
                    <button className="button_white" onClick={handleAdd}>{staticText.add}</button>
                    <button className="button_regular" onClick={handleSubmit}>{staticText.submitEducation}</button>
                </div>
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
                                <p className="text_label">{staticText.detail}</p>
                                {
                                    ele.detail.map((e, index) => <p key={index} className='text_regular'>● {e}</p>)
                                }
                            </div>
                            <div className="box_flex_row_right">
                                {index > 0 ? <button className="button_white" id={index} name="moveUp" onClick={handleMove}>↑</button> : null}
                                {index < educationList.length - 1 ? <button className="button_white" id={index} name="moveDown" onClick={handleMove}>↓</button> : <div className='button_spacer'></div>}
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

export default EducationDetailList