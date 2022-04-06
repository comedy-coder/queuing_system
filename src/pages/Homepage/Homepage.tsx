import React from "react";
import { Outlet } from "react-router-dom";

import NavDashBoard from "../../components/NavDashBoard/NavDashBoard";

const Homepage = () => {
  return (
    <div className="container">
      <NavDashBoard />
      <Outlet />
    </div>
  );
};

export default Homepage;
