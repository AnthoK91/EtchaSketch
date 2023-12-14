//Select the container
const container = document.querySelector('#container')


//set Div colour

  


//Create the divs and assign the css
function createDiv() {
const div = document.createElement('div');
div.classList.add('miniBox')
div.textContent = 'Hello World 2'
container.appendChild(div);

}

//for loop creating 16 Divs
for (let i = 1; i < 17; i++) {
    createDiv();
    console.log('16 times' + i);
}



// the JavaScript file
const divColour = document.querySelectorAll('.miniBox');
divColour.forEach((divBox) => {
    divBox.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divBox.style.backgroundColor = "#" + randomColor;
    })})