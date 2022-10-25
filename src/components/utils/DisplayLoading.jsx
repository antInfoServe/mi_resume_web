import React from "react";
import MiResumeLogo from "../../assets/mi_resume_logo.svg"
import LoadingIcon from '../../assets/loading_icon.svg'

const DisplayLoading = () => {
  return (
    <div className="display_regular">
      <div className='box_banner'>
        <MiResumeLogo />
      </div>
      <div className="box_flex_col">
        <LoadingIcon className="icon_xs" />
      </div>
    </div>
  );
};

export default DisplayLoading;
