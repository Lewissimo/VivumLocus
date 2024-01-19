import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashboardUser from './pages/DashboardUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<DashboardUser />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
