import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";
import Pages from "../../../components/PaginatonPages/Pages";

import addbtn from "../../../assets/images/addbutton/addbtn.png";
import "./account.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableAccount from "../../../components/TableAccount/TableAccount";
import DropDownDD from "../../../components/SelectorDropdown/SelectorDD";
const Account = () => {
  const [currentPage, setCurrentPage] = useState<any | null>(1);
  const [userPerPage, setUserPerPage] = useState<any | null>(8);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Users");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
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

  const [inputSearch, setInputSearch] = useState<any | "">("");
  const getInputValue = (input: any) => {
    setInputSearch(input);
  };
  const [valueState, setvalueState] = useState<any | null>();
  const getValueState = (value: any) => {
    setvalueState(Number(value));
  };
  const filterData = (data: any) => {
    if (valueState === 1) {
      const result = data.filter(
        (data: any) => data.state === Boolean(valueState)
      );

      if (inputSearch !== "") {
        return result.filter(
          (item: any) =>
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.acc.toLowerCase().indexOf(inputSearch) > -1 ||
            item.email.toLowerCase().indexOf(inputSearch) > -1
        );
      } else return result;
    } else if (valueState === 0) {
      let result = data.filter(
        (data: any) => data.state === Boolean(valueState)
      );
      if (inputSearch)
        return result.filter(
          (item: any) =>
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.acc.toLowerCase().indexOf(inputSearch) > -1 ||
            item.email.toLowerCase().indexOf(inputSearch) > -1
        );
      else return result;
    } else if (inputSearch) {
      return data.filter(
        (item: any) =>
          item.name.toLowerCase().indexOf(inputSearch) > -1 ||
          item.acc.toLowerCase().indexOf(inputSearch) > -1 ||
          item.email.toLowerCase().indexOf(inputSearch) > -1
      );
    } else return data;
  };

  const handleChange = () => {};
  return (
    <div className="account-wrap">
      <div className="account-title">Danh sách tài khoản</div>
      <div className="account-selectorgroup">
        <div className="account-selectorgroup1">
          <DropDownDD width="300px" onGetValue={getValueState} Menu={Active} />
        </div>
        <Search
          title="Từ khóa"
          width="240px"
          left="206.5px"
          onGetValue={getInputValue}
        />
      </div>
      <TableAccount data={filterData(User)} />
      <div className="level-pages">
        <Pages
          userPerPage={userPerPage}
          totalUsers={User.length}
          paginate={paginate}
        />
      </div>
      <div className="button-positon">
        <Link to="/setting/tai-khoan/addaccount">
          <AddButton img={addbtn} handleClick={handleChange}>
            {" "}
            Thêm Tài khoản
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Account;
