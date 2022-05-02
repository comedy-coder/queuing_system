import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import TableLevel from "../../components/TableLevel/TableLevel";
import "./level.scss";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import addbtn from "../../assets/images/addbutton/addbtn.png";
import Pages from "../../components/PaginatonPages/Pages";
import { Context } from "../../Store/Provider";
import { useContext, useEffect, useState } from "react";
import { db } from "../../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
const Level = () => {
  const [nameValue, setNameValue] = useState<any | null>("");
  const [stateValue, setStateValue] = useState<any | null>("");
  const [sourceValue, setSourceValue] = useState<any | null>("");
  const [inputSearch, setInputSearch] = useState<any | null>("");
  const getNameValue = (value: any) => {
    setNameValue(value);
  };
  const getStateValue = (value: any) => {
    setStateValue(value);
  };
  const getSourceValue = (value: any) => {
    setSourceValue(value);
  };
  const handleInput = (value: any) => {
    setInputSearch(value);
  };
  const [state, dispatch] = useContext(Context);
  const datetime = state.datetime;
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Numbers");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const filterService = (data: any) => {
    if (nameValue !== "all")
      return data.filter(
        (item: any) =>
          item.nameservice.toLowerCase().indexOf(nameValue.toLowerCase()) > -1
      );
    else return data;
  };
  const filterState = (data: any) => {
    if (stateValue !== "all")
      return data.filter(
        (item: any) =>
          item.state.toLowerCase().indexOf(stateValue.toLowerCase()) > -1
      );
    else return data;
  };
  const filterSource = (data: any) => {
    if (sourceValue !== "all")
      return data.filter(
        (item: any) =>
          item.source.toLowerCase().indexOf(sourceValue.toLowerCase()) > -1
      );
    else return data;
  };
  const fiterTime = (Data: any) => {
    if (datetime.start !== datetime.end) {
      return Data.filter(
        (item: any) =>
          item.time1.seconds * 1000 >= datetime.start &&
          item.time1.seconds * 1000 <= datetime.end
      );
    } else return Data;
  };
  const fiterInput = (data: any) => {
    if (inputSearch !== "") {
      return data.filter(
        (item: any) =>
          item.name.toLowerCase().indexOf(inputSearch) > -1 ||
          item.nameservice.toLowerCase().indexOf(inputSearch) > -1 ||
          item.source.toLowerCase().indexOf(inputSearch) > -1 ||
          item.state.toLowerCase().indexOf(inputSearch) > -1
      );
    } else return data;
  };

  const filterData = fiterInput(
    filterService(filterSource(filterState(fiterTime(User))))
  );

  const Name = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Đang chờ",
      value: "Đang chờ",
    },
    {
      display: "Đã sử dụng",
      value: "Đã sử dụng",
    },
    {
      display: "Bỏ qua",
      value: "Bỏ qua",
    },
  ];
  const State = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Khám sản-phụ khoa",
      value: "khám sản phụ khoa",
    },
    {
      display: "Khám răng hàm mặt",
      value: "khám răng hàm mặt",
    },
    {
      display: "Khám tai mũi họng",
      value: "khám tai mũi họng",
    },
    {
      display: "Khám tim mạch",
      value: "khám tim mạch",
    },
    {
      display: "Khám hô hấp",
      value: "khám tổng quát",
    },
  ];
  const Source = [
    {
      display: "Tất cả",
      value: "all",
    },
    {
      display: "Kiosk",
      value: "Kiosk",
    },
    {
      display: "Hệ thống",
      value: "Hệ thống",
    },
  ];
  const handleChange = () => {};
  return (
    <div className="level-wrap">
      <div className="level-title">Danh sách thiết bị</div>
      <div className="level-selectorgroup">
        <div className="level-selectorgroup1">
          <SelectorDD
            title="Tên dịch vụ"
            width="154px"
            Menu={State}
            onGetValue={getNameValue}
          />
          <SelectorDD
            title="Tình trạng"
            width="154px"
            Menu={Name}
            onGetValue={getStateValue}
          />
          <SelectorDD
            title="Nguồn cấp"
            width="154px"
            Menu={Source}
            onGetValue={getSourceValue}
          />
          <Calendar />
        </div>
        <Search
          width="240px"
          title="Từ khóa"
          left="206.5px"
          onGetValue={handleInput}
        />
      </div>
      <TableLevel data={filterData} />
      <div className="level-pages">
        <Pages />
      </div>
      <div className="button-positon">
        <Link to="/cap-so/addlevel">
          <AddButton img={addbtn} handleClick={handleChange}>
            {" "}
            Cấp số mới
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Level;
