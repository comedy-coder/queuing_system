import React from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const NavSub = () => {
  const Navdashboard = [
    {
      display: "Quản lý vai trò",
      path: "/setting/vai-tro",
    },
    {
      display: "Quản lý tài khoản",
      path: "/setting/tai-khoan",
    },
    {
      display: "Quản lý người dùng",
      path: "/setting/nguoi-dung",
    },
  ];
  const subRef = useRef(null);
  const { pathname } = useLocation();
  const Navindex = Navdashboard.findIndex((e) => e.path === pathname);
  return (
    <div className="navdashboardsub-group">
      {Navdashboard.map((item, index) => (
        <Link to={item.path} key={index}>
          <div
            className={`navdashboardsub-item ${index === 0 ? "bd-top" : ""} ${
              index === 2 ? "bd-bot" : ""
            } ${Navindex === index ? "active" : ""}`}
            ref={subRef}
          >
            {item.display}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavSub;
