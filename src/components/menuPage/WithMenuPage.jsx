import React from "react";

const WithMenuPage = (container) => {
  return (props) => {
    return (
      <>
        <container.MenuList
          staticText={container.staticText}
          useNavigate={container.useNavigate}
        />
      </>
    );
  };
};

export default WithMenuPage