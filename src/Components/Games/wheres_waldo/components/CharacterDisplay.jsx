
import "./styles/characterdisplay.scss";
import flag from "../../../../Assets/Images/flag.png";
import amongus from "../../../../Assets/Images/amongus.png";
import mrhappy from "../../../../Assets/Images/mrhappy.png";
import blinky from "../../../../Assets/Images/blinky.png";
import { useEffect } from "react";

function CharacterDisplay({chars, objNames, describers, changeResult, x, y, clickTarget}){

    useEffect(() => {
        console.log("DESC: ", describers)
    })

    function characterSelection(e){
        console.log('SELECTING CHAR')
        console.log(e.target.dataset.char, clickTarget.id);
        if (e.target.dataset.char == clickTarget.id){
            let imgsrc = document.getElementById(e.target.dataset.char).src;
            console.log("imgsrc: ", imgsrc);
            changeResult(1, imgsrc);
        }else{
            changeResult(0, null);
        }
    }

    return(
        <div className="character-display-div" style={{position: 'absolute', top: y, left: x, zIndex: '2'}}>
            <div className="character-display-section-title">
                What did you find?
            </div>
            <div className="character-display-section-content">
                <div className="character-display-section-char" data-char="flag" onClick={characterSelection}>
                    <span data-char={describers[0]}>{objNames[0]}</span>
                    <span data-char={describers[0]}><img  data-char={describers[0]} src={chars[0]} style={{height: '40px', width: 'auto'}} alt="" /></span>
                </div>
                <div className="character-display-section-char" data-char="mrhappy" onClick={characterSelection}>
                    <span data-char={describers[1]}>{objNames[1]}</span>
                    <span data-char={describers[1]}><img data-char={describers[1]} src={chars[1]} style={{height: '40px', width: 'auto'}} alt="" /></span>
                </div>
                <div className="character-display-section-char" data-char="amongus" onClick={characterSelection}>
                    <span data-char={describers[2]}>{objNames[2]}</span>
                    <span data-char={describers[2]}><img  data-char={describers[2]} src={chars[2]} style={{height: '40px', width: 'auto'}} alt="" /></span>
                </div>
                <div className="character-display-section-char" data-char="blinky" onClick={characterSelection}>
                    <span data-char={describers[3]}>{objNames[3]}</span>
                    <span data-char={describers[3]}><img data-char={describers[3]} src={chars[3]} style={{height: '40px', width: 'auto'}} alt="" /></span>
                </div>
            </div>
        </div>
    )
}

export default CharacterDisplay;