import React, { useState } from "react";

const WithCourseDetailPage = (container) => {
    return (props) => {
        const [courseList, setCourseList] = useState([{
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
        const [addCourse, setAddCourse] = useState(true)

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
            setFormData(courseList[e.target.value])
            setAddCourse(true)
            return handleDelete(e)
        }
    
        const handleModal = (bool) => {
            return setAddCourse(bool)
        }

        const handleSave = () => {
            const list = [...courseList]
            list.push(formData)
            setCourseList(list)
            return handleModal(false)
        }

        const handleDelete =(e) =>{
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
                    addCourse = {addCourse}
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

export default WithCourseDetailPage