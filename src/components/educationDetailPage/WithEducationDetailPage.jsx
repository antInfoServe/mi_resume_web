import React, { useState } from "react";

const WithEducationDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {

        const [educationList, setEducationList] = useState(() => {
            if (resumeData.education.length === 0) {
                return []
            }
            return resumeData.education
        })

        const [formData, setFormData] = useState({ universityName: '', degree: container.staticText.phd, field: '', presentHere: false, startDate: { month: 1, year: 2022 }, endDate: { month: 1, year: 2022 }, detail: '' })
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
            setFormData({ universityName: '', degree: container.staticText.phd, field: '', presentHere: false, startDate: { month: 1, year: 2022 }, endDate: { month: 1, year: 2022 }, detail: '' })
            return handleModal(true)
        }

        const handleSave = () => {
            try {
                container.validator().addEducation(formData)
                const list = [...educationList]
                const data = formData
                data.detail = container.parser().stringToArray(data.detail)
                list.unshift(data)
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

        const handleMove = (e) => {
            let arr = [...educationList]
            if (e.target.name == 'moveUp') {
                arr = container.relocator().moveUp(arr, e.target.id)
                return setEducationList(arr)
            }
            arr = container.relocator().moveDown(arr, e.target.id)
            return setEducationList(arr)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('education', educationList)
                gtag('event', 'click', {
                    'event_category': 'educationPage',
                    'event_label': 'submit education detail'
                })
                return window.location.href = '/experience'
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
                    handleMove={handleMove}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithEducationDetailPage