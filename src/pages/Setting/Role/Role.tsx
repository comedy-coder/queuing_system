import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";

import "./role.scss";
import { Link } from "react-router-dom";
import Tablerole from "../../../components/TableRole/TableRole";
const Role = () => {
  const handleChange = () => {};
  return (
    <div className="role-wrap">
      <div className="role-title">Danh sách tài khoản</div>
      <div className="role-selectorgroup">
        <div className="role-selectorgroup1"></div>
        <Search title="Từ khóa" width="240px" left="206.5px" />
      </div>
      <Tablerole />
      <div className="button-positon">
        <Link to="/setting/vai-tro/addrole">
          <AddButton handleClick={handleChange}> Thêm vai trò</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Role;
