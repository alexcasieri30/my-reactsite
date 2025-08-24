import React, { useState } from "react";
import "./styles/Board.scss";
import ControlBoard from "./ControlBoard";
import SavedBoard from "./Saved";



const Board = function(){
    const initialboard = [];
    for (let i = 0; i < 100; i++){
        initialboard.push('');
    }
    const initialAllBoards = [];
    for (let i = 0; i < 100; i++){
        initialAllBoards.push([]);
    }

    const grid_cells = [];
    const [numRows, setNumRows] = useState(10);
    const [penSize, setPenSize] = useState(0);
    const [color, setColor] = useState('');
    const [eraser, setEraser] = useState(false);
    const [board, setBoard] = useState([...initialboard]);
    const [allBoards, setAllBoards] = useState(initialAllBoards);
    const [allBoardsIndex, setAllBoardsIndex] = useState(0);
    function handleRowChange(val){
        setNumRows(
            val
        )
        let newboard = [];
        for (let i = 0; i < Math.pow(val, 2); i++){
            newboard.push('')
        }
        setBoard(
            newboard
        )
    }
    function handlePenSizeChange(val){
        setPenSize(
            val
        )
    }
    function handleColorChange(val){
        setEraser(
            false
        )
        setColor(
            val
        )
    }
    
    function fillCells(e){
        
        let fillcolor = color;
        if (color==="random"){
            let r1 = Math.floor( Math.random()*255 );
            let r2 = Math.floor( Math.random()*255 );
            let r3 = Math.floor( Math.random()*255 );
            fillcolor = `rgba(${r1},${r2},${r3})`;
        }
        if (eraser){
            fillcolor = "lightblue";
        }
        let parent = e.currentTarget.parentNode;
        let currentId = parseInt(e.currentTarget.id);
        e.currentTarget.style.backgroundColor=fillcolor;
        let boardIndex = parseInt(currentId);
        let newboard = board;
        newboard[boardIndex] = fillcolor;
        if (penSize >= 2) {
            // Left neighbor
            if (currentId - 1 >= 0 && parent.children[currentId - 1]) {
                parent.children[currentId - 1].style.backgroundColor = fillcolor;
                newboard[boardIndex - 1] = fillcolor;
            }
            // Top neighbor
            if (currentId - numRows >= 0 && parent.children[currentId - numRows]) {
                parent.children[currentId - numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex - numRows] = fillcolor;
            }
            // Top-left neighbor
            if (currentId - 1 - numRows >= 0 && parent.children[currentId - 1 - numRows]) {
                parent.children[currentId - 1 - numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex - 1 - numRows] = fillcolor;
            }
        }
        if (penSize >= 3) {
            if (currentId + 1 < parent.children.length && parent.children[currentId + 1]) {
                parent.children[currentId + 1].style.backgroundColor = fillcolor;
                newboard[boardIndex + 1] = fillcolor;
            }
            if (currentId + numRows < parent.children.length && parent.children[currentId + numRows]) {
                parent.children[currentId + numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex + numRows] = fillcolor;
            }
            if (currentId + 1 + numRows < parent.children.length && parent.children[currentId + 1 + numRows]) {
                parent.children[currentId + 1 + numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex + 1 + numRows] = fillcolor;
            }
            if (
                currentId - 1 + numRows >= 0 &&
                currentId - 1 + numRows < parent.children.length &&
                parent.children[currentId - 1 + numRows]
            ) {
                parent.children[currentId - 1 + numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex - 1 + numRows] = fillcolor;
            }
            if (
                currentId + 1 - numRows >= 0 &&
                currentId + 1 - numRows < parent.children.length &&
                parent.children[currentId + 1 - numRows]
            ) {
                parent.children[currentId + 1 - numRows].style.backgroundColor = fillcolor;
                newboard[boardIndex + 1 - numRows] = fillcolor;
            }
        }
        setBoard(newboard);
    }
    const useEraser = () => {
        setEraser(true);
    }
    for (let i = 0; i < Math.pow(numRows, 2); i++){
        let el = <div id={i} className="gridCell" onMouseOver={fillCells}></div>
        grid_cells.push(el);
    }

    function handleSaveButton(){
        console.log("FROM SAVE: ", [...board]);
        allBoards[allBoardsIndex] = [...board];
        console.log(allBoards[allBoardsIndex].length);
        let numberscopy = [...allBoards];
        console.log(numberscopy);
        setAllBoards(
            numberscopy
        )
        setAllBoardsIndex(
            allBoardsIndex + 1
        )
    }
    function handleClearButton(e){
        let cells = e.currentTarget.parentNode.parentNode.children[1].children[0].children[0].children;
        console.log(cells);
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "lightblue";
        }
        const initialboard = [];
        for (let i = 0; i < cells.length; i++){
            initialboard.push('');
        }
        setBoard(
            [...initialboard]
        )
    }
    return (
        <div className="esketch-page">
            <div className="esketch-section-top">

            </div>
            <div className="esketch-Board">
                <div className="esketch-Board-left">

                </div>
                <div className="esketch-Board-middle">
                    <div className="layout-buttons">
                        <button className="layout-button" id="save-image-button" onClick={handleSaveButton}>Save</button>
                        <button className="layout-button" id="new-image-button">New</button>
                        <button className="layout-button" id="clear-image-button" onClick={(e) => handleClearButton(e)}>Clear</button>

                    </div>
                    <div className="esketch-Board-Board">
                        <div className="esketch-Board-grid-container">
                            <div className="esketch-Board-draw" style={{gridTemplateRows:"repeat("+numRows+","+450/numRows+"px", gridTemplateColumns:"repeat("+numRows+","+450/numRows+"px"}}>
                                {grid_cells}
                            </div>
                        </div>
                    </div>
                    <ControlBoard useEraser={useEraser} handleColorChange={handleColorChange} handlePenSizeChange={(val)=>handlePenSizeChange(val)} handleRowChange={(val) => handleRowChange(val)}/>
                </div>
                <div className="esketch-Board-right">

                </div>
            </div>
            <div className="esketch-section-bottom">
                <SavedBoard boards={allBoards}/>
            </div>
            <div className="bottomSpace"></div>
        </div>
        
    )
}
export default Board;