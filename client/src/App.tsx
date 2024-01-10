import React from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardUser from './pages/DashboardUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DashboardUser />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      
    </div>
  );
}

export default App;
