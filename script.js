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



let gridItemsSize = (containerDivSize  - (16 * 4)) / 16   ; 
console.log(containerDivSize);
console.log(gridItemsSize);

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.style.width = gridItemsSize +"px";
    gridDiv.style.height = gridItemsSize + "px";
    containerDiv.appendChild(gridDiv);
}