import React from "react";
import LoadingIcon from '../../assets/loading_icon.svg'

const DisplayLoading = () => {
  return (
    <div className="display_content">
      <div className="box_flex_col">
        <p className="text_notification">Loading</p>
        <LoadingIcon className="icon_xs"/>
      </div>
    </div>
  );
};

export default DisplayLoading;
