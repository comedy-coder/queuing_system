import React from "react";

import "./navdashboardsub.scss";
import icon from "../../assets/images/homepage/dot.png";

const NavDashBoardSub = () => {
  return (
    <div className="navdashboardsub">
      <div className="navdashboardsub-img">
        <img srcSet={`${icon} 2x`} alt="" />
      </div>
    </div>
  );
};

export default NavDashBoardSub;
