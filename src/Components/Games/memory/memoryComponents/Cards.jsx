import React, { useState, useEffect, useInsertionEffect } from "react";
import uniqid from "uniqid";
import "./styles/cards.scss"
import Card from "./Card.jsx";
import { format } from "date-fns";

const sources = 26;

function Cards(){
    const availableCardIndices = [];
    for (let i = 0; i < sources; i++){
        availableCardIndices.push(i)
    }
    /*
        - best, curr -> tracking score
        - cardClicked -> temp to send to Card class to indicate shuffle
        - chosen_cards -> user chosen cards
        - cards -> cards displayed on screen
        - status -> playing, or did you lose
        - started -> used for memory instruction screen
        - level -> game level
    */
    const [info, setInfo] = useState({
        best:null,
        curr:0,
        cards:[],
        cardClicked: false,
        chosen_cards: [],
        status: false,
        started: false,
        level: 1,
    });
    const [gameOver, setGameOver] = useState(false);
    const [prevScores, setPrevScores] = useState([]);
    const [leaderboardAll, setLeaderboardAll] = useState(true);

    useEffect(() => {
        if (info.best == null){
            // getBest();
            // getGameInfo();
        }
    })

    async function getBest(){
        console.log("getting best...")
        let prevBest = await fetch(`http://localhost:3001/games/best?username=${window.localStorage.getItem('username')}`, {mode: 'cors'});
        prevBest = await prevBest.json();
        console.log("setting best...")
        // setInfo({
        //     best:prevBest,
        //     curr:0,
        //     cards:[],
        //     cardClicked: false,
        //     chosen_cards: [],
        //     status: false,
        //     started: false,
        //     level: 1,
        // })
        return prevBest;
    }

    async function getGameInfo(){
        let prevScores = await fetch(`http://localhost:3001/games/info?game=memory`, {mode: 'cors'});
        prevScores = await prevScores.json();
        console.log('setting prev scores')
        setPrevScores(prevScores);
    }

    const generateNewCards = (level)=>{
        let cardbody = [];
        for (let i = 0; i<level*4; i++){
            let randNum = Math.floor( (Math.random()*availableCardIndices.length) );
            let randomAvailableNum = availableCardIndices[randNum];
            availableCardIndices.splice(availableCardIndices.indexOf(randomAvailableNum), 1)
            cardbody.push(randomAvailableNum)
        }
        return cardbody;
    }
    const handleNewCardsClick = () => {
        let newlevel = info.level;
        let newcards = info.cards;
        let new_chosen_cards = info.chosen_cards;
        if (info.chosen_cards.length == info.level * 4){
            newlevel += 1;
            newcards = [];
            new_chosen_cards=[];
        }
        let newlevelcards = generateNewCards(newlevel);
        setInfo({
            best: info.best,
            curr: info.curr,
            cards: [],
            cardClicked: false,
            chosen_cards: info.chosen_cards,
            status: info.status,
            started: true,
            level: info.level,
        }, setTimeout(()=> {
            shuffleCards(newlevel, newlevelcards, new_chosen_cards);
        }, 200))
    }

    async function setTarget(card){
        let name = card.currentTarget.id;
        if (info.chosen_cards.includes(name)){
            setGameOver(true);
            console.log("game over");
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            const formattedToday = dd + '/' + mm + '/' + yyyy;
            await fetch('http://localhost:3001/games/gameScore', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: window.localStorage.getItem('username'), score: info.curr, game: 'memory', time: formattedToday})
            })
            console.log("DATE: ", new Date())
            await getGameInfo();
            console.log("PREV: ", prevScores);
            setInfo({
                best: info.best,
                curr: 0,
                cards: info.cards,
                cardClicked: info.cardClicked,
                chosen_cards: [],
                status: true,
                started: false,
                level: 1,
            })
        }else{
            let newinfo = {};
            if (info.curr >= info.best){
                newinfo = {
                    curr: info.curr + 1,
                    best: info.curr + 1,
                    cards: info.cards,
                    cardClicked: true,
                    chosen_cards: info.chosen_cards.concat(name),
                    status: false,
                    started: true,
                    level: info.level
                }
            }else{
                newinfo = {
                    best: info.best,
                    curr: info.curr + 1,
                    cards: info.cards,
                    cardClicked: true,
                    chosen_cards: info.chosen_cards.concat(name),
                    status: false,
                    started: true,
                    level: info.level
                }
            }
            setInfo(newinfo);
        }
    }
    const startGame = () => {
        setGameOver(false);
        let cardbody = []
        for (let i = 0; i<4; i++){
            let randNum = Math.floor( (Math.random()*availableCardIndices.length) );
            let randomAvailableNum = availableCardIndices[randNum];
            availableCardIndices.splice(availableCardIndices.indexOf(randomAvailableNum), 1)
            cardbody.push(randomAvailableNum)
        }
        setInfo({
            best: info.best,
            curr: 0,
            cards: cardbody,
            cardClicked: false,
            chosen_cards: [],
            status: false,
            started: true,
            level: info.level,
        })
    }

    const shuffleCards = (newlevel, newlevelcards, newchosencards) => {
        let current_cards = info.cards;
        let n = current_cards.length; 
        let shuffle_indices = [];
        for (let i = 0; i < n; i++){
            shuffle_indices.push(i);
        }
        if (newlevel !== info.level){
            setInfo({
                best: info.best,
                curr: info.curr,
                cards: newlevelcards,
                cardClicked: false,
                chosen_cards: newchosencards,
                status: info.status,
                started: info.started,
                level: newlevel,
            })
        }else{
            let newcardbody = [];
            for (let i = 0; i < n; i++){
                let randI = Math.floor( Math.random()*shuffle_indices.length );
                let randomAvailableI = shuffle_indices[randI];
                shuffle_indices.splice(shuffle_indices.indexOf(randomAvailableI), 1)
                newcardbody.push(info.cards[randomAvailableI])
            }
            setInfo({
                best: info.best,
                curr: info.curr,
                cards: newcardbody,
                cardClicked: false,
                chosen_cards: info.chosen_cards,
                status: info.status,
                started: info.started,
                level: newlevel,
            })
        }
    }

    const handleLeaderboardFilter = (e) => {
        console.log('clicked')
        if (e.currentTarget.innerHTML == "All Scores"){
            setLeaderboardAll(true)
        }else{
            setLeaderboardAll(false);
        }
    }
    if (info.cardClicked){
        handleNewCardsClick();
    }
    
    return(
        <div className="memory-board">
            <div className="memory-grid-header">
                <div className="startgame-button">
                    <button id="startgame-button" onClick={startGame}>Start!</button>
                </div>
                <div className="memory-grid-header-stats">
                    <div id="current-status">
                        {
                            info.status && <div>You Lost!</div>
                        }
                    </div>
                    <div id="curr">Score: {info.curr}</div>
                    <div id="best">Best: {info.best}</div>
                </div>
            </div>
            {
                gameOver && 
                <div className="memory-leaderboard">
                    <div className="memory-leaderboard-title">
                        Leaderboard
                    </div>
                    <div className="memory-leaderboard-selection">
                        <div className="memory-all-scores" 
                        style={leaderboardAll?{textDecoration: 'underline'}:{textDecoration: 'none'}} onClick={(e) => handleLeaderboardFilter(e)}>
                            All Scores
                        </div>
                        <div className="memory-your-scores" style={!leaderboardAll?{textDecoration: 'underline'}:{textDecoration: 'none'}} onClick={(e) => handleLeaderboardFilter(e)}>
                            Your Scores
                        </div>
                    </div>
                    <div className="prev-scores-table">
                        <div className="prev-scores-table-row">
                            <div className="prev-scores-table-col"><strong>Username</strong></div>
                            <div className="prev-scores-table-col"><strong>Score</strong></div>
                            <div className="prev-scores-table-col"><strong>Time</strong></div>
                        </div>
                        {prevScores.filter((info)=> {
                            if (leaderboardAll){
                                return info
                            }else{
                                return (info.username==window.localStorage.getItem('username')?info:null);
                            }
                        })
                        .map((info) => {
                            return <div className="prev-scores-table-row">
                                <div className="prev-scores-table-col">{info['username']}</div>
                                <div className="prev-scores-table-col">{info['score']}</div>
                                <div className="prev-scores-table-col">{info['time']}</div>
                            </div>
                        })}
                    </div>
                </div>
                
            }
            {       !gameOver && 
                    !info.started && 
                    <div id="instructions">
                        <div id="memory-title">
                            Memory
                        </div>
                        <br/><br/><br/>
                        <div id="memory-rules">
                            Rules:
                        </div>
                        <div id="memory-rules-text">
                            Choose a new cartoon character that has not been chosen 
                            each time. If you click on a character that has previously been 
                            clicked, you lose. Each new character you click adds a point to your
                            score. You have to remember which characters you chose in previous 
                            runs to gain points. Try to beat your high score!
                        </div>
                    </div>
                }
            <div className="memory-grid-container" style={info.started ? {display:'grid'}:{display:'none'}}>
                {
                    info.started &&
                    info.cards.map((item)=>{
                        return (
                            <Card fn={setTarget} index={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards