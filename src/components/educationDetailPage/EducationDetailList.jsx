import React from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const EducationDetailList = ({ educationList, staticText, addEducation, EducationDetailForm, DatePicker }) => {
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
                    /> : <div></div>
                }
            </div>
            <div className="box_flex_col_left">
                {
                    //educationDetailCard
                    educationList.length > 0 ? educationList.map((ele, index) =>
                        <div key={index} className="box_card">
                            <div>
                                <p className='text_regular'>{staticText.universityName}</p>
                                <p className='text_regular'>{staticText.degree}</p>
                                <p className='text_regular'>{staticText.field}</p>
                                <p className='text_regular'>{staticText.startDate}</p>
                                <p className='text_regular'>{staticText.endDate}</p>
                                <p className='text_regular'>{staticText.detail}</p>
                            </div>
                            <div>
                                <p className='text_regular'>{ele.universityName}</p>
                                <p className='text_regular'>{ele.degree}</p>
                                <p className='text_regular'>{ele.field}</p>
                                <p className='text_regular'>{ele.startDate}</p>
                                <p className='text_regular'>{ele.endDate}</p>
                                <p className='text_regular'>{ele.detail}</p>
                                <div className="box_flex_row_right"><button className="button_regular">{staticText.edit}</button></div>

                            </div>

                        </div>
                    ) : <div></div>
                }
            </div>
        </div>
    )
}

export default EducationDetailList