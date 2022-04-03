import React from "react";
import "./App.scss";
import Login from "./components/Login/Login";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
