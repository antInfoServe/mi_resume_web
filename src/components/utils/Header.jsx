import React from "react";
import User_profile_icon from "../../assets/arrow_down_icon.svg";
import Logout_icon from "../../assets/logout_icon.svg";

const Header = ({ title, tabs, handleTab, staticText }) => {
  return (
    <div className="display_header">
      <div className="box_header">
        <h1 className="text_h1_3">{title}</h1>
        <div className="box_secbar">
          {tabs.map((tab) => (
            <button key={tab} id={tab} className="button_link" onClick={handleTab}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="dropdown box_profile">
        <span className="text_normal">profile</span>
        <User_profile_icon className="icon_xs" />
        <div className="dropdown_content">
          <div className="box_profileBar">
            <Logout_icon className="icon_xs" />
            <button className="button_link">{staticText.logout}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
