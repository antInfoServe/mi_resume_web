import React, { useState } from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const ReferenceDetailList = ({ referenceList,
    staticText,
    ReferenceDetailForm,
    handleChange,
    formData,
    handleSave,
    handleDelete,
    handleModal,
    addReference,
    handleEdit
}) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div>
                {
                    addReference ? <ReferenceDetailForm
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
                    //referenceDetailCard
                    referenceList.length > 0 ? referenceList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_label'>{staticText.name}</p><p className='text_regular'>{ele.name}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.companyName}</p><p className='text_regular'>{ele.companyName}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.designation}</p><p className='text_regular'>{ele.designation}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.mobile}</p><p className='text_regular'>{ele.mobile}</p>
                            </div>
                            <div>
                                <p className='text_label'>{staticText.email}</p><p className='text_regular'>{ele.email}</p>
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

export default ReferenceDetailList