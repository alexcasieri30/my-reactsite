
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import getRoutes from './Routes';
import TerminalModal from "./Components/Utilities/TerminalModal";
import ScrollToTop from './ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));

function AppContainer() {
  const [containerBg, setContainerBg] = useState("white");
  const [showTerminal, setShowTerminal] = useState(false);

  const setBackground = (color) => {
    console.log("Setting background to ", color);
    setContainerBg(color);
  }

  React.useEffect(() => {
    const handler = () => setShowTerminal(true);
    window.addEventListener('open-global-terminal', handler);
    return () => window.removeEventListener('open-global-terminal', handler);
  }, []);

  return (
    <div className="container" style={{ backgroundColor: containerBg }}>
      {/* Fixed terminal icon */}
      <div
        className="terminal-icon-fixed"
        title="Open Terminal"
        onClick={() => setShowTerminal(true)}
      >
        {/* Terminal icon SVG */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4af626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </div>
      <TerminalModal show={showTerminal} onClose={() => setShowTerminal(false)} />
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
    </div>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>
);