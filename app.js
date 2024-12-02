var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");


// innerHTML
var count = 1;


function textShow() {
    var characterO = "O";
    var characterX = "X";

    if (count % 2 === 0) {
        return characterO;
    } else {
        return characterX;
    }
}

function game(number) {
    var text = textShow();

    if (number === 1) {
        box1.innerHTML = text;
    } else if (number === 2) {
        box2.innerHTML = text;
    } else if (number === 3) {
        box3.innerHTML = text;
    } else if (number === 4) {
        box4.innerHTML = text;
    } else if (number === 5) {
        box5.innerHTML = text;
    } else if (number === 6) {
        box6.innerHTML = text;
    } else if (number === 7) {
        box7.innerHTML = text;
    } else if (number === 8) {
        box8.innerHTML = text;
    } else if (number === 9) {
        box9.innerHTML = text;
    }
    count++;
}