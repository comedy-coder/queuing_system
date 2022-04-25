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
const Service = () => {
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Devices");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const filterData = (data: any) => {
    return data;
  };
  console.log(User);
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
          />
          <Calendar />
        </div>
        <Search width="300px" left="265.5px" title="Từ khóa" />
      </div>
      <TableService data={filterData(User)} />
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
