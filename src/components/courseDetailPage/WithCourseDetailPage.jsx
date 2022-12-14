import React, { useState } from "react";

const WithCourseDetailPage = (container) => {
    return ({ handleSetResume, resumeData }) => {
        const [courseList, setCourseList] = useState(() => {
            if (resumeData.course.length === 0) {
                return []
            }
            return resumeData.course
        })
        const [formData, setFormData] = useState({ instituteName: '', courseName: '', certificate: '', presentHere: false, startDate: { month: 1, year: 2022 }, endDate: { month: 1, year: 2022 } })
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

        const handleAdd = () => {
            setFormData({ instituteName: '', courseName: '', certificate: '', presentHere: false, startDate: { month: 1, year: 2022 }, endDate: { month: 1, year: 2022 } })
            handleModal(true)
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

        const handleMove = (e) => {
            let arr = [...courseList]
            if (e.target.name === 'moveUp') {
                arr = container.relocator().moveUp(arr, e.target.id)
                return setCourseList(arr)
            }
            arr = container.relocator().moveDown(arr, e.target.id)
            return setCourseList(arr)
        }

        const handleSubmit = () => {
            try {
                handleSetResume('course', courseList)
                gtag('event', 'click', {
                    'event_category': 'coursePage',
                    'event_label': 'submit course detail'
                })
                return window.location.href = '/menu'
            } catch (err) {
                window.alert(err.message)
                console.log(err.message)
            }
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
                    handleAdd={handleAdd}
                    handleEdit={handleEdit}
                    handleMove={handleMove}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithCourseDetailPage