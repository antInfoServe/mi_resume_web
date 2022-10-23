import React, { useState } from "react";

const WithEducationDetailPage = (container) => {
    return (props) => {
        const [educationList, setEducationList] = useState([])
        const [formData, setFormData] = useState({ universityName: '', degree: container.staticText.phd, field: '', presentHere: false, startDate: {}, endDate: {}, detail: '' })
        const [addEducation, setAddEducation] = useState(true)

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            const data = { ...formData }
            if (e.target.id.includes('startDate')) {
                data.startDate[e.target.name] = e.target.value
                return setFormData(data)
            }

            if (e.target.id.includes('startDate')) {
                data.endDate[e.target.name] = e.target.value
                return setFormData(data)
            }

            if (e.target.id == 'presentHere') {
                data[e.target.id] = e.target.checked
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

        const handleAddEducation = () => {
            setFormData({ presentHere: false, startDate: {}, endDate: {} })
            return handleModal(true)
        }

        const handleSave = () => {
            try {
                const list = [...educationList]
                container.validator().addEducation(formData)
                list.push(formData)
                setEducationList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleDelete = (e) => {
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
                    addEducation={addEducation}
                    handleAddEducation={handleAddEducation}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleModal={handleModal}
                    handleEdit={handleEdit}
                />
            </>
        )
    }
}

export default WithEducationDetailPage