import React from "react";
import MiResumeLogo from "../../assets/mi_resume_logo.svg";

const MenuList = ({
    staticText,
    useNavigate,
    download,
    handleModal,
    DownloadResume,
    Document,
    resumeData
}) => {
    const navigate = useNavigate();
    return (
        <div className="display_regular">
            <div className="box_banner">
                <MiResumeLogo />
            </div>
            {download ? <DownloadResume
                handleModal={handleModal}
                Document={Document}
                resumeData={resumeData}
                staticText={staticText}

            /> : <div></div>}
            <div className="box_flex_col_left">
                {[
                    "personal",
                    "education",
                    "experience",
                    "socialLink",
                    "skill",
                    "course",
                    "award",
                    "language",
                    "reference",
                ].map((ele, index) => (
                    <button
                        className="button_regular"
                        id={ele}
                        onClick={() => navigate(`/${ele}`)}
                        key={index}
                    >
                        {staticText[ele]}
                    </button>
                ))}
            </div>
            <div className="box_flex_row_right">
                <button className="button_regular" onClick={() => handleModal(true)}>{staticText.generateResume}</button>
            </div>
        </div>
    );
};

export default MenuList;
