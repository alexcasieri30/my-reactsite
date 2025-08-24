//constants
const numPixels = 10000;
const numRows = Math.sqrt(numPixels);

class colorBoard{
    constructor(){
        //features
        this.numPixels = 100;
        this.size = 0; //0, 1, or 2
        this.eraser = false;
        this.randomColor = true;
        this.pixels = [];
        this.color = "black";
    }
    setNumPixels(num){
        this.numPixels = num;
    }
    getNumPixels(){
        return this.numPixels;
    }
    setEraser(){
        this.eraser = !this.eraser;
    }
    setRandomColor(){
        this.randomColor = !this.randomColor;
    }
    setSize(size){
        this.size = size;
    }
    getSize(){
        return this.size;
    }
}

const displayFunctions = function(){
    const saveButton = function(obj){
        let allInfo = [];
        let allboxessnapshot = document.querySelectorAll(".box");
        for (let i = 0; i < obj.getNumPixels(); i++){
            console.log("getting curr info")
            let currinfo = allboxessnapshot[i].style.backgroundColor;
            allInfo.push(currinfo);
        }
        let smallgrid = document.createElement("div");
        smallgrid.classList.add('smallgrid');
        let rowsize = Math.sqrt(obj.getNumPixels());

        smallgrid.style['grid-template-columns'] = `repeat(${rowsize}, ${100/rowsize}px)`;
        smallgrid.style['grid-template-rows'] = `repeat(${rowsize}, ${100/rowsize}px)`;
        let snapshots = document.querySelector(".allGridSnapshots");
        console.log(obj.getNumPixels());
        for (let i = 0; i < obj.getNumPixels(); i++){
            let newdiv = document.createElement("div");
            newdiv.style.backgroundColor=allInfo[i];
            smallgrid.appendChild(newdiv);
        }

        snapshots.appendChild(smallgrid);
    }
    const clearButton = function(boxes){
        console.log('clearing')
        let boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = "white";
            boxes[i].style.border = "solid 1px gray";
        }
    }
    const mouseOver = function(obj, boxes){
        let numRows = Math.sqrt(obj.getNumPixels());
        // console.log(Math.sqrt(obj.getNumPixels()));

        for (let i = 0; i < boxes.length; i++){
            boxes[i].onmouseover = function(){
                let randomr = Math.floor( Math.random() * 255);
                let randomg = Math.floor( Math.random() * 255);
                let randomb = Math.floor( Math.random() * 255);
                let randoma = Math.random();
                if (obj.getSize() >= 0){
                    boxes[i].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                }
                if (obj.getSize() >= 1){
                    boxes[i-1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i-numRows].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i-1-numRows].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                }
                if (obj.getSize() >= 2){
                    boxes[i+1].style['background-color'] = boxes[i-numRows+1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i+numRows].style['background-color'] = boxes[i-numRows+1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i-numRows+1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i-numRows-1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i+numRows+1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                    boxes[i+numRows-1].style['background-color'] = `rgba(${randomr},${randomg},${randomb}, 1`;
                }
            }
        }
    }
    const newBoard = function(obj){
        console.log("making new board")
        console.log(obj.getNumPixels());
        let midbody = document.querySelector(".mid-body");
        while (midbody.firstChild) {
            midbody.removeChild(midbody.firstChild);
        }
        midbody.style.display = "grid";
        let numRows = Math.sqrt(obj.getNumPixels())
        console.log(numRows);
        midbody.style['grid-template-columns']= `repeat(${numRows}, ${500/numRows}px)`;
        midbody.style['grid-template-rows']= `repeat(${numRows}, ${500/numRows}px)`;
        for (let i = 0; i < obj.getNumPixels(); i++){
            let newdiv = document.createElement("div");
            newdiv.classList.add("box");
            midbody.appendChild(newdiv);
        }
    }
    const setPixelSize = function(obj){
        this.newBoard(obj);
    }
    const changePenSize = function(buttons, obj){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].onclick = function(){
                let size = buttons[i].id;
                obj.setSize(size);
            }
        }
    }
    return { changePenSize, saveButton, clearButton, mouseOver, newBoard, setPixelSize }
}

//start out the game

let newgame = document.querySelector(".new")
newgame.onclick = function(){
    let board = new colorBoard();
    displayFunctions().newBoard(board);
    let sizes = document.querySelectorAll(".size-button")
    for (let i = 0; i < sizes.length; i++){
        sizes[i].onclick = function(){
            board.setNumPixels(parseInt(Math.pow(sizes[i].id, 2)));
            console.log(board.getNumPixels());
            displayFunctions().setPixelSize(board);
            let savebutton = document.querySelector(".save");
            savebutton.onclick = function(){
                displayFunctions().saveButton(board);
            }
            let clear = document.querySelector(".clear");
            clear.onclick = function(){
                displayFunctions().clearButton(boxes);
            }
            let boxes = document.querySelectorAll('.box');
            console.log(boxes);
            displayFunctions().mouseOver(board, boxes);

            let pensizes = document.querySelectorAll(".pensize-button");
            displayFunctions().changePenSize(pensizes, board);
        }
    }
}



