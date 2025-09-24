
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import getRoutes from './Routes';
import ScrollToTop from './ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));

function AppContainer() {
  const [containerBg, setContainerBg] = useState("white");

  const setBackground = (color) => {
    console.log("Setting background to ", color);
    setContainerBg(color);
  }

  return (
    <div className="container" style={{ backgroundColor: containerBg }}>
      <BrowserRouter>
        <div className="header">
          <Navbar/>
        </div>
        <div className="middle">
          <div className="left"></div>
          <div className="mid">
            <ScrollToTop />
            <Routes>
              {getRoutes(setBackground)}
            </Routes>
          </div>
          <div className="right"></div>
        </div>
        <div className="footer"></div>
      </BrowserRouter>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);