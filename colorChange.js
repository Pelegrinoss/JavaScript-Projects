const v2 = document.querySelector('#v2');
v2.onclick = () => alert('You Clicked Me!');

function scream(){
    console.log('ahhh!');
}

v2.onmouseenter = scream;
// mdn event reference
const v3 = document.querySelector('#v3');
v3.addEventListener('click', () => {
    alert("You clicked me!");
})


const button = document.querySelector('#btn');
const h1 = document.querySelector('#h1');

button.addEventListener('click', function () {
    const newColor = mRC();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const mRC = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
    button.style.backgroundColor = mRC();
    button.style.color = mRC();
    })
}