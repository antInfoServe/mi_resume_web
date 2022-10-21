import React from "react";
import MiResumeLogo from '../../assets/mi_resume_logo.svg'

const MenuList = ({ staticText, useNavigate }) => {
    return (
        <div className="display_reguar">
            <div className="box_banner">
                <MiResumeLogo />
            </div>
            <div className="box_flex_col_left">
                {
                    [
                        "profileDetail",
                        "educationDetail",
                        "experienceDetail",
                        "socialLink",
                        "skill",
                        "courseDetail",
                        "awardDetail",
                        "language",
                        "reference"
                    ].map((ele, index) =>
                        <button className="button_regular" id={ele} key={index}>{staticText[ele]}</button>
                    )
                }
            </div>
            <div className="box_flex_row_right">
                <button className="button_regular">{staticText.generateResume}</button>
            </div>
        </div>
    );
};

export default MenuList