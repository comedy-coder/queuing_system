import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import ForgotPassword from "./components/FogotPassord/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Devices from "./components/Devices/Devices";

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
           <Route path="" element={Dashboard} />
           <Route path="device" element={Devices} />
        </Route>
        
        
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
