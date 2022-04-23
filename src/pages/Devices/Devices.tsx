import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import adbtn from "../../assets/images/addbutton/addbtn.png";
import Table from "../../components/Table/Table";
import "./device.scss";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import { Link } from "react-router-dom";
import Pages from "../../components/PaginatonPages/Pages";

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
  const Connect = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Kết nối",
      value: "active",
    },
    {
      display: "Mất kết nối",
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
            title="Trạng thaí hoạt động"
            Menu={Active}
          />
          <SelectorDD title="Trạng thái kết nối" width="300px" Menu={Connect} />
        </div>
        <Search width="300px" title="Từ khóa" left="266.5px" />
      </div>
      <Table />
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
