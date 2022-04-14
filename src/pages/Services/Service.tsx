import React from "react";

import Selector from "../../components/Selector/Selector";
import Search from "../../components/SearchBox/Search";
import "./service.scss";
import Calendar from "../../components/Calendar/Calendar";
import TableService from "../../components/TableService/TableService";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";

const Service = () => {
  const handleChange = () => {};
  return (
    <div className="service-wrap">
      <div className="service-title">Quản lý dịch vụ</div>
      <div className="service-selectorgroup">
        <div className="service-selectorgroup1">
          <Selector
            title="Trạng thái hoạt động"
            option1="Tất cả"
            option2="Hoạt động"
            option3="Ngưng hoạt động"
          />
          <Calendar />
        </div>
        <Search />
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
