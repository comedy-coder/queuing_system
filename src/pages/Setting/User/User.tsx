import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";

import "./user.scss";
import { Link } from "react-router-dom";
import Calendar from "../../../components/Calendar/Calendar";
import Tableuser from "../../../components/TableUser/TableUser";
const User = () => {
  const handleChange = () => {};
  return (
    <div className="user-wrap">
      <div className="user-selectorgroup">
        <div className="device-selectorgroup1">
          <Calendar />
        </div>
        <Search title="Từ khóa" width="300px" left="266.5px" />
      </div>
      <Tableuser />
      <div className="button-positon">
        <Link to="/bao-cao">
          <AddButton handleClick={handleChange}> Tải về</AddButton>
        </Link>
      </div>
    </div>
  );
};

export default User;
