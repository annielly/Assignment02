/*eslint-env browser*/

var gameWelcome = alert("Welcome to the coin toss game!");
var coinFlip = Math.random();
var Choice = prompt("Choose heads or tails!");
if (Choice === "heads") {
    if (coinFlip < 0.5) {
        var result = alert("The flip was heads and you chose heads... You win!");
    } else {
        var result = alert("The flip was tails but you chose heads... You lose!");
    }
} else {
    if (coinFlip < 0.5) {
        var result = alert("The flip was heads but you chose tails... You lose!");
    } else {
        var result = alert("The flip was tails and you chose tails... You win!");
    }
}