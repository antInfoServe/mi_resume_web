import React, { useState } from "react";

const WithReferenceDetailPage = (container) => {
    return (props) => {
        const [referenceList, setReferenceList] = useState([{
            name:"gebfwf",
            companyName: 'Gurugobind Singh World University',
            designation: 'Industrial Engineering',
            mobile: '9999555883',
            email: 'pnga@gmail.com'
        },
        {
            name:"wbiebvie",
            companyName: 'Gurugobind Singh World University',
            designation: 'Industrial Engineering',
            mobile: '9999555883',
            email: 'pnga@gmail.com'
        }])
        const [formData, setFormData] = useState({ presentHere: false, startDate: {}, endDate: {} })
        const [addReference, setAddReference] = useState(true)

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
            setFormData(referenceList[e.target.value])
            setAddReference(true)
            return handleDelete(e)
        }
    
        const handleModal = (bool) => {
            return setAddReference(bool)
        }

        const handleSave = () => {
            const list = [...referenceList]
            list.unshift(formData)
            setReferenceList(list)
            return handleModal(false)
        }

        const handleDelete =(e) =>{
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
                    addReference = {addReference}
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

export default WithReferenceDetailPage