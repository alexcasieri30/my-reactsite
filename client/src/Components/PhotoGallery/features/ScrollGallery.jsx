import React, { useEffect, useRef, useState } from 'react';
import './scrollgallery.scss';

const ScrollPair = ({ leftSrc, rightSrc }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade in when entering viewport, fade out when leaving
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-pair">
      <div className={`scroll-image left ${visible ? 'visible' : ''}`}>
        <img src={leftSrc} alt="Left" />
      </div>
      {rightSrc && (
        <div className={`scroll-image right ${visible ? 'visible' : ''}`}>
          <img src={rightSrc} alt="Right" />
        </div>
      )}
    </div>
  );
};

const ScrollGallery = ({ imageData, theme }) => {
  const [themeImages, setThemeImages] = useState([]);

  useEffect(() => {
    const themePhotos = [];
    const themeParts = theme.split("-");
    for (const info of imageData) {
      let filename = info["filename"];
      let url = info["url"];
      if (filename.split("-")[0] === themeParts[0] && filename.split("-")[1] == themeParts[1]) {
        themePhotos.push(url);
      }
    }
    console.log("PHOTOS: ", themePhotos);
    setThemeImages(themePhotos);

  }, [imageData, theme]);

  // Group into pairs
  const imagePairs = [];
  for (let i = 0; i < themeImages.length; i += 2) {
    imagePairs.push([themeImages[i], themeImages[i + 1]]);
  }

  return (
    <div className="scroll-gallery">
      {imagePairs.map(([left, right], idx) => {
        console.log("LEFT, RIGHT: ", left, right);
        return <ScrollPair key={idx} leftSrc={left} rightSrc={right} />;
      })}
    </div>
  );
};

export default ScrollGallery;
