import React, { useState } from "react";
import "./styles/Saved.scss";


const SavedBoard = function({boards}){
    return (
        <div className="saved-board-main">
            <div className="saved-board-grid">
            {   boards.map((board) => {
                    let n = 0;
                    let s = 0;
                    if (board.length===100){
                        n = 10;
                        s = 20;
                    }else if (board.length===2500){
                        n = 50;
                        s = 4;
                    }else if (board.length===10000){
                        n = 100;
                        s = 2;
                    }
                    return (
                        
                        <div className="saved-boards-grid-container" style={{gridTemplateRows:"repeat("+n+","+s+"px",gridTemplateColumns:"repeat("+n+","+s+"px"}}>
                        {board.map((pixel)=>{
                            if (board.length===100){
                                return (
                                    <div style={{backgroundColor:pixel,width:"20px",height:"20px"}}></div>
                                )
                            }else if (board.length===2500){
                                return (
                                    <div style={{backgroundColor:pixel,width:"4px",height:"4px"}}></div>
                                )
                            }else if (board.length===10000){
                                return(
                                    <div style={{backgroundColor:pixel,width:"2px",height:"2px"}}></div>
                                )
                            }
                            
                        })}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SavedBoard;