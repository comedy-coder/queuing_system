import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import Selector from "../../components/Selector/Selector";
import Table from "../../components/Table/Table";
import "./device.scss";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import { Link } from "react-router-dom";
const Devices = () => {
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
    <div className="device-wrap">
      <div className="device-title">Danh sách thiết bị</div>
      <div className="device-selectorgroup">
        <div className="device-selectorgroup1">
          <SelectorDD
            width="300px"
            title="Trang thai hoat dong"
            Menu={Active}
          />
          <Selector
            title="Trạng thái kết nối"
            option1="Tất cả"
            option2="Kết nối"
            option3="Mất kết nối"
          />
        </div>
        <Search width="300px" title="Từ khóa" left="266.5px" />
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
