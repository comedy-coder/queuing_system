import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import ForgotPassword from "./components/FogotPassord/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Devices from "./pages/Devices/Devices";
import Service from "./pages/Services/Service";
import Level from "./pages/Levels/Level";
import Report from "./pages/Report/Report";
import Setting from "./pages/Setting/Setting";
import Profile from "./pages/Profile/Profile";
import Adddevice from "./components/Adddevice/Addevice";
import DeviceDetail from "./components/DeviceDetail/DeviceDetail";
import UpDatedevice from "./components/DeviceUpDate/DeviceUpDate";
import Addservice from "./components/AddService/Addservice";
import AddLevel from "./components/AddLevel/AddLevel";

import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import LevelDetail from "./components/LevelDetail/LevelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Homepage />
            </AuthRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/device/adddevice" element={<Adddevice />} />
          <Route path="/device/detail" element={<DeviceDetail />} />
          <Route path="/device/update" element={<UpDatedevice />} />
          <Route path="/device" element={<Devices />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/dich-vu/addservice" element={<Addservice />} />
          <Route path="/dich-vu/detail" element={<ServiceDetail />} />
          <Route path="/dich-vu/update" element={<Addservice />} />
          <Route path="/cap-so" element={<Level />} />
          <Route path="/cap-so/addlevel" element={<AddLevel />} />
          <Route path="/cap-so/detail" element={<LevelDetail />} />
          <Route path="/bao-cao" element={<Report />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
