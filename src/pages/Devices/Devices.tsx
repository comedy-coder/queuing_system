import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import adbtn from "../../assets/images/addbutton/addbtn.png";
import Table from "../../components/Table/Table";
import "./device.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import { Link } from "react-router-dom";
import Pages from "../../components/PaginatonPages/Pages";
import { useState, useEffect } from "react";

const Devices = () => {
  const [valueState, setvalueState] = useState<any | null>();
  const [valueConnect, setvalueConnect] = useState<any | null>();
  const UserColecctionRef = collection(db, "Devices");
  const [User, setUser] = useState<any>([]);
  const [inputSearch, setInputSearch] = useState<any | "">("");
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const filterData = (datas: any) => {
    if (valueState === 1) {
      let result = datas.filter(
        (data: any) => data.active === Boolean(valueState)
      );

      if (valueConnect === 1) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (valueConnect === 0) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (inputSearch !== "") {
        return result.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }

      return result;
    } else if (valueState === 0) {
      let result = datas.filter(
        (data: any) => data.active === Boolean(valueState)
      );

      if (valueConnect === 1) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (valueConnect === 0) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (inputSearch !== "") {
        return result.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }
      return result;
    } else {
      if (valueConnect === 0) {
        return datas.filter(
          (item: any) => item.connect === Boolean(valueConnect)
        );
      } else if (valueConnect === 1)
        return datas.filter(
          (item: any) => item.connect === Boolean(valueConnect)
        );
      else if (inputSearch !== "") {
        return datas.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }
    }
    return datas;
  };

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
  const getInputValue = (input: any) => {
    setInputSearch(input);
  };

  const Connect = [
    {
      display: "Tất cả",
      value: "-1",
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
        <Search
          width="300px"
          title="Từ khóa"
          left="266.5px"
          onGetValue={getInputValue}
        />
      </div>
      <Table data={filterData(User)} />
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
