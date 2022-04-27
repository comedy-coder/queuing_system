import React from "react";
import calendar from "../../assets/images/addbutton/calendar.png";
import arrow from "../../assets/images/addbutton/arrow.png";
import "./calendar.scss";

import Datatimepicker from "../DateTimerPicker/Datatimepicker";

type CalendarProp = {
  styles?: React.CSSProperties;
};
const Calendar = ({ styles }: CalendarProp) => {
  return (
    <div className="calendar-wrap" style={styles}>
      <div className="calendar-title">Chọn thời gian</div>
      <div className="calendar-group">
        <div className="calendar-arrow">
          <img srcSet={`${arrow} 2x`} alt="" />
        </div>
        <div className="calendar-icon">
          <img srcSet={`${calendar} 2x`} alt="" />
        </div>

        <button className="calendar-button">
          <img srcSet={`${calendar} 2x`} alt="" />

          <Datatimepicker />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
