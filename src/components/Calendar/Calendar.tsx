import React from "react";
import calendar from "../../assets/images/addbutton/calendar.png";
import arrow from "../../assets/images/addbutton/arrow.png";
import "./calendar.scss";
import { Box } from "@mui/material";
import { useState } from "react";
import { DateRangePicker, DateRange } from "@mui/lab";
type CalendarProp = {
  styles?: React.CSSProperties;
};
const Calendar = ({ styles }: CalendarProp) => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <div className="calendar-wrap" style={styles}>
      <div className="calendar-title">Chọn thời gian</div>
      <div className="calendar-group">
        <button className="calendar-button">
          <img srcSet={`${calendar} 2x`} alt="" />
          <Box width="50px">
            <DateRangePicker startText="Check" endText="Check-out" />
          </Box>
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
