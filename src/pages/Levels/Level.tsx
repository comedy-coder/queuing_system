import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import Selector from "../../components/Selector/Selector";
import TableLevel from "../../components/TableLevel/TableLevel";
import "./level.scss";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
const Level = () => {
  const handleChange = () => {};
  return (
    <div className="level-wrap">
      <div className="level-title">Danh sách thiết bị</div>
      <div className="level-selectorgroup">
        <div className="level-selectorgroup1">
          <Selector
            title="Tên dịch vụ"
            option1="Tất cả"
            option2="Hoạt động"
            option3="Ngưng hoạt động"
            size="small"
          />
          <Selector
            title="Tình trạng"
            option1="Tất cả"
            option2="Kết nối"
            option3="Mất kết nối"
            size="small"
          />
          <Selector
            title="Nguồn cấp"
            option1="Tất cả"
            option2="Kết nối"
            option3="Mất kết nối"
            size="small"
          />
          <Calendar />
        </div>
        <Search />
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
