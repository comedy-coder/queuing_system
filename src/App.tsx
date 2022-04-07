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
          <Route path="/device" element={<Devices />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/cap-so" element={<Level />} />
          <Route path="/bao-cao" element={<Report />} />
          <Route path="/setting" element={<Setting />} />
        </Route>

        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
