import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import TableLevel from "../../components/TableLevel/TableLevel";
import "./level.scss";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
const Level = () => {
  const Name = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Đang chờ",
      value: "waiting",
    },
    {
      display: "Đã sử dụng",
      value: "used",
    },
    {
      display: "Bỏ qua",
      value: "passed",
    },
  ];
  const State = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Khám sản-phụ khoa",
      value: "waiting",
    },
    {
      display: "Khám răng hàm mặt",
      value: "used",
    },
    {
      display: "Khám tai mũi họng",
      value: "passed",
    },
  ];
  const Source = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Kiosk",
      value: "waiting",
    },
    {
      display: "Hệ thống",
      value: "used",
    },
  ];
  const handleChange = () => {};
  return (
    <div className="level-wrap">
      <div className="level-title">Danh sách thiết bị</div>
      <div className="level-selectorgroup">
        <div className="level-selectorgroup1">
          <SelectorDD title="Tên dịch vụ" width="154px" Menu={Name} />
          <SelectorDD title="Tình trạng" width="154px" Menu={State} />
          <SelectorDD title="Nguồn cấp" width="154px" Menu={Source} />
          <Calendar />
        </div>
        <Search width="240px" title="Từ khóa" left="206.5px" />
      </div>
      <TableLevel />
      <div className="button-positon">
        <Link to="/cap-so/addlevel">
          <AddButton handleClick={handleChange}> Cấp số mới</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Level;
