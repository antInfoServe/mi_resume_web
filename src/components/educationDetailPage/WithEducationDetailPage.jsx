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
            detail: 'enwfonqejrvoqerrnarneobvnwtroienovsDvneqoraslvnowenbow 4euarbsnovn2we',
            presentHere: true
        },
        {
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
            detail: 'enwfonqejrvoqerrnarneobvnwtroienovsDvneqoraslvnowenbow 4euarbsnovn2we',
            presentHere: false
        }])
        const [formData, setFormData] = useState({ presentHere: false, startDate: {}, endDate: {} })
        const [addEducation, setAddEducation] = useState(true)

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

        const handleEdit = (e) => {
            setFormData(educationList[e.target.value])
            setAddEducation(true)
            return handleDelete(e)
        }
    
        const handleModal = (bool) => {
            return setAddEducation(bool)
        }

        const handleSave = () => {
            const list = [...educationList]
            list.push(formData)
            setEducationList(list)
            return handleModal(false)
        }

        const handleDelete =(e) =>{
            const list = [...educationList]
            list.splice(e.target.value, 1)
            return setEducationList(list)
        }

        return (
            <>
                <container.EducationDetailList
                    staticText={container.staticText}
                    educationList={educationList}
                    EducationDetailForm={container.EducationDetailForm}
                    DatePicker={container.DatePicker}
                    formData={formData}
                    addEducation = {addEducation}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete = {handleDelete}
                    handleModal = {handleModal}
                    handleEdit = {handleEdit}
                />
            </>
        )
    }
}

export default WithEducationDetailPage