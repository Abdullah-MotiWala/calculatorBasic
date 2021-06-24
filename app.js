var ourScreen = document.getElementById("screen")
function digitsForCalc(digit) {
    ourScreen.appendChild(document.createTextNode(digit));
}
function calculation() {
    var forCalculationValues = eval(ourScreen.innerText);
    ourScreen.innerText = forCalculationValues;
}
function empty() {
    ourScreen.innerText = " ";
}
function backSpace() {
    var screen = ourScreen.innerText;
    var outPut = screen.slice(0, ourScreen.innerText.length - 1)
    ourScreen.innerText = outPut;
}
