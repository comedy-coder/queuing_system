import React from "react";
import "./dashboardcover.scss";
import { Link } from "react-router-dom";
import CircularProgress from "../CircularProgress/CircularProgress";
import { ModelCardCustom } from "../CircularProgress/CircularProgress3";
import DashboardCalendar from "../DashboardCalendar/DashboardCalendar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useEffect, useState } from "react";
const DashboardCover = () => {
  const [User, setUser] = useState<any>([]);
  const [UserServices, setUerSerivces] = useState<any>([]);
  const [UserLevel, setUserLevel] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Numbers");
      const data = await getDocs(UserColecctionRef);

      setUserLevel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  console.log(User);
  let total = 0;
  let used = 0;
  let waitting = 0;
  let passed = 0;
  UserLevel.forEach((item: any, index: any) => {
    total = index + 1;
    if (item.state.toLowerCase() === "đã sử dụng") used += 1;
    if (item.state.toLowerCase() === "bỏ qua") passed += 1;
    if (item.state.toLowerCase() === "đang chờ") waitting += 1;
  });
  let percentUserd = Math.floor((used / total) * 100);
  let percentwaiting = Math.floor((waitting / total) * 100);
  // const [activeDevices, setActiveDevices] = useState(0);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Devices");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Services");
      const data = await getDocs(UserColecctionRef);

      setUerSerivces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  let totalDevices = 0;
  let percentDevices = 0;
  let ActivDevices = 0;
  let InActiveDevices = 0;
  User.forEach((item: any, index: any) => {
    totalDevices = index + 1;
    if (item.active) return (ActivDevices = ActivDevices + 1);
    else return (InActiveDevices = ActivDevices + 1);
  });
  percentDevices = Math.floor((ActivDevices / totalDevices) * 100);

  let totalServices = 0;
  let percentServices = 0;
  let ActivServices = 0;
  let InActiveServies = 0;
  UserServices.forEach((item: any, index: any) => {
    totalServices = index + 1;
    if (item.active) return (ActivServices = ActivServices + 1);
    else return (InActiveServies = InActiveServies + 1);
  });
  percentServices = Math.floor((ActivServices / totalServices) * 100);

  return (
    <div className="dashboardcover-wrap">
      <span className="dashboardcover-title">Tổng quan</span>
      <Link to="/device">
        <CircularProgress
          percent={percentDevices}
          percentBigColor={"#FF7506"}
          percentSmallColor={"#7E7D88"}
          icon={"2"}
          count={totalDevices}
          title={"Thiết bị"}
          mainColor={"#FF7506"}
          iconColor={
            "invert(49%) sepia(80%) saturate(1563%) hue-rotate(352deg) brightness(98%) contrast(110%)"
          }
          item1Count={ActivDevices}
          item1Title={"Đang hoạt động"}
          item1Color={"#FFD130"}
          item2Count={InActiveDevices}
          item2Title={"Ngưng hoạt động"}
          item2Color={"#7E7D88"}
        />
      </Link>
      <CircularProgress
        percent={percentServices}
        percentBigColor={"#4277FF"}
        percentSmallColor={"#7E7D88"}
        icon={"3"}
        count={totalServices}
        title={"Dịch vụ"}
        mainColor={"#4277FF"}
        iconColor={
          "invert(48%) sepia(69%) saturate(4951%) hue-rotate(212deg) brightness(102%) contrast(102%)"
        }
        item1Count={ActivServices}
        item1Title={"Đang hoạt động"}
        item1Color={"#4277FF"}
        item2Count={InActiveServies}
        item2Title={"Ngưng hoạt động"}
        item2Color={"#7E7D88"}
      />
      <ModelCardCustom
        percent={percentUserd}
        percent1={percentwaiting}
        percentBigColor={"#35C75A"}
        percentSmallColor={"#7E7D88"}
        percentSmallestColor={"#F178B6"}
        icon={"4"}
        count={total}
        title={"Cấp số"}
        mainColor={"#35C75A"}
        iconColor={
          " invert(53%) sepia(89%) saturate(370%) hue-rotate(83deg) brightness(101%) contrast(92%)"
        }
        item1Count={used}
        item1Title={"Đã sử dụng"}
        item1Color={"#35C75A"}
        item2Count={waitting}
        item2Title={"Đang chờ"}
        item2Color={"#7E7D88"}
        item3Count={passed}
        item3Title={"Bỏ qua"}
        item3Color={"#F178B6"}
      />
      <DashboardCalendar />
    </div>
  );
};

export default DashboardCover;
