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
    {
      display: "Dịch vụ",
      path: "/dich-vu/addservice",
      sub: "Danh sách dịch vụ",
      sub1: "Thêm dịch vụ",
    },
    {
      display: "Dịch vụ",
      path: "/dich-vu/update",
      sub: "Danh sách dịch vụ",
      sub1: "Chi tiết > Cập nhật",
    },
    {
      display: "Dịch vụ",
      path: "/dich-vu/detail",
      sub: "Danh sách dịch vụ",
      sub1: "Chi tiết ",
    },
    {
      display: "Cấp số",
      path: "/cap-so/addlevel",
      sub: "Danh sách cấp số",
      sub1: "Cấp số mới ",
    },
    {
      display: "Cấp số",
      path: "/cap-so/detail",
      sub: "Danh sách cấp số",
      sub1: "Chi tiết",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/tai-khoan",
      sub: "Quản lý tài khoản",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/tai-khoan/addaccount",
      sub: "Quản lý tài khoản",
      sub1: "Thêm tài khoản",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/tai-khoan/update",
      sub: "Quản lý tài khoản",
      sub1: "Cập nhật tài khoản",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/vai-tro",
      sub: "Quản lý vai trò",
      sub1: "",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/vai-tro/addrole",
      sub: "Quản lý vai trò",
      sub1: "Thêm vai trò",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/vai-tro/update",
      sub: "Quản lý vai trò",
      sub1: "Cập nhật vai trò",
    },
    {
      display: "Cài đặt hệ thống",
      path: "/setting/nguoi-dung",
      sub: "Nhật ký người dùng",
      sub1: "",
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
