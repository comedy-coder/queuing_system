import React from "react";
import AddButton from "../../components/AddButton/AddButton";

import "./report.scss";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import TableReport from "../../components/TableReport/TableReport";
const Report = () => {
  const handleChange = () => {};
  return (
    <div className="report-wrap">
      <div className="report-selectorgroup">
        <Calendar />
      </div>
      <TableReport />
      <div className="button-positon">
        <Link to="/report/addreport">
          <AddButton handleClick={handleChange}> Tải về</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Report;
