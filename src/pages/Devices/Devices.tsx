import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import adbtn from "../../assets/images/addbutton/addbtn.png";
import Table from "../../components/Table/Table";
import "./device.scss";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import { Link } from "react-router-dom";
import Pages from "../../components/PaginatonPages/Pages";
import { useState } from "react";

const Devices = () => {
  const [valueState, setvalueState] = useState<any | null>();
  const [valueConnect, setvalueConnect] = useState<any | null>();
  const Active = [
    {
      display: "Tất cả",
      value: "-1",
    },
    {
      display: "Hoạt động",
      value: "1",
    },
    {
      display: "Ngưng hoạt động",
      value: "0",
    },
  ];
  const getValueState = (value: any) => {
    setvalueState(Number(value));
  };

  const Connect = [
    {
      display: "Tất cả",
      value: "1",
    },
    {
      display: "Kết nối",
      value: "1",
    },
    {
      display: "Mất kết nối",
      value: "0",
    },
  ];
  const getValueConnet = (value: any) => {
    setvalueConnect(Number(value));
  };

  const handleChange = () => {};
  return (
    <div className="device-wrap">
      <div className="device-title">Danh sách thiết bị</div>
      <div className="device-selectorgroup">
        <div className="device-selectorgroup1">
          <SelectorDD
            width="300px"
            title="Trạng thaí hoạt động"
            Menu={Active}
            onGetValue={getValueState}
          />
          <SelectorDD
            title="Trạng thái kết nối"
            width="300px"
            Menu={Connect}
            onGetValue={getValueConnet}
          />
        </div>
        <Search width="300px" title="Từ khóa" left="266.5px" />
      </div>
      <Table ActiveState={valueState} ConnectState={valueConnect} />
      <div className="device-pages">
        <Pages />
      </div>

      <div className="button-positon">
        <Link to="/device/adddevice">
          <AddButton img={adbtn} handleClick={handleChange}>
            {" "}
            Thêm thiết bị
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Devices;
