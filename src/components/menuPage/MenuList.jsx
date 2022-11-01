import React from "react";
import MiResumeLogo from "../../assets/mi_resume_logo.svg";

const MenuList = ({
    staticText,
    useNavigate,
    download,
    handleModal,
    DownloadResume,
    Document,
    resumeData,
    resumeOrder,
    handleMove
}) => {
    const navigate = useNavigate();
    return (
        <div className="display_regular">
            <div className="box_banner">
                <MiResumeLogo />
            </div>
            <div className="box_flex_row_right">
                <button className="button_regular" onClick={() => handleModal(true)}>{staticText.generateResume}</button>
            </div>
            {download ? <DownloadResume
                handleModal={handleModal}
                Document={Document}
                resumeOrder={resumeOrder}
                resumeData={resumeData}
                staticText={staticText}
            /> : <div></div>}
            <div className="box_flex_col_left">
                {resumeOrder.map((ele, index) => (
                    <div className="box_flex_row_apart" key={index}>
                        <button
                            className="button_regular"
                            id={ele}
                            onClick={() => navigate(`/${ele}`)}
                        >
                            {staticText[ele]}
                        </button>
                        <div className="box_flex_row_right">
                            {index > 1 ? <button id={index} className="button_white" onClick={handleMove} name='moveUp'>↑</button> : null}
                            {index > 0 && index < 8 ? <button id={index} className="button_white" onClick={handleMove} name='moveDown'>↓</button> : <div className="button_spacer"></div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuList;
