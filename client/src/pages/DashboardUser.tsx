import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Fview from '../components/Fview';
import Inventory from '../components/Apps/Inventory/Inventory';
import Options from '../components/Options';

const DashboardUser = () => {
  return (
    <div className='Dashboard'>
        <nav className='MainNav'>
            <span>Wyloguj</span>
        </nav>
        <div className='Content'>
            <Routes>
                <Route index element={<Fview />} />
                <Route path='inventory' element={<Inventory />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
            <Outlet />
        </div>
        <div className='Options'>
          <Options />
        </div>
    </div>
  );
}

export default DashboardUser;
