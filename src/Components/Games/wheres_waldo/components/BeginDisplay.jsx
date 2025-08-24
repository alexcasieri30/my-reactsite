import "./styles/begindisplay.scss";
import flag from "../../../../Assets/Images/flag.png";
import amongus from "../../../../Assets/Images/amongus.png";
import mrhappy from "../../../../Assets/Images/mrhappy.png";
import blinky from "../../../../Assets/Images/blinky.png";

function BeginDisplay({startTime, setStartGame}){
    function setStart(){
        setStartGame(true);
        startTime();
        console.log("starting time")
    }
    return(
        <div className="begin-display-container">
            <div className="begin-display-container-title">
                What to look for:
            </div>
            <div className="begin-display-container-content">
                <div className="begin-display-item">
                    <div className="display-item-desc">
                        American Flag
                    </div>
                    <div className="display-item-img">
                        <img src={flag} style={{height: '4em', width: 'auto'}}alt="" />
                    </div>
                </div>
                <div className="begin-display-item">
                    <div className="display-item-desc">
                        Among Us Character
                    </div>
                    <div className="display-item-img">
                        <img src={amongus} style={{height: '4em', width: 'auto'}} alt="" />
                    </div>
                </div>
                <div className="begin-display-item">
                    <div className="display-item-desc">
                        Mr. Happy
                    </div>
                    <div className="display-item-img">
                        <img src={mrhappy} style={{height: '4em', width: 'auto'}} alt="" />
                    </div>
                </div>
                <div className="begin-display-item">
                    <div className="display-item-desc">
                        Blinky
                    </div>
                    <div className="display-item-img">
                        <img src={blinky} style={{height: '4em', width: 'auto'}} alt="" />
                    </div>
                </div>
            </div>
            <div className="start-game-button">
                <button onClick={setStart}>Start</button>
            </div>
        </div>
    )
}

export default BeginDisplay;