import React, { useState } from "react";

const WithCourseDetailPage = (container) => {
    return (props) => {
        const [courseList, setCourseList] = useState([])
        const [formData, setFormData] = useState({ instituteName: '', courseName: '', certificate: '', presentHere: false, startDate: {}, endDate: {} })
        const [addCourse, setAddCourse] = useState(true)

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
                data[e.target.id] = !formData.presentHere
                return setFormData(data)
            }

            data[e.target.id] = e.target.value
            return setFormData(data)
        }

        const handleEdit = (e) => {
            setFormData(courseList[e.target.value])
            setAddCourse(true)
            return handleDelete(e)
        }

        const handleModal = (bool) => {
            return setAddCourse(bool)
        }

        const handleSave = () => {
            try {
                container.validator().addCourse(formData)
                const list = [...courseList]
                list.unshift(formData)
                setCourseList(list)
                return handleModal(false)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }

        }

        const handleDelete = (e) => {
            const list = [...courseList]
            list.splice(e.target.value, 1)
            return setCourseList(list)
        }

        return (
            <>
                <container.CourseDetailList
                    staticText={container.staticText}
                    courseList={courseList}
                    CourseDetailForm={container.CourseDetailForm}
                    DatePicker={container.DatePicker}
                    formData={formData}
                    addCourse={addCourse}
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

export default WithCourseDetailPage