import React, { useState } from "react";

const WithEducationDetailPage = (container) => {
    return (props) => {
        const [educationList, setEducationList] = useState([{
            universityName: 'Gurugobind Singh World University',
            degree: 'Graduation',
            field: 'Industrial Engineering',
            startDate: {
                month:'10',
                year:'2015'
            },
            endDate:{
                month: '8',
                year:'2019'
            },
            detail: 'enwfonqejrvoqerrnarneobvnwtroienovsDvneqoraslvnowenbow 4euarbsnovn2we'
        }])
        const [formData, setFormData] = useState({ presentHere: false, startDate: {}, endDate: {} })

        const handleChange = (e) => {
            const data = formData
            if (e.target.id.includes('Date')) {
                data[e.target.id][e.target.name] = e.target.value
                return setFormData(data)
            }
            if (e.target.id == 'presentHere') {
                data[e.target.id] = !formData.presentHere
                return setFormData(data)
            }
            data[e.target.id] = e.target.value
            return setFormData(data)
        }

        const handleSave = () => {
            const list = educationList
            list.push(formData)
            setEducationList(list)
        }

        return (
            <>
                <container.EducationDetailList
                    staticText={container.staticText}
                    educationList={educationList}
                    EducationDetailForm={container.EducationDetailForm}
                    DatePicker={container.DatePicker}
                    handleChange={handleChange}
                    formData={formData}
                    handleSave={handleSave}
                />
            </>
        )
    }
}

export default WithEducationDetailPage