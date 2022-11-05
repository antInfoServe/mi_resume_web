import React from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const SkillList = ({ staticText, skillList, handleRemove, handleAddSkill, handleChange, skill, handleSubmit }) => {
    return (
        <div className="display_regular">
            <div className='box_banner'>
                <img src={MiResumeLogo} alt="MiResume.org logo" />
            </div>
            <div className="box_flex_row_right">
                <button className='button_regular' onClick={handleSubmit}>{staticText.submit}</button>
            </div>
            <div className="box_flex_row">
                <input className="input_box_small" placeholder={staticText.searchSkill} value={skill} id='searchSkill' name='skill' onChange={handleChange} />
                <button className="button_regular" onClick={handleAddSkill}>{staticText.add}</button>
            </div>
            <div className="box_flex_col_left">
                {
                    skillList.length != 0 ? skillList.map((ele, index) => <div key={index} className="box_flex_row_apart">
                        <p className="text_regular">{ele}</p>
                        <button className="button_link" id={index} onClick={handleRemove}>{staticText.remove}</button>
                    </div>
                    ) :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default SkillList