import React, {useState} from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const EducationDetailList = ({ educationList, staticText, EducationDetailForm, DatePicker, handleChange, formData, handleSave }) => {
    const [addEducation, setAddEducation] = useState(true)

    const handleModal = (bool) =>{
        return setAddEducation(bool)
    }
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
                                <p className='text_regular'>{staticText.universityName}</p>
                                <p className='text_regular'>{staticText.degree}</p>
                                <p className='text_regular'>{staticText.field}</p>
                                <p className='text_regular'>{staticText.period}</p>
                                <p className='text_regular'>{staticText.detail}</p>
                            </div>
                            <div>
                                <p className='text_regular'>{ele.universityName}</p>
                                <p className='text_regular'>{ele.degree}</p>
                                <p className='text_regular'>{ele.field}</p>
                                <p className='text_regular'>{ele.startDate.month}, {ele.startDate.year} to {ele.endDate.month}, {ele.endDate.year}</p>
                                <p className='text_regular'>{ele.detail}</p>
                                <div className="box_flex_row_right"><button className="button_regular">{staticText.edit}</button></div>

                            </div>
                        </div>
                    ) : <div></div>
                }
                <div className="box_flex_row">
                    <button className="button_white" onClick={() => setAddEducation(!addEducation)}>{staticText.addEducation}</button>
                    <button className="button_regular">{staticText.submitEducation}</button>
                </div>
            </div>
        </div>
    )
}

export default EducationDetailList