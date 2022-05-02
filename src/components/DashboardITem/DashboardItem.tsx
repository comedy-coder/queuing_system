import "./dashboarditem.scss";
import React from "react";
type ItemProp = {
  icon: string;
  title: string;
  number: number;
  image: string;
};
const DashboardItem = ({ icon, title, number, image }: ItemProp) => {
  const number1 = number.toString();
  console.log(number1);
  return (
    <div className="dashboarditem-wrap">
      <div className="dashboarditem-main">
        <img srcSet={`${image} 2x`} alt="" />
        <span className="dashboarditem__title">{title}</span>
      </div>
      <div className="dashboarditem-sub">
        <span className="dashboarditem__number">{number1}</span>
        <img srcSet={`${icon} 2x`} alt="" />
      </div>
    </div>
  );
};

export default DashboardItem;
