//Select the container
const container = document.querySelector('#container')
const buttonSelect = document.querySelector('#restartButton')
const outerBox = document.querySelector('#outerBox')

createGrid(10);
gridSize(10);

//button selection
buttonSelect.addEventListener("click", () => {
    let clickEvent;
    while (true) {
        clickEvent = prompt("How many squares would you like per row? (Enter a number up to 100)");

        // Check if the input is a number and within the range
        if (!isNaN(clickEvent) && clickEvent > 0 && clickEvent <= 100) {
            break; // Break the loop if input is valid
        }
        alert("Please enter a valid number up to 100.");
    }

    //remove the mini boxes
    const miniBoxes = document.querySelectorAll('.miniBox');
    miniBoxes.forEach((miniBox) => {
    miniBox.remove();
    })
    createGrid(clickEvent);
    gridSize(clickEvent);

})

//Change the Grid Size
function gridSize(clickEvent) {
    const miniBox = document.querySelectorAll('.miniBox');
    miniBox.forEach((boxes) => {
        boxes.style.minWidth = 800 / clickEvent + 'px';
        boxes.style.maxWidth = 800 / clickEvent + 'px';
        boxes.style.minHeight = 800 / clickEvent + 'px';
        boxes.style.minHeight = 800 / clickEvent + 'px';
    })
}

//Create the divs and assign the css
function createDiv() {
const div = document.createElement('div');
div.classList.add('miniBox')
container.appendChild(div);
}

function createGrid(clickEvent) {
//for loop creating 16 Divs
for (let i = 0; i < clickEvent * clickEvent; i++) {
    createDiv();
}
    addMouseoverEffect();
}

function addMouseoverEffect() {
// mouseover effect for all divs - Query Select All > Foreach on all divs
const divColour = document.querySelectorAll('.miniBox');
divColour.forEach((divBox) => {
    divBox.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divBox.style.backgroundColor = "#" + randomColor;
    })})
}