import React, { useState } from "react";

const WithAwardDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {

        const [awardList, setAwardList] = useState(() => {
            if (resumeData.award.length === 0) {
                return []
            }
            return resumeData.award
        })

        const [formData, setFormData] = useState({ issuer: '', title: "", issueDate: { month: 1, year: 2022 }, detail: "" })
        const [addAward, setAddAward] = useState(true)

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            const data = { ...formData }

            if (e.target.id.includes('issueDate')) {
                data.issueDate[e.target.name] = e.target.value
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
            setFormData(awardList[e.target.value])
            setAddAward(true)
            return handleDelete(e)
        }

        const handleModal = (bool) => {
            return setAddAward(bool)
        }

        const handleAdd = () => {
            setFormData({ issuer: '', title: "", issueDate: { month: 1, year: 2022 }, detail: "" })
            return handleModal(true)
        }

        const handleSave = () => {
            try {
                const list = [...awardList]
                container.validator().addAward(formData)
                const data = formData
                data.detail = container.parser().stringToArray(data.detail)
                console.log(data.detail)
                list.unshift(data)
                setAwardList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleDelete = (e) => {
            const list = [...awardList]
            list.splice(e.target.value, 1)
            return setAwardList(list)
        }

        const handleMove = (e) => {
            let arr = [...awardList]
            if (e.target.name === 'moveUp') {
                arr = container.relocator().moveUp(arr, e.target.id)
                return setAwardList(arr)
            }
            arr = container.relocator().moveDown(arr, e.target.id)
            return setAwardList(arr)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('award', awardList)
                gtag('event', 'click', {
                    'event_category': 'awardPage',
                    'event_label': 'submit award detail'
                })
                return window.location.href = '/menu'
            } catch (err) {
                window.alert(err.message)
                console.log(err.message)
            }
        }

        return (
            <>
                <container.AwardDetailList
                    staticText={container.staticText}
                    awardList={awardList}
                    AwardDetailForm={container.AwardDetailForm}
                    DatePicker={container.DatePicker}
                    formData={formData}
                    addAward={addAward}
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

export default WithAwardDetailPage