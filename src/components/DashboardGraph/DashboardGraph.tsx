import React, { useEffect, useState } from "react";
import "./dashboardgraph.scss";
import date from "../../assets/images/dashboard/graphicdate.png";
import week from "../../assets/images/dashboard/graphicweek.png";
import month from "../../assets/images/dashboard/graphicmonth.png";
import arrow from "../../assets/images/dashboard/arrow.png";
import SelectorDD from "../SelectorDropdown/SelectorDD";
const DashboardGraph = () => {
  const Active = [
    {
      display: "Ngày",
      value: "ngày",
    },
    {
      display: "Tháng",
      value: "tuần",
    },
    {
      display: "Năm",
      value: "năm",
    },
  ];
  const handleChange = (value: any) => {
    setValue(value);
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
          <SelectorDD width="106px" Menu={Active} onGetValue={handleChange} />
        </div>
      </div>
      <img src={grahic} alt="" />
    </>
  );
};

export default DashboardGraph;
