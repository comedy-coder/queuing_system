import React, { useEffect, useState } from "react";
import "./dashboardgraph.scss";
import date from "../../assets/images/dashboard/graphic.png";
// import { useReducer ,useRef} from "react";

const DashboardGraph = () => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const [value, setValue] = useState("");

  return (
    <>
      <div className="dashboardgraph-title">
        Bản thống kê theo {`${value}`}
        <span className="dashboardgraph-day"></span>
      </div>
      <div className="dashboardgraph-gruop" onChange={(e) => handleChange(e)}>
        <label>Xem ngày</label>
        <select name="cars">
          <option value="ngày">Ngày</option>
          <option value="tuần">Tuần</option>
          <option value="tháng">Tháng</option>
        </select>
      </div>
      <img src={date} alt="" />
    </>
  );
};

export default DashboardGraph;
