import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";

import Selector from "../../../components/Selector/Selector";

import "./account.scss";
import { Link } from "react-router-dom";
import TableAccount from "../../../components/TableAccount/TableAccount";
const Account = () => {
  const handleChange = () => {};
  return (
    <div className="account-wrap">
      <div className="account-title">Danh sách tài khoản</div>
      <div className="account-selectorgroup">
        <div className="account-selectorgroup1">
          <Selector
            title="Tên vai trò"
            option1="Tất cả"
            option2="Hoạt động"
            option3="Ngưng hoạt động"
          />
        </div>
        <Search />
      </div>
      <TableAccount />
      <div className="button-positon">
        <Link to="/setting/tai-khoan/addaccount">
          <AddButton handleClick={handleChange}> Thêm Tài khoản</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Account;
