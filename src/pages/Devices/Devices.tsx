import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import Selector from "../../components/Selector/Selector";
import Table from "../../components/Table/Table";
import "./device.scss";
import { Link } from "react-router-dom";
const Devices = () => {
  const handleChange = () => {};
  return (
    <div className="device-wrap">
      <div className="device-title">Danh sách thiết bị</div>
      <div className="device-selectorgroup">
        <div className="device-selectorgroup1">
          <Selector
            title="Trạng thái hoạt động"
            option1="Tất cả"
            option2="Hoạt động"
            option3="Ngưng hoạt động"
          />
          <Selector
            title="Trạng thái kết nối"
            option1="Tất cả"
            option2="Kết nối"
            option3="Mất kết nối"
          />
        </div>
        <Search />
      </div>
      <Table />
      <div className="button-positon">
        <Link to="/device/adddevice">
          <AddButton handleClick={handleChange}> Thêm thiết bị</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Devices;
