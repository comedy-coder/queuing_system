import React from "react";
import { useState } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "./datetime.scss";
import moment from "moment";
const Datatimepicker = () => {
  const [value, onChange] = useState<any | null>([new Date(), new Date()]);

  var x = Date.parse(value[0]);
  var y = Date.parse(value[1]);

  console.log(x, y);

  return (
    <div>
      <DateTimeRangePicker onChange={onChange} value={value} />
    </div>
  );
};

export default Datatimepicker;
