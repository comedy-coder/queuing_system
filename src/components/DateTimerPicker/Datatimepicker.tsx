import React from "react";
import { useState } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "./datetime.scss";

const Datatimepicker = () => {
  const [value, onChange] = useState<any | null>([new Date(), new Date()]);
  return (
    <div>
      <DateTimeRangePicker onChange={onChange} value={value} />
    </div>
  );
};

export default Datatimepicker;
