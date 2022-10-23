import React, { useState } from 'react'

const WithSkillPage = (container) => {
    return (props) => {
        const [skill, setSkill] = useState('')
        const [skillList, setSkillList] = useState([])

        const handleOnBlur = (e) => {
            try {
                container.validator().notEmpty(e)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
                window.alert(err.message)
            }
        }

        const handleChange = (e) => {
            document.getElementById(e.target.id).style.borderColor = 'black'
            setSkill(e.target.value)
        }

        const handleAddSkill = () => {
            try {
                const list = [...skillList]
                container.validator().addSkill(skill)
                list.unshift(skill)
                setSkill('')
                setSkillList(list)
            } catch (err) {
                document.getElementById(err.id).style.borderColor = 'red'
            }
        }

        const handleRemove = (e) => {
            const list = [...skillList]
            list.splice(e.target.value, 1)
            setSkillList(list)
        }

        return (
            <>
                <container.SkillList
                    staticText={container.staticText}
                    useNavigate={container.useNavigate}
                    skillList={skillList}
                    skill={skill}
                    handleChange={handleChange}
                    handleOnBlur={handleOnBlur}
                    handleAddSkill={handleAddSkill}
                    handleRemove={handleRemove}
                />
            </>
        )
    }
}

export default WithSkillPage