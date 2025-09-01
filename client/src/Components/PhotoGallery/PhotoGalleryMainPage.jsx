import HomePage from "./pages/HomePage";
import "./photogallerymainpage.scss";
import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import TechPage from "./pages/TechPage";


export default function PhotoGalleryMainPage() { 
  const cursorSvg = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+") 16 16, auto`;
  const [page, setPage] = useState(0)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    let container = document.querySelector('.container');
    container.style.backgroundColor = "transparent";
    if (!imgData){
      fetch('http://localhost:3001/photogallery/get_images')
        .then((res) => {
          console.log(res)
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          console.log("DATA: ", data)
          setImgData(data)
          
        })
        .catch((err) => {
          console.error("Fetch error", err)
        })
    }
  })

  return (
    <div style={{cursor: cursorSvg, height: '100vh'}}>
      <div className="animated-gradient-bg">

      </div>
      <div>
        {/* <NavBar page={page} setPage={setPage}/> */}
      </div>
      <div className="photo-gallery-container">
        { 
          imgData && <HomePage page={page} setPage={setPage} imgData={imgData}/>
        }
        {
        //   page==0 && imgData && <HomePage page={page} setPage={setPage} imgData={imgData}/>
        }
        {
        //   page==1 && <AboutPage/>
        }
        {
        //   page==2 && <GalleryPage />
        }
        {
        //   page==3 && <ContactPage/>
        }
        {
        //   page==4 && <TechPage />
        }

      </div>
    </div>
  );
}
