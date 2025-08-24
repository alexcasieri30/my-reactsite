import React, { useState } from "react";
import Select from "react-select";
import "./styles/ControlBoard.scss";


const pixelAmounts = [
    { label: "Pixels", value: 0 },
    { label: 10, value: 100 },
    { label: 50, value: 2500 },
    { label: 100, value: 10000 }
];
const penSizes = [
    { label: "Size", value: 0 },
    { label: "Small", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Large", value: 3 },
]
const colorOptions = {
    0: "red",
    1: "orange",
    2: "yellow",
    3: "green",
    4: "blue",
    5: "purple",
    6: "black",
    7: "white",
    8: "gray",
    9: "random",
}

function ControlBoard({useEraser, handleColorChange, handlePenSizeChange, handleRowChange}){
    const [pixels, setPixels] = useState(0);
    const [pensize, setPensize] = useState(0);
    const [color, setColor] = useState(0);
    

    const grid_cells = [];
    for (let i = 0; i < 10; i++){
        if (i == 9){
            grid_cells.push(<div id="random" onClick={(e) => handleColorChange(e.currentTarget.id)} style={{backgroundImage: "linear-gradient(to left, #FF0000, #FFFF00, #0000FF)"}} className="color-grid-cell"></div>)
        }else{
            grid_cells.push(<div id={colorOptions[i]} onClick={(e)=> handleColorChange(e.currentTarget.id)}style={{backgroundColor: colorOptions[i]}}className="color-grid-cell"></div>)
        }
    }

    return (
        <div className="controlBoard-main">
                <Select className="option-dropdown" options={pixelAmounts} onChange={(e) => handleRowChange(e.label)}/>
                <Select className="option-dropdown" options={penSizes} onChange={(e) => handlePenSizeChange(e.value)}/>
                <div className="colorGrid">
                    {grid_cells}
                </div>
                <div className="eraser">
                    <button id="eraser" onClick={useEraser}>Eraser</button>
                </div>
        </div>
    )
}

export default ControlBoard;