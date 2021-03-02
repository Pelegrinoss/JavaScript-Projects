let maximum = parseInt(prompt("Enter the maximum guess number! (q to quit)"));
while(!maximum){
    maximum = parseInt(promt("Enter a valid maximum guess number! (q to quit)"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess! (q to quit)"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess: (q to quit)")
    } else{
        guess = prompt("Too low! Enter a new guess: (q to quit)")
    }
}
if(guess === 'q'){
    alert("OK, you quit!")
} else {
alert(`Congrats! It took you ${attempts} times.`);
}