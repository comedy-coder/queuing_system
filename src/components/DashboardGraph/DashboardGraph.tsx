import React, { useEffect, useState } from "react";
import "./dashboardgraph.scss";
import date from "../../assets/images/dashboard/graphicdate.png";

import ChartDay from "./ChartWeek/ChartDay";
import ChartWeek from "./ChartWeek/ChartWeek";
import ChartMonth from "./ChartWeek/ChartMonth";
import SelectorDD from "../SelectorDropdown/SelectorDD";
const DashboardGraph = () => {
  const Active = [
    {
      display: "Ngày",
      value: "ngày",
    },
    {
      display: "Tuần ",
      value: "tuần",
    },
    {
      display: "Tháng",
      value: "tháng",
    },
  ];
  const handleChange = (value: any) => {
    setValue(value);
  };
  const [grahic, setGraphic] = useState<any>(date);
  const [value, setValue] = useState("ngày");
  useEffect(() => {
    if (value === "tuần") setGraphic(<ChartWeek />);
    else if (value === "tháng") setGraphic(<ChartMonth />);
    else setGraphic(<ChartDay />);
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
          <SelectorDD width="106px" Menu={Active} onGetValue={handleChange} />
        </div>
      </div>
      {grahic}
    </>
  );
};

export default DashboardGraph;
