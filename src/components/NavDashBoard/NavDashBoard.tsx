import React from "react";
import logo from "../../assets/images/homepage/Logo_alta.png";
import "./navdashboard.scss";
import image from "../../exportimage/image";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";

import icon from "../../assets/images/homepage/dot.png";
import NavSub from "./NavSub";
import { ListItem } from "@mui/material";
const NavDashBoard = () => {
  const handleLogout = () => {};
  const Navbar = [
    {
      display: "Dashboard",
      path: ["/"],
      img: image.img1,
    },

    {
      display: "Thiết bị",
      path: [
        "/device",
        "/device/detail",
        "/device/update",
        "/device/adddevice",
      ],
      img: image.img2,
    },
    {
      display: "Dịch vụ",
      path: [
        "/dich-vu",
        "/dich-vu/detail",
        "/dich-vu/update",
        "/dich-vu/addservice",
      ],
      img: image.img3,
    },
    {
      display: "Cấp số",
      path: ["/cap-so", "/cap-so/addlevel", "/cap-so/detail"],
      img: image.img4,
    },
    {
      display: "Báo cáo",
      path: ["/bao-cao"],
      img: image.img5,
    },
    {
      display: "Cài đặt hệ thống",
      path: [
        "#",
        "/setting/vai-tro/update",
        "/setting/vai-tro/addrole",
        "/setting/vai-tro",
        "/setting/tai-khoan",
        "/setting/tai-khoan/update",
        "/setting/tai-khoan/addaccount",
        "/setting/nguoi-dung",
      ],
      img: image.img6,
    },
  ];
  const { pathname } = useLocation();
  const ativeNav = Navbar.findIndex((e) => e.path.some((e) => e === pathname));

  return (
    <div className="container-wrapper">
      <div className="navbar__logo">
        <img srcSet={`${logo} 3x`} alt="" />
      </div>
      <div className="navbar__menu">
        {Navbar.map((item, index) => (
          <div
            className={`navbar__menu__item ${
              index === ativeNav ? "active" : ""
            }`}
            key={index}
          >
            <Link to={item.path[0]}>
              <img srcSet={`${item.img} 2x`} alt="" />
              <span>{item.display}</span>
              {index === 5 ? (
                <div style={{ display: "flex", width: "12px" }}>
                  <img srcSet={`${icon} 2x`} alt="" />
                  <NavSub />
                </div>
              ) : (
                ""
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="navbar__logout">
        <Link to="./login">
          <Button
            backgroundColor="orange1"
            handleClick={handleLogout}
            icon={image.img8}
            color="orange"
            size="big"
          >
            {" "}
            Đăng xuất{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavDashBoard;
