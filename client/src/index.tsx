import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SwiperContextProvider } from './components/context/SwiperContext';
import { YourStaffContextProvider } from './pages/Apps/YourStaff/YourStaffContext';
import MainViewContextProvider from './pages/Templates/MainViewContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <MainViewContextProvider>

      <YourStaffContextProvider>
        <SwiperContextProvider>
          <App />
        </SwiperContextProvider>
      </YourStaffContextProvider>
      </MainViewContextProvider>
    </BrowserRouter>
);

reportWebVitals();