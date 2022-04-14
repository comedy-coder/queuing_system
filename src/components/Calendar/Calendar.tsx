import React from "react";
import calendar from "../../assets/images/addbutton/calendar.png";
import arrow from "../../assets/images/addbutton/arrow.png";
import "./calendar.scss";
const Calendar = () => {
  return (
    <div className="calendar-wrap">
      <div className="calendar-title">Chọn thời gian</div>
      <div className="calendar-group">
        <button className="calendar-button">
          <img srcSet={`${calendar} 2x`} alt="" />
          <span>10/10/2021</span>
        </button>
        <img srcSet={`${arrow} 2x`} alt="" />
        <button className="calendar-button">
          <img srcSet={`${calendar} 2x`} alt="" />
          <span>10/10/2021</span>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
