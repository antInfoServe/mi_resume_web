import React, { useState } from "react";

const WithExperienceDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [experienceList, setExperienceList] = useState(() => {
            if (resumeData.experience == undefined) {
                return []
            }
            return resumeData.experience
        })
        const [formData, setFormData] = useState({ employerName: '', designation: '', workHere: false, startDate: {}, endDate: {}, detail: '' })
        const [addExperience, setAddExperience] = useState(true)

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

            if (e.target.id == 'workHere') {
                data[e.target.id] = !formData.workHere
                return setFormData(data)
            }

            data[e.target.id] = e.target.value
            return setFormData(data)
        }

        const handleEdit = (e) => {
            setFormData(experienceList[e.target.value])
            setAddExperience(true)
            return handleDelete(e)
        }

        const handleModal = (bool) => {
            return setAddExperience(bool)
        }

        const handleAdd = () =>{
            setFormData({ employerName: '', designation: '', workHere: false, startDate: {}, endDate: {}, detail: '' })
            handleModal(true)
        }

        const handleSave = () => {
            try {
                container.validator().addExperience(formData)
                const list = [...experienceList]
                list.push(formData)
                setExperienceList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleDelete = (e) => {
            const list = [...experienceList]
            list.splice(e.target.value, 1)
            return setExperienceList(list)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('experience',experienceList)
            } catch (err) {
                console.log
            }
        }

        return (
            <>
                <container.ExperienceDetailList
                    staticText={container.staticText}
                    experienceList={experienceList}
                    ExperienceDetailForm={container.ExperienceDetailForm}
                    DatePicker={container.DatePicker}
                    formData={formData}
                    addExperience={addExperience}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleModal={handleModal}
                    handleAdd={handleAdd}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithExperienceDetailPage