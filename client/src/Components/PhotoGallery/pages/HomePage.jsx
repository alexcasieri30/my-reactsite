
import React, { useEffect, useState } from "react";
import TypewriterTitle from "../features/TypewriterTitle";
// import NavigationOrb from "../../NavigationOrb/NavigationOrb";
import PhotoStack from "../features/PhotoStack";
import Carousel from "../features/Carousel";

import "./homepage.scss";


export default function HomePage({ page, setPage, imgData }) {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        if (images.length == 0){
            setImages(Object.values(imgData))
        }
    })
    return (
        <div>
            <div className="homepage-container">
                <div className="homepage-item">
                    <TypewriterTitle text="> cd ./photo-gallery" />
                </div>
                 <div className="homepage-item scrolldown-feature">
                    {/* <NavigationOrb/> */}
                </div>
            </div>
            <div className="homepage-features">

                <div className="homepage-feature-section" id="chicago-city">
                    <div>
                        {
                            imgData && <PhotoStack imageData={imgData} theme="chicago-sunset"/>
                        }
                    </div>

                    <div className="see-more" style={{ position: 'relative', top: '500px'}}>
                        {/* <div className="see-more-text" onClick={() => setPage(2)}>See more</div> */}
                    </div>
                </div>
                <div className="homepage-feature-section" id="monkeypod">
                    {
                        imgData && <Carousel imageData={imgData} theme="chicago"/>
                    }      
                    <div className="see-more" style={{ position: 'relative', top: '0px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}>See more</div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

