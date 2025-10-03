
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterTitle from "../features/TypewriterTitle";
// import NavigationOrb from "../../NavigationOrb/NavigationOrb";
import PhotoStack from "../features/PhotoStack";
import Carousel from "../features/Carousel";
import ScrollGallery from "../features/ScrollGallery";
import "./homepage.scss";


export default function HomePage({ page, setPage, imgData }) {
    
    const [images, setImages] = useState([])
    const navigate = useNavigate();

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
                            imgData && <PhotoStack imageData={imgData} theme="buenosaires-caminito"/>
                        }
                    </div>
                    <div className="see-more-button" id="photostack-see-more">
                        <button 
                            onClick={() => navigate('/photo-gallery/gallery?theme=buenosaires&type=stack')} 
                            className="subtle-see-more"
                        >
                            Visit Gallery →
                        </button>
                    </div>
                </div>
                <div className="homepage-feature-section" id="monkeypod">
                    {
                        imgData && <Carousel imageData={imgData} theme="iguazu-brazilianside"/>
                    }
                    <div className="see-more-button">
                        <button 
                            onClick={() => navigate('/photo-gallery/gallery?theme=iguazu&type=carousel')} 
                            className="subtle-see-more"
                        >
                            Visit Gallery →
                        </button>
                    </div>
                </div>
                <div className="homepage-feature-section" id="scroll-gallery">
                    {
                        imgData && <ScrollGallery imageData={imgData} theme="chicago-city"/>
                    }
                    <div className="see-more-button">
                        <button 
                            onClick={() => navigate('/photo-gallery/gallery?theme=chicago&type=scroll')} 
                            className="subtle-see-more"
                        >
                            Visit Gallery →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

