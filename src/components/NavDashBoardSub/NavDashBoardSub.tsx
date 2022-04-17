import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navdashboardsub.scss";
import icon from "../../assets/images/homepage/dot.png";
import { useRef } from "react";

const NavDashBoardSub = () => {
  const Navdashboard = [
    {
      display: "Quản lý vai trò",
      path: "/setting",
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
    <div className="navdashboardsub">
      <div className="navdashboardsub-img">
        <img srcSet={`${icon} 2x`} alt="" />
      </div>

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
    </div>
  );
};

export default NavDashBoardSub;
