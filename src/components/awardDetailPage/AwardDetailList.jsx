import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const AwardDetailList = ({ awardList,
    staticText,
    AwardDetailForm,
    DatePicker,
    handleChange,
    handleAdd,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addAward,
    handleEdit,
    handleSubmit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div>
                {
                    addAward ? <AwardDetailForm
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
                    //awardDetailCard
                    awardList.length > 0 ? awardList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.universityName}</p><p className='text_regular'>{ele.issuer}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.degree}</p><p className='text_regular'>{ele.title}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.issueDate}</p><p className='text_regular'>{ele.issueDate.month} / {ele.issueDate.year}</p>
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
                    <button className="button_white" onClick={handleAdd}>{staticText.add}</button>
                    <button className="button_regular" onClick={handleSubmit}>{staticText.submit}</button>
                </div>
            </div>
        </div>
    )
}

export default AwardDetailList