
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './gallerypage.scss';

export default function GalleryPage({ imgData }) {
    const [searchParams] = useSearchParams();
    const [filteredImages, setFilteredImages] = useState([]);
    
    const theme = searchParams.get('theme');
    const type = searchParams.get('type');

    useEffect(() => {
        fetch(`http://localhost:3001/photogallery/get_images/${theme}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setFilteredImages(data.map(item => item.url));
                }
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });

        if (imgData) {
            let images = [];
            if (theme) {
                // Filter images by theme
                const themeParts = theme.split("-");
                for (const info of imgData) {
                    let filename = info["filename"];
                    let url = info["url"];
                    if (filename.split("-")[0] === themeParts[0] && filename.split("-")[1] === themeParts[1]) {
                        images.push(url);
                    }
                }
            } else {
                // Show all images if no theme specified
                images = imgData.map(info => info.url);
            }
            setFilteredImages(images);
        }
    }, [imgData, theme]);

    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h1>Photo Gallery</h1>
                {theme && <p className="gallery-subtitle">Theme: {theme.replace('-', ' ')}</p>}
                {type && <p className="gallery-type">From: {type} view</p>}
            </div>
            
            <div className="gallery-grid">
                {filteredImages.map((imageUrl, index) => (
                    <div key={index} className="gallery-item">
                        <img 
                            src={imageUrl} 
                            alt={`Gallery image ${index + 1}`}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
