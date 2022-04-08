import React from "react";
import "./dashboardcover.scss";
import device from "../../assets/images/dashboard/device.png";
import service from "../../assets/images/dashboard/service.png";
import level from "../../assets/images/dashboard/level.png";
import calender from "../../assets/images/dashboard/calenderreal.png";
import { Link } from "react-router-dom";
const DashboardCover = () => {
  return (
    <div className="dashboardcover-wrap">
      <span className="dashboardcover-title">Tổng quan</span>
      <Link to="./device">
        <div className="dashboardcover-item">
          <img srcSet={device} alt="" />
        </div>
      </Link>
      <Link to="./dich-vu">
        <div className="dashboardcover-item">
          <img srcSet={service} alt="" />
        </div>
      </Link>
      <Link to="./cap-so">
        <div className="dashboardcover-item">
          <img srcSet={level} alt="" />
        </div>
      </Link>
      <div className="dashboardcover-calender">
        <img srcSet={calender} alt="" />
      </div>
    </div>
  );
};

export default DashboardCover;
