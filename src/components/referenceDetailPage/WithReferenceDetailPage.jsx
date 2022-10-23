import React, { useState } from "react";

const WithReferenceDetailPage = (container) => {
    return (props) => {
        const [referenceList, setReferenceList] = useState([])
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
                    handleEdit={handleEdit}
                />
            </>
        )
    }
}

export default WithReferenceDetailPage