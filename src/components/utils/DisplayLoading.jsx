import React from "react";
import MiResumeLogo from "../../assets/mi_resume_logo.svg"
import LoadingIcon from '../../assets/loading_icon.svg'

const DisplayLoading = () => {
  return (
    <div className="display_regular">
      <div className='box_banner'>
        < img src={MiResumeLogo} alt="MiResume.org logo"/>
      </div>
      <div className="box_flex_col">
        <img src={LoadingIcon} className="icon_xs" alt="loading animation"/>
      </div>
    </div>
  );
};

export default DisplayLoading;
