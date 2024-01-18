import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_div">
      <div className="container">
        <div className="header_div_area">
          <div className="header_div_area_1">Egochain</div>
          <div className="header_div_area_2">
            <div className="header_div_area_2_link1">Docs</div>
            <div className="header_div_area_2_link1">Token</div>
            <div className="header_div_area_2_link1">About</div>
            <div className="header_div_area_2_link1">Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
