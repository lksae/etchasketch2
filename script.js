const containerDiv = document.querySelector(".container");

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let containerDivSize = 10;

if(windowHeight > windowWidth) {
    containerDivSize = windowWidth-40;
} else {
    containerDivSize = windowHeight-40;
}

containerDiv.style.width = containerDivSize + "px";
containerDiv.style.height = containerDivSize + "px";

const gridNumbers = 16;


let gridItemsSize = (containerDivSize  - (gridNumbers * 4)) / gridNumbers   ; 
console.log(containerDivSize);
console.log(gridItemsSize);


function createGrid(grids) {
    for (let i = 1; i <= grids*grids; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid");
        gridDiv.style.width = gridItemsSize +"px";
        gridDiv.style.height = gridItemsSize + "px";
        containerDiv.appendChild(gridDiv);
        gridDiv.addEventListener("mouseover", event => {
            gridDiv.style.backgroundColor = "black";
        })
    }
}

// get input number for squares
const inputField = document.querySelector(".input");

// restart sketch pad
const restartButton = document.querySelector(".restartButton")
restartButton.addEventListener("click", event => {
    inputField = document.querySelector(".input");
    // delete old grid and create new one
})

createGrid(gridNumbers)
