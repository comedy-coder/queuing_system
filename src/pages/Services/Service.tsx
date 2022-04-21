import React from "react";

import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import Search from "../../components/SearchBox/Search";
import "./service.scss";
import Calendar from "../../components/Calendar/Calendar";
import TableService from "../../components/TableService/TableService";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";

const Service = () => {
  const Active = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Hoạt động",
      value: "active",
    },
    {
      display: "Ngưng hoạt động",
      value: "deactive",
    },
  ];
  const handleChange = () => {};
  return (
    <div className="service-wrap">
      <div className="service-title">Quản lý dịch vụ</div>
      <div className="service-selectorgroup">
        <div className="service-selectorgroup1">
          <SelectorDD
            width="300px"
            title="Trạng thaí hoạt động"
            Menu={Active}
          />
          <Calendar />
        </div>
        <Search width="300px" left="265.5px" title="Từ khóa" />
      </div>
      <TableService />
      <div className="button-positon">
        <Link to="/dich-vu/addservice">
          <AddButton handleClick={handleChange}> Thêm dịch vụ</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Service;
