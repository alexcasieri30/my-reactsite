

import "./styles/centralpark.scss";
import StopWatch from "./StopWatch";
import {useEffect, useState} from "react";

export default function CentralPark({bkgSrc, place}){
    const [objectsfound, setObjectsfound] = useState([]);
    const [timeStarted, setTimeStarted] = useState(false);

    useEffect(() => {
        let main = document.getElementById("whereswaldo-main")
        main.style.height="60em";
    })

    return(
        <div className="centralpark-background-main">
            <div className="centralpark-background-gameinfo">
                <div className="centralpark-background-gameinfo-title">
                    {place}
                </div>
                <div className="centralpark-background-objectsfound">
                    <div className="centralpark-background-objectsfound-res">
                        {/* {result==0 && <div className="img-click-result">Incorrect</div>}
                        {result==1 && <div className="img-click-result">Correct</div>} */}
                    </div>
                    <div className="centralpark-background-objectsfound-objects">
                        {objectsfound.map((src) => {
                        return <div className="found-image"><img src={src} style={{height: 40 + 'px'}}></img></div>
                        })}
                    </div>
                </div>
                <div className="centralpark-background-gameinfo-timer">
                {timeStarted && <StopWatch timeStarted={timeStarted}/>}
                </div>
            </div>
            <div className="centralpark-photo">
                <div className="centralpark-photo-div">
                    <img src={bkgSrc} id="whereswaldo-img-background" alt="" />
                </div>
            </div>
        </div>
    )
}