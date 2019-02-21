/*eslint-env browser*/

var coinFlip;
for (var i = 0; i < 10; i++) {
    coinFLip = Math.round(Math.random());
    if (coinFLip == 0) {
        console.log("Heads");
    } else if (coinFlip == 1) {
        console.log("Tails");
    }
}