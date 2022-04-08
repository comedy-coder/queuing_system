import React, { useEffect, useState } from "react";
import "./dashboardgraph.scss";
import date from "../../assets/images/dashboard/graphicdate.png";
import week from "../../assets/images/dashboard/graphicweek.png";
import month from "../../assets/images/dashboard/graphicmonth.png";
import arrow from "../../assets/images/dashboard/arrow.png";

const DashboardGraph = () => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const [grahic, setGraphic] = useState<any>(date);
  const [value, setValue] = useState("ngày");
  useEffect(() => {
    if (value === "tuần") setGraphic(week);
    else if (value === "tháng") setGraphic(month);
    else setGraphic(date);
  }, [value]);

  return (
    <>
      {" "}
      <div className="dashboardgraph-header">
        <div className="dashboardgraph-title">
          Bản thống kê theo {`${value}`}
          <div className="dashboardgraph-day">
            {value === "tháng" ? "Năm 2021" : "Tháng 11/2021"}
          </div>
        </div>
        <div className="dashboardgraph-gruop" onChange={(e) => handleChange(e)}>
          <label>Xem theo</label>
          <select
            name="cars"
            className="dashboardgraph-select"
            style={{ backgroundImage: arrow }}
          >
            <option value="ngày">Ngày</option>
            <option value="tuần">Tuần</option>
            <option value="tháng">Tháng</option>
          </select>
        </div>
      </div>
      <img src={grahic} alt="" />
    </>
  );
};

export default DashboardGraph;
