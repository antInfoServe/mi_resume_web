import React from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const SkillList = ({ staticText, useNavigate, skillList, handleRemove, handleAddSkill, handleChange, skill, handleOnBlur }) => {
    return (
        <div className="display_reular">
            <div className='box_banner'>
                <MiResumeLogo />
            </div>
            <div className="box_flex_row">
                <input className="input_box_small" placeholder={staticText.searchSkill} value={skill} id = 'searchSkill' name='skill' onBlur={handleOnBlur} onChange={handleChange} />
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
            <div className="box_flex_row_right">
                <button className='button_regular'>{staticText.submit}</button>
            </div>
        </div>
    )
}

export default SkillList