import React, { useState } from 'react'

const WithSkillPage = (container) => {
    return ({ handleSetResume, resumeData }) => {

        const [skillList, setSkillList] = useState(() => {
            if (resumeData.skill.length === 0) {
                return []
            }
            return resumeData.skill
        })

        const [skill, setSkill] = useState('')

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

        const handleSubmit = () => {
            try {
                handleSetResume('skill', skillList)
                return window.location.href = '/menu'
            } catch (err) {
                console.log(err.message)
            }
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
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
}

export default WithSkillPage