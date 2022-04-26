import React from "react";
import calendar from "../../assets/images/addbutton/calendar.png";
import arrow from "../../assets/images/addbutton/arrow.png";
import "./calendar.scss";
import { Box } from "@mui/material";
import { useState } from "react";
import Datatimepicker from "../DateTimerPicker/Datatimepicker";

type CalendarProp = {
  styles?: React.CSSProperties;
};
const Calendar = ({ styles }: CalendarProp) => {
  return (
    <div className="calendar-wrap" style={styles}>
      <div className="calendar-title">Chọn thời gian</div>
      <div className="calendar-group">
        <button className="calendar-button">
          <img srcSet={`${calendar} 2x`} alt="" />

          <Datatimepicker />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
