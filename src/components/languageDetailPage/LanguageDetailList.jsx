import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const LanguageDetailList = ({ languageList,
    staticText,
    LanguageDetailForm,
    handleChange,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    handleAdd,
    addLanguage,
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
                    addLanguage ? <LanguageDetailForm
                        staticText={staticText}
                        handleModal={handleModal}
                        handleChange={handleChange}
                        handleSave={handleSave}
                        formData={formData}
                    /> : <div></div>
                }
            </div>
            <div className="box_flex_col_left">
                {
                    //languageDetailCard
                    languageList.length > 0 ? languageList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.language}</p><p className='text_regular'>{ele.language}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.proficiency}</p><p className='text_regular'>{ele.proficiency}</p>
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

export default LanguageDetailList