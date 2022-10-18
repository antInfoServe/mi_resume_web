import React, { useState } from "react";

const WithEducationDetailPage = (container) => {
    return (props) => {
        const [addEducation, setAddEducation] = useState(true)
        const [educationList, setEducationList] = useState([{
            universityName: 'Gurugobind Singh World University',
            degree: 'Graduation',
            field: 'Industrial Engineering',
            startDate: 'aug 2011',
            endDate: 'jun 2016',
            detail: 'enwfonqejrvoqerrnarneobvnwtroienovsDvneqoraslvnowenbow 4euarbsnovn2we'
        }])
        return (
            <>
                <container.EducationDetailList
                    staticText={container.staticText}
                    educationList={educationList}
                    addEducation={addEducation}
                    EducationDetailForm={container.EducationDetailForm}
                    DatePicker = {container.DatePicker}
                />
            </>
        )
    }
}

export default WithEducationDetailPage