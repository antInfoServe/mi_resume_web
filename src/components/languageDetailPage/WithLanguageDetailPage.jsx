import React, { useState } from "react";

const WithLanguageDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [languageList, setLanguageList] = useState(() => {
            if (resumeData.language.length === 0) {
                return []
            }
            return resumeData.language
        })

        const [formData, setFormData] = useState({ language: '', proficiency: 'Beginner' })
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

        const handleAdd = () => {
            setFormData({ language: '', proficiency: 'Beginner' })
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

        const handleMove = (e) => {
            let arr = [...languageList]
            if (e.target.name === 'moveUp') {
                arr = container.relocator().moveUp(arr, e.target.id)
                return setLanguageList(arr)
            }
            arr = container.relocator().moveDown(arr, e.target.id)
            return setLanguageList(arr)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('language', languageList)
                gtag('event', 'click', {
                    'event_category': 'languagePage',
                    'event_label': 'submit language detail'
                })
                return window.location.href = '/menu'
            } catch (err) {
                window.alert(err.message)
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
                    handleMove={handleMove}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithLanguageDetailPage