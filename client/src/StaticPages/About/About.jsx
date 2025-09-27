
import './about.scss';
import { useEffect, useState } from "react";

import AboutSite from "./AboutSite/AboutSite";
import AboutMe from "./AboutMe/AboutMe";
import TypewriterTitle from "../../Components/PhotoGallery/features/TypewriterTitle";

function About( { setBackground }){

    const [infoType, setInfoType] = useState(1); // Default to About Me

    useEffect(() => {
        setBackground("white");
    }, [setBackground]);

    function changeInfoType(e){
        if (e.target.dataset.toggle === "me") {
            setInfoType(1);
        } else if (e.target.dataset.toggle === "site") {
            setInfoType(-1);
        }
    }

    return(
        <div className="about-page-container">
            <div style={{position: 'absolute', top: '120px', left: '2.2em', zIndex: 30}}>
                <TypewriterTitle text={"> cd ./about"}/>
            </div>
            <div className="about-toggle-card">
                <div className="about-page-toggle-section">
                    <button
                        className={`about-toggle-btn${infoType === 1 ? ' active' : ''}`}
                        data-toggle="me"
                        onClick={changeInfoType}
                    >
                        About Me
                    </button>
                    <button
                        className={`about-toggle-btn${infoType === -1 ? ' active' : ''}`}
                        data-toggle="site"
                        onClick={changeInfoType}
                    >
                        About This Site
                    </button>
                </div>
                <div className="about-toggle-content">
                    {infoType === 1 && <AboutMe />}
                    {infoType === -1 && <AboutSite />}
                </div>
            </div>
        </div>
    )
}
export default About;