import "./dashboarditem.scss";
import React from "react";
type ItemProp = {
  icon: string;
  title: string;
  number: string;
  image: string;
};
const DashboardItem = ({ icon, title, number, image }: ItemProp) => {
  return (
    <div className="dashboarditem-wrap">
      <div className="dashboarditem-main">
        <img srcSet={`${image} 2x`} alt="" />
        <span className="dashboarditem__title">{title}</span>
      </div>
      <div className="dashboarditem-sub">
        <span className="dashboarditem__number">{number}</span>
        <img srcSet={`${icon} 2x`} alt="" />
      </div>
    </div>
  );
};

export default DashboardItem;
