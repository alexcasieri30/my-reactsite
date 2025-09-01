

import { useEffect, useState } from 'react'
import "./photostack.scss"


export default function PhotoStack({ imageData, theme }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [photos, setPhotos] = useState([])

    // imageData is { filename: <>, url: <> }

    useEffect(() => {
        const themePhotos = [];
        const themeParts = theme.split("-")
        for (const info of imageData) {
            let filename = info["filename"];
            let url = info["url"];
            if (filename.split("-")[0] === themeParts[0] && filename.split("-")[1] == themeParts[1]) {
                themePhotos.push(url);
            }
        }

        setPhotos(themePhotos); 

    }, [imageData, theme]);

    return (
        <div className="photostack-container">
        {photos.map((src, i) => {
            const isHovered = hoveredIndex === i;
            const isSomeHovered = hoveredIndex !== null;

            return (
            <img
                key={i}
                src={src}
                alt={`photo-${i}`}
                className={`stack-image 
                ${isHovered ? "hovered" : ""} 
                ${!isHovered && isSomeHovered ? "dimmed" : ""} 
                ${!isSomeHovered ? "stacked" : ""}
                `}
                style={{
                left: `${i * 100}px`,
                zIndex: isHovered ? 20 : i,
                transform: !isSomeHovered ? `translateY(${i * 20}px)` : undefined,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
            />
            );
        })}
        </div>
    );
    }
