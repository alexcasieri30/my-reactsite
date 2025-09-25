import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../Assets/Images/home.png";
import Settings from "../../Assets/Images/settings.png";
import Games from "../../Assets/Images/games.png";
// import Shop from "../../Assets/Images/shop.png";
import PhotoGallery from "../../Assets/Images/photogallery-navbar.png";
import About from "../../Assets/Images/about.png";
import Blog from "../../Assets/Images/blogging.png";
import Plane from "../../Assets/Images/plane-icon.png";
import "./navbar.scss";


const Navbar = function(){
    const [visible, setVisible] = useState(true);
    const lastScroll = useRef(window.scrollY);
    const mouseZone = useRef(null);

    // Removed scroll-based hiding logic; navbar visibility is now mouse-based only


    useEffect(() => {
        let inZone = false;
        const handleMouseMove = (e) => {
            if (e.clientY < 60) {
                if (!inZone) {
                    setVisible(true);
                    inZone = true;
                }
            } else {
                if (inZone) {
                    setVisible(false);
                    inZone = false;
                }
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={`main-navbar-container${visible ? '' : ' navbar-hidden'}`} ref={mouseZone}>
            <Link to="/about" className="navbar-section">
                <div id="navbar-section-2">
                    <img src={About} className="navbar-icon" alt="About" />
                </div>
            </Link>
            <Link to="/" className="navbar-section">
                <div id="navbar-section-1">
                    <img src={Home} className="navbar-icon" alt="Home" />
                </div>
            </Link>
            <Link to="/games" className="navbar-section">
                <div id="navbar-section-5">
                    <img src={Games} className="navbar-icon" alt="Games" />
                </div>
            </Link>
            <Link to="/photo-gallery" className="navbar-section" state={{items: []}}>
                <div id="navbar-section-4">
                    <img src={PhotoGallery} className="navbar-icon" alt="Photo Gallery" />
                </div>
            </Link>
            <Link to="/travel" className="navbar-section">
                <div id="navbar-section-6">
                    <img src={Plane} className="navbar-icon" alt="Travel" />
                </div>
            </Link>
            <Link to="/settings" className="navbar-section">
                <div id="navbar-section-6">
                    <img src={Settings} className="navbar-icon" alt="Settings" />
                </div>
            </Link>
        </div>
    );
}
export default Navbar;