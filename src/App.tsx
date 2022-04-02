import React from 'react';
import './App.scss'
import Login from './components/Login/Login';
import AuthContextProvier, { useAuth } from './Context/AuthContext';
function App() {
  return (
    <div className="App">
  <AuthContextProvier >
        <Login />

      </AuthContextProvier>
    </div>
  );
}

export default App;
