import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./font/OpenDyslexic3-Bold.ttf";
import "./font/OpenDyslexic3-Regular.ttf";
import './index.css';
import App from './App';

window.font = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
