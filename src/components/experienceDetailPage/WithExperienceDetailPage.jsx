import React, { useState } from "react";

const WithExperienceDetailPage = (container) => {
    return (props) => {
        const [experienceList, setExperienceList] = useState([{
            employerName: 'Gurugobind Singh World University',
            designation: 'Industrial Engineering',
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
            employerName: 'Gurugobind Singh World University',
            designation: 'Industrial Engineering',
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
        const [addExperience, setAddExperience] = useState(true)

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
            setFormData(experienceList[e.target.value])
            setAddExperience(true)
            return handleDelete(e)
        }
    
        const handleModal = (bool) => {
            return setAddExperience(bool)
        }

        const handleSave = () => {
            const list = [...experienceList]
            list.push(formData)
            setExperienceList(list)
            return handleModal(false)
        }

        const handleDelete =(e) =>{
            const list = [...experienceList]
            list.splice(e.target.value, 1)
            return setExperienceList(list)
        }

        return (
            <>
                <container.ExperienceDetailList
                    staticText={container.staticText}
                    experienceList={experienceList}
                    ExperienceDetailForm={container.ExperienceDetailForm}
                    DatePicker={container.DatePicker}
                    formData={formData}
                    addExperience = {addExperience}
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

export default WithExperienceDetailPage