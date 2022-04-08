import { Grid } from "@mui/material";
import React from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph";
import DashboardItem from "../../components/DashboardITem/DashboardItem";
import { dashboarditem } from "../../exportimage/image";
import "./dashboard.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const Items = [
    {
      icon: dashboarditem.icon1,
      image: dashboarditem.img1,
      title: "Số thứ tự đã cấp",
      number: "4.221",
    },
    {
      icon: dashboarditem.icon2,
      image: dashboarditem.img2,
      title: "Số thứ tự đã sử dụng",
      number: "3.721",
    },
    {
      icon: dashboarditem.icon3,
      image: dashboarditem.img3,
      title: "Số thứ tự đang chờ",
      number: "468",
    },
    {
      icon: dashboarditem.icon4,
      image: dashboarditem.img4,
      title: "Số thứ tự đã bỏ qua",
      number: "32",
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
      </div>
    </div>
  );
};

export default Dashboard;
