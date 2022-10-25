import React, { useState } from "react";

const WithLanguageDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [languageList, setLanguageList] = useState(() => {
            if (resumeData.language == undefined) {
                return []
            }
            return resumeData.language
        })

        const [formData, setFormData] = useState({ language: '', proficiency: '' })
        const [addLanguage, setAddLanguage] = useState(true)

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            const data = { ...formData }
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

        const handleAdd = () =>{
            setFormData({ language: '', proficiency: '' })
            handleModal(true)
        }

        const handleSave = () => {
            try {
                container.validator().addLanguage(formData)
                const list = [...languageList]
                list.unshift(formData)
                setLanguageList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleDelete = (e) => {
            const list = [...languageList]
            list.splice(e.target.value, 1)
            return setLanguageList(list)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('language', languageList)
                return window.location.href = '/menu'
            } catch (err) {
                console.log(err.message)
            }
        }

        return (
            <>
                <container.LanguageDetailList
                    staticText={container.staticText}
                    languageList={languageList}
                    LanguageDetailForm={container.LanguageDetailForm}
                    formData={formData}
                    addLanguage={addLanguage}
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

export default WithLanguageDetailPage