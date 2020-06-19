var squares = document.querySelectorAll(".square");
var numberSquares = 6;
var buttons = document.querySelectorAll(".btns");
var colorsArray = [];
var resetBtn = document.querySelector("#reset");
var btnHard = document.querySelector(".selected");
var colorPicked = document.querySelector("#selectedColor");
var message = document.querySelector("#message");

init();

function init() {
    setButtons();
    assignColorsToSquares();
    assignColorPicked();
    clickEvents();
}

function setButtons() {
    resetBtn.addEventListener("click", reset);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (evt) {
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
            reset();
        })
    }
}

function clickEvents() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function (evt) {
        	var selectedColor = this.style.background;
            if (selectedColor === colorPicked) {
                message.textContent = "You won!";
                changeColor();
            } else{
            	message.textContent = "Try again loser";
            	this.style.background = "#000000";
			}
        })
    }
}

function reset() {
    assignColorsToSquares();
    assignColorPicked();
    for (var i = 0; i < squares.length; i++) {
        if (colorsArray[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colorsArray[i];
        } else {
            squares[i].style.display = "none";
        }

    }

}


function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}


function pushColorsInArray(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push(generateRandomColor());
    }

    return array;
}

function assignColorsToSquares() {
    colorsArray = pushColorsInArray(numberSquares);
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colorsArray[i];
    }
}

function assignColorPicked() {
    var color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    colorPicked.textContent = color;
}