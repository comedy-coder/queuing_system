import React from "react";
import Search from "../../components/SearchBox/Search";
import Selector from "../../components/Selector/Selector";
import "./device.scss";
const Devices = () => {
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
    </div>
  );
};

export default Devices;
