import React from "react";
import "./dashboardcover.scss";
import device from "../../assets/images/dashboard/device.png";
import service from "../../assets/images/dashboard/service.png";
import level from "../../assets/images/dashboard/level.png";
import calender from "../../assets/images/dashboard/calenderreal.png";
const DashboardCover = () => {
  return (
    <div className="dashboardcover-wrap">
      <span className="dashboardcover-title">Tổng quan</span>
      <div className="dashboardcover-item">
        <img srcSet={device} alt="" />
      </div>
      <div className="dashboardcover-item">
        <img srcSet={service} alt="" />
      </div>
      <div className="dashboardcover-item">
        <img srcSet={level} alt="" />
      </div>
      <div className="dashboardcover-calender">
        <img srcSet={calender} alt="" />
      </div>
    </div>
  );
};

export default DashboardCover;
