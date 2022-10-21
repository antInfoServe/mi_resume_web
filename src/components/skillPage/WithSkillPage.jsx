import React, { useState } from 'react'

const WithSkillPage = (container) => {
    return (props) => {
        const [skill, setSkill] = useState('')
        const [skillList, setSkillList] = useState([])

        const handleAddSkill = () => {
            const list = [...skillList]
            list.unshift(skill)
            setSkill('')
            setSkillList(list)
        }

        const handleChange = (e) => {
            setSkill(e.target.value)
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
                    handleAddSkill={handleAddSkill}
                    handleRemove={handleRemove}
                />
            </>
        )
    }
}

export default WithSkillPage