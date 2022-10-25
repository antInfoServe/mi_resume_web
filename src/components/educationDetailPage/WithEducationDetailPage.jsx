import React, { useState } from "react";

const WithEducationDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        
        const [educationList, setEducationList] = useState(() => {
            if (resumeData.education == undefined) {
                return []
            }
            return resumeData.education
        })
        
        const [formData, setFormData] = useState({ universityName: '', degree: container.staticText.phd, field: '', presentHere: false, startDate: {}, endDate: {}, detail: '' })
        const [addEducation, setAddEducation] = useState(true)

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            const data = { ...formData }
            if (e.target.id.includes('startDate')) {
                data.startDate[e.target.name] = e.target.value
                return setFormData(data)
            }

            if (e.target.id.includes('endDate')) {
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

        const handleAdd = () => {
            setFormData({ universityName: '', degree: container.staticText.phd, field: '', presentHere: false, startDate: {}, endDate: {}, detail: '' })
            return handleModal(true)
        }

        const handleSave = () => {
            try {
                const list = [...educationList]
                container.validator().addEducation(formData)
                list.unshift(formData)
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

        const handleSubmit = () => {
            try {
                handleSetResume('education', educationList)
            } catch (err) {
                console.log(err.message)
            }
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
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleModal={handleModal}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithEducationDetailPage