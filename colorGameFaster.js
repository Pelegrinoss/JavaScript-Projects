let numb = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let mode = document.querySelectorAll(".mode");

init();

function init(){
    for (let i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numb = 3 : numb = 6;
            /*if (this.textContent === "Easy") {
                numb = 3;
            } else {
                numb = 6;
            }
            */
            reset();
        })
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
    reset();
}

function reset() {
    colors = generateRandomColors(numb);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#cb997e";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    // return "rgb(" + r + ", " + g + ", " + b + ")";
}
