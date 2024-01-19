import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SwiperContextProvider } from './components/context/SwiperContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SwiperContextProvider>
        <App />
      </SwiperContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();