import { Grid } from "@mui/material";
import React from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph";
import DashboardItem from "../../components/DashboardITem/DashboardItem";
import { dashboarditem } from "../../exportimage/image";
import "./dashboard.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardCover from "../../components/DashboardCover/DashboardCover";
import { db } from "../../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
const Dashboard = () => {
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Numbers");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  console.log(User);
  let total = 0;
  let used = 0;
  let waitting = 0;
  let passed = 0;
  User.forEach((item: any, index: any) => {
    total = index + 1;
    if (item.state.toLowerCase() === "đã sử dụng") used += 1;
    if (item.state.toLowerCase() === "bỏ qua") passed += 1;
    if (item.state.toLowerCase() === "đang chờ") waitting += 1;
  });
  const Items = [
    {
      icon: dashboarditem.icon1,
      image: dashboarditem.img1,
      title: "Số thứ tự đã cấp",
      number: total,
    },
    {
      icon: dashboarditem.icon2,
      image: dashboarditem.img2,
      title: "Số thứ tự đã sử dụng",
      number: used,
    },
    {
      icon: dashboarditem.icon3,
      image: dashboarditem.img3,
      title: "Số thứ tự đang chờ",
      number: waitting,
    },
    {
      icon: dashboarditem.icon4,
      image: dashboarditem.img4,
      title: "Số thứ tự đã bỏ qua",
      number: passed,
    },
  ];
  return (
    <div className="container">
      <div className="dashboard-wrap">
        <div className="dashboard-title">Biểu đồ cấp số</div>
        <div className="dashboard-group">
          <Grid container spacing={1.63}>
            {Items.map((items, index) => (
              <Grid item key={index}>
                <Link to="cap-so">
                  <DashboardItem
                    icon={items.icon}
                    image={items.image}
                    title={items.title}
                    number={items.number}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="dashboard-linegraph">
          <DashboardGraph />
        </div>
        <div className="dashboard-cover">
          <DashboardCover />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
