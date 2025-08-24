import "./styles/timessquare.scss";
import redflag from "../../../../Assets/Images/flag.png";
import amongus from "../../../../Assets/Images/amongus.png";
import mrhappy from "../../../../Assets/Images/mrhappy.png";
import blinky from "../../../../Assets/Images/blinky.png";
import BeginDisplay from "./BeginDisplay";
import { useEffect, useState } from "react";
import StopWatch from "./StopWatch";
import CharacterDisplay from "./CharacterDisplay";

function App({bkgSrc, objects, text}){
  const [startGame, setStartGame] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const [showingDisplay, setShowingDisplay] = useState(true);
  const [coordinates, setCoordinates] = useState({})
  const [clickTarget, setClickTarget] = useState(null);
  const [result, setResult] = useState(null);
  const [objectsfound, setObjectsfound] = useState([]);
  const [styles, setStyles] = useState({});
  const [gameover, setGameOver] = useState(false);
  const [objNames, setObjNames] = useState([]);
  const [describers, setDescribers] = useState([]);


  useEffect(() => {
    console.log(objects, text, objNames, describers);
    if (text==='Times Square' && objNames.length==0){
      console.log("changing obj names")
      setObjNames(['Flag','Among Us','Mr. Happy','Blinky'])
      setDescribers(['flag','amongus', 'mrhappy','blinky'])
    }
    let main = document.getElementById("whereswaldo-main");
    main.style.height = "60em";
    if (objectsfound.length===4){
      console.log('game over')
    }
    if (!startGame){
      document.querySelector(".times-square-photo").style.opacity = '0.5';
    }else{
      document.querySelector(".times-square-photo").style.opacity = '1';
    }
  })

  function startTime(){
    setTimeStarted(true);
  }

  function showCharacterDisplay(e){
    console.log(e.clientX, e.clientY);
    console.log(e.target.tagName, startGame);
    if (e.target.tagName=="SPAN"|| e.target.classList.contains("character-display-section-title")||e.target.classList.contains("character-display-section-char")){
      return;
    }
    setClickTarget(e.target);
    setShowingDisplay(!showingDisplay);
    console.log(e.clientX + window.scrollX, e.clientY + window.scrollY);
    setCoordinates({x: e.clientX + window.scrollX, y: e.clientY + window.scrollY})
  }

  function changeResult(res, obj){
    setResult(res);
    if (!objectsfound.includes(obj) && obj!=null){
      setObjectsfound(
        [...objectsfound, obj]
      );
      console.log(styles);
      let src = obj.slice(21, obj.length);
      setStyles(
        { ...styles,
          [src]: {
            height: '3em',
            backgroundColor: 'black',
            border: 'solid 10px black',
            borderRadius: '3em'
          }
        }
      )
    }
  }

  return(
    <div className="main-background" onClick={(e) => showCharacterDisplay(e)}>
      <div>
       {showingDisplay && timeStarted && <CharacterDisplay chars={objects} objNames={objNames} describers={describers} changeResult={changeResult} x={coordinates['x']} y={coordinates['y']} clickTarget={clickTarget}/>}
      </div>
      <div className="main-background-gameinfo">
        <div className="main-background-gameinfo-title">
          {text}
        </div>
        <div className="main-background-objectsfound">
          <div className="main-background-objectsfound-res">
            {result==0 && <div className="img-click-result">Incorrect</div>}
            {result==1 && <div className="img-click-result">Correct</div>}
          </div>
          <div className="main-background-objectsfound-objects">
            {objectsfound.map((src) => {
              return <div className="found-image"><img src={src} style={{height: 40 + 'px', width: 'auto'}}></img></div>
            })}
          </div>
        </div>
        <div className="main-background-gameinfo-timer">
          {timeStarted && <StopWatch timeStarted={timeStarted}/>}
        </div>
      </div>
      {!startGame &&
        <div className="begin-display-div">
           <BeginDisplay startTime={startTime} setStartGame={setStartGame}/>
        </div>
      }
      <div className="times-square-photo">
        <div className="times-square-photo-div">
          <img src={bkgSrc} alt="" id="background" />
          <img src={objects[0]} alt="" id="flag" style={styles[objects[0]]}/> 
          <img src={objects[1]} alt="" id="amongus" style={styles[objects[1]]} />
          <img src={objects[2]} alt="" id="mrhappy" style={styles[objects[2]]}/>
          <img src={objects[3]} alt="" id="blinky" style={styles[objects[3]]}/>
        </div>
      </div>
    </div>
  )
}

export default App;