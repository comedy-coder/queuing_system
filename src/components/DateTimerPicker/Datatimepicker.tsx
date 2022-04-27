import React, { useEffect } from "react";
import { useState } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "./datetime.scss";
import { useContext } from "react";
import { Context } from "../../Store/Provider";
import { getDateTime } from "../../Store/action";
const Datatimepicker = () => {
  const [value, onChange] = useState<any | null>([new Date(), new Date()]);
  const [state, dispatch] = useContext(Context);
  var start = Date.parse(value[0]);
  var end = Date.parse(value[1]);

  useEffect(() => {
    dispatch(getDateTime({ start, end }));
  }, [dispatch, start, end]);
  return (
    <div>
      <DateTimeRangePicker
        onChange={onChange}
        value={value}
        dayPlaceholder="--"
      />
    </div>
  );
};

export default Datatimepicker;
