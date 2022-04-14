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
    {
      display: "Thiết bị",
      path: "/device/adddevice",
      sub: "Danh sách thiết bị",
      sub1: "Thêm thiết bị",
    },
    {
      display: "Thiết bị",
      path: "/device/detail",
      sub: "Danh sách thiết bị",
      sub1: "Chi tiết thiết bị",
    },
    {
      display: "Thiết bị",
      path: "/device/update",
      sub: "Danh sách thiết bị",
      sub1: "Cập nhật thiết bị",
    },
  ];
  const titleIndex = title.findIndex((e) => e.path === pathname);

  return (
    <div className="container" style={{ borderRadius: "16px" }}>
      <NavDashBoard />
      <Headerinfo
        title={title[titleIndex].display}
        sub={title[titleIndex].sub}
        sub1={title[titleIndex].sub1}
      />
      <Outlet />
    </div>
  );
};

export default Homepage;
