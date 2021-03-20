let mode = 6;
let colors = generateRandomColors(mode);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
    mode = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "#cb997e";
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
for (let i=0;i<squares.length; i++){
    if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
    }
    else {
        squares[i].style.display = "none";
    }
}
})

hard.addEventListener("click", function(){
    mode = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "#cb997e";
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
for (let i=0;i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
}
})
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "#cb997e";
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";

})

colorDisplay.textContent = pickedColor;

for (let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function (){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else { 
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        }
    )
}
function changeColors (color){
    for (let i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   let random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for (let i=0; i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
   // return "rgb(" + r + ", " + g + ", " + b + ")";
 }
