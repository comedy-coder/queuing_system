import React from "react";
import addbtn from "../../assets/images/addbutton/addbtn.png";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import Search from "../../components/SearchBox/Search";
import "./service.scss";
import Calendar from "../../components/Calendar/Calendar";
import TableService from "../../components/TableService/TableService";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import Pages from "../../components/PaginatonPages/Pages";
import { useEffect, useState } from "react";
import { db } from "../../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../../Store/Provider";
import { updateProfile } from "firebase/auth";
const Service = () => {
  const [valueState, setvalueState] = useState<any | null>();
  const [inputSearch, setInputSearch] = useState<any | "">("");
  const [state] = useContext(Context);
  const datetime = state.datetime;
  const now = new Date().getTime();
  console.log(now);
  const getInputValue = (input: any) => {
    setInputSearch(input);
  };
  const getValueState = (value: any) => {
    setvalueState(Number(value));
  };

  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Services");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const filterData = (data: any) => {
    if (valueState === 1) {
      const result = data.filter(
        (data: any) => data.active === Boolean(valueState)
      );

      if (inputSearch !== "") {
        const filtertime = result.filter(
          (item: any) => datetime.x <= result.date && result.date <= datetime.y
        );
        return filtertime.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.nameservice.toLowerCase().indexOf(inputSearch) > -1 ||
            item.desservice.toLowerCase().indexOf(inputSearch) > -1
        );
      } else return result;
    } else if (valueState === 0) {
      let result = data.filter(
        (data: any) => data.active === Boolean(valueState)
      );
      if (inputSearch)
        return result.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.nameservice.toLowerCase().indexOf(inputSearch) > -1 ||
            item.desservice.toLowerCase().indexOf(inputSearch) > -1
        );
      else return result;
    } else if (inputSearch) {
      return data.filter(
        (item: any) =>
          item.code.toLowerCase().indexOf(inputSearch) > -1 ||
          item.nameservice.toLowerCase().indexOf(inputSearch) > -1 ||
          item.desservice.toLowerCase().indexOf(inputSearch) > -1
      );
    } else return data;
  };

  const fiterTime = (Data: any) => {
    if (datetime.start !== datetime.end) {
      return Data.filter(
        (item: any) =>
          item.date.seconds * 1000 >= datetime.start &&
          item.date.seconds * 1000 <= datetime.end
      );
    } else return Data;
  };
  const Datatimepicker = fiterTime(filterData(User));
  console.log(Datatimepicker);
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
  const handleChange = () => {};
  return (
    <div className="service-wrap">
      <div className="service-title">Quản lý dịch vụ</div>
      <div className="service-selectorgroup">
        <div className="service-selectorgroup1">
          <SelectorDD
            width="300px"
            title="Trạng thaí hoạt động"
            Menu={Active}
            onGetValue={getValueState}
          />
          <Calendar />
        </div>
        <Search
          width="300px"
          left="265.5px"
          title="Từ khóa"
          onGetValue={getInputValue}
        />
      </div>
      <TableService data={fiterTime(filterData(User))} />
      <div className="level-pages">
        <Pages />
      </div>
      <div className="button-positon">
        <Link to="/dich-vu/addservice">
          <AddButton img={addbtn} handleClick={handleChange}>
            {" "}
            Thêm dịch vụ
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Service;
