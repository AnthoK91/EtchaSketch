const container = document.querySelector('#container')

function createDiv() {
const div = document.createElement('div');
div.classList.add('miniBox')
div.textContent = 'Hello World 2'
container.appendChild(div);
}

for (let i = 1; i < 17; i++) {
    createDiv();
    console.log('16 times' + i);
}

