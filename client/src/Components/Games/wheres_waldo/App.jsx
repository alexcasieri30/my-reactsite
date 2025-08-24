import manhattan from "../../../Assets/Images/manhattan.jpg";
import "./app.scss";
import { useEffect, useState } from "react";
import TimesSquare from "./components/TimesSquare";
import CentralPark from "./components/CentralPark";
import Seaport from "./components/Seaport";
import centralpark from "../../../Assets/Images/centralpark.jpg";
import seaport from "../../../Assets/Images/seaport.jpg";
import timessquare from "../../../Assets/Images/timessquare.jpg";
import redflag from "../../../Assets/Images/flag.png";
import amongus from "../../../Assets/Images/amongus.png";
import mrhappy from "../../../Assets/Images/mrhappy.png";
import blinky from "../../../Assets/Images/blinky.png";

function App(){
    //0 - centralpark, 1 - timessquare, 2 - seaport
    const [area, setArea] = useState(null);
    const [bkgimg, setBkgimg] = useState(null);
    const [objects, setObjects] = useState(null);

    useEffect(() => {
        let main = document.getElementById("whereswaldo-main");
        main.style.height = "100em";
        main.style.backgroundColor="black";
        console.log(area);
        window.scrollTo(0,0);
    })

    function handlePageClick(e){
        if (area===null){
            let adj_x = e.clientX / window.innerWidth * 100;
            let adj_y = (window.scrollY + e.clientY) / window.innerHeight * 100;
            if (adj_x > 57 && adj_x < 75 && adj_y > 60 && adj_y < 108){ // central park
                setArea(0)
                e.target.style.backgroundImage="none";
                setBkgimg(centralpark);
                console.log("central park")
            }else if (adj_x > 30&&adj_x < 40 && adj_y>130 && adj_y < 180){ // seaport
                setArea(2)
                e.target.style.backgroundImage="none";
                console.log("seaport")
                setBkgimg(seaport);
            }else if (adj_x > 40&&adj_x < 55 && adj_y>90 && adj_y < 125){ // times square
                setArea(1)
                e.target.style.backgroundImage="none";
                console.log("times square")
                setBkgimg(timessquare);
                setObjects([redflag, amongus, mrhappy, blinky])
            }
            console.log(adj_x, adj_y, area);
        }
    }

    // 30 40, 140-160 
    return(
        <div id="whereswaldo-main" onClick={(e) => handlePageClick(e)} onMouseOver={(e) => handlePageClick(e)}>
            {area==0 && <TimesSquare bkgSrc={bkgimg} objects={[0,1,2,3]} text={"Central Park"}/>}
            {area==1 && <TimesSquare bkgSrc={bkgimg} objects={objects} text={"Times Square"}/>}
            {area==2 && <TimesSquare bkgSrc={bkgimg} objects={[0,1,2,3]} text={"Seaport"}/>}
        </div>
    )
}

export default App;