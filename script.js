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






function createGrid(grids) {
    let gridItemsSize = (containerDivSize  - (grids * 4)) / grids;
    let mode = document.querySelector(".optionSet").value;
    for (let i = 1; i <= grids*grids; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid");
        gridDiv.style.width = gridItemsSize +"px";
        gridDiv.style.height = gridItemsSize + "px";
        containerDiv.appendChild(gridDiv);
        gridDiv.addEventListener("mouseover", event => {
            if(mode == "standard") {
                gridDiv.style.backgroundColor = "black";
            } else if (mode == "random") {
                let randomColor1 = getRandomInt(255)+1;
                let randomColor2 = getRandomInt(255)+1;
                let randomColor3 = getRandomInt(255)+1;
                
                gridDiv.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
            }
            
        })
    }
    
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// get input number for squares
//let inputField = document.querySelector(".input");

// restart sketch pad
const restartButton = document.querySelector(".restartButton")
restartButton.addEventListener("click", event => {
    let inputField = document.querySelector(".input").value ;

    if (inputField > 100 || inputField < 2) {
        alert("Please use a number between 2 and 101. Otherwise you will get an ugly grid.")
    } else {
        // delete old grid and create new one
        gridDivArray = document.querySelectorAll(".grid");
        gridDivArray.forEach(element => {
            element.remove();
        });
        createGrid(Number(inputField));
        //console.log(inputField);
    }
})

createGrid(gridNumbers);
