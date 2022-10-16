import React from "react";
import ErrorIcon from '../../assets/error_icon.svg'

const DisplayError = ({ error }) => {
  return (
    <div className="display_content">
      <div className="box_flex_col">
        <p className="text_error">{error.code} - {error.message}</p>
        <ErrorIcon className="icon_normal" />
      </div>
    </div>
  );
};

export default DisplayError;
