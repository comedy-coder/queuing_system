import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Headerinfo from "../../components/HeaderInfo/Headerinfo";

import NavDashBoard from "../../components/NavDashBoard/NavDashBoard";

const Homepage = () => {
  const { pathname } = useLocation();
  const title = [
    {
      display: "",
      path: "/",
      sub: "Dashboard",
    },
    {
      display: "Thiết bị",
      path: "/device",
      sub: " Danh sách thiết bị",
    },
    {
      display: "Dịch vụ",
      path: "/dich-vu",
      sub: "Danh sách dịch vụ",
    },
    {
      display: "Cấp số",
      path: "/cap-so",
      sub: "Danh sách cấp số",
    },
    {
      display: "Báo cáo",
      path: "/bao-cao",
      sub: "Lập báo cáo",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting",
      sub: "Quản lý vai trò",
    },
    {
      display: "",
      path: "/profile",
      sub: "Thông tin cá nhân",
    },
  ];
  const titleIndex = title.findIndex((e) => e.path === pathname);

  return (
    <div className="container" style={{ borderRadius: "16px" }}>
      <NavDashBoard />
      <Headerinfo
        title={title[titleIndex].display}
        sub={title[titleIndex].sub}
      />
      <Outlet />
    </div>
  );
};

export default Homepage;
