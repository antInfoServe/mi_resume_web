import React, { useState } from "react";

const WithReferenceDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [referenceList, setReferenceList] = useState(() => {
            if (resumeData.reference == undefined) {
                return []
            }
            return resumeData.reference
        })
        const [formData, setFormData] = useState({ name: '', companyName: '', designation: '', mobile: '', email: '' })
        const [addReference, setAddReference] = useState(true)

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            const data = { ...formData }
            data[e.target.id] = e.target.value
            return setFormData(data)
        }

        const handleEdit = (e) => {
            setFormData(referenceList[e.target.value])
            setAddReference(true)
            return handleDelete(e)
        }

        const handleModal = (bool) => {
            return setAddReference(bool)
        }

        const handleAdd = () => {
            setFormData({ name: '', companyName: '', designation: '', mobile: '', email: '' })
            handleModal(true)
        }

        const handleSave = () => {
            try {
                container.validator().addReference(formData)
                const list = [...referenceList]
                list.unshift(formData)
                setReferenceList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }

        }

        const handleDelete = (e) => {
            const list = [...referenceList]
            list.splice(e.target.value, 1)
            return setReferenceList(list)
        }

        const handleMove = (e) => {
            let arr = [...referenceList]
            if (e.target.name === 'moveUp') {
                arr = container.relocator().moveUp(arr, e.target.id)
                return setReferenceList(arr)
            }
            arr = container.relocator().moveDown(arr, e.target.id)
            return setReferenceList(arr)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('reference', referenceList)
                return window.location.href = '/menu'
            } catch (err) {
                console.log(err.message)
            }
        }

        return (
            <>
                <container.ReferenceDetailList
                    staticText={container.staticText}
                    referenceList={referenceList}
                    ReferenceDetailForm={container.ReferenceDetailForm}
                    formData={formData}
                    addReference={addReference}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleModal={handleModal}
                    handleAdd={handleAdd}
                    handleEdit={handleEdit}
                    handleMove = {handleMove}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithReferenceDetailPage