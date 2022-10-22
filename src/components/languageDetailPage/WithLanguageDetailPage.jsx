import React, { useState } from "react";

const WithLanguageDetailPage = (container) => {
    return (props) => {
        const [languageList, setLanguageList] = useState([{
            language: 'Gurugobind Singh World University',
            proficiency: 'Industrial Engineering',
        },
        {
            language: 'Gurugobind Singh World University',
            proficiency: 'Industrial Engineering',
        }])
        const [formData, setFormData] = useState({ presentHere: false, startDate: {}, endDate: {} })
        const [addLanguage, setAddLanguage] = useState(true)

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
            setFormData(languageList[e.target.value])
            setAddLanguage(true)
            return handleDelete(e)
        }
    
        const handleModal = (bool) => {
            return setAddLanguage(bool)
        }

        const handleSave = () => {
            const list = [...languageList]
            list.unshift(formData)
            setLanguageList(list)
            return handleModal(false)
        }

        const handleDelete =(e) =>{
            const list = [...languageList]
            list.splice(e.target.value, 1)
            return setLanguageList(list)
        }

        return (
            <>
                <container.LanguageDetailList
                    staticText={container.staticText}
                    languageList={languageList}
                    LanguageDetailForm={container.LanguageDetailForm}
                    formData={formData}
                    addLanguage = {addLanguage}
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

export default WithLanguageDetailPage