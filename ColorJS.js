var squares = document.querySelectorAll(".square");
var numberSquares = 6;
var buttons = document.querySelectorAll(".btns");


function SetButtons(){
	for (var i =0 ; i < buttons.length; i++){
		buttons[i].addEventListener("click", function (evt) {
			buttons[0].classList.remove("selected");
			buttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
			reset();
		})
	}
}

function reset() {
	
}



function generateRandomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + " , " + g + "," + b + ")";
}


function pushColorsInArray(num){
	var array[];
	for (var i=0; i<num;i++){
		array.push(generateRandomColor());
	}

	return array;
}

function assignColorsToSquares(){
	for (var i = 0; i<squares; i++){

	}
}