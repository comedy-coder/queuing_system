import React from "react";
import "./dbcalendar.scss";
import { useState } from "react";
import DatePicker from "sassy-datepicker";
const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: any) => {
    setDate(newDate);
  };
  return <DatePicker onChange={onChange} selected={date} />;
};

export default DashboardCalendar;
