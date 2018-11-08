var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode button even listener
	setUpModeButtons();
	setUpSquares();
	reset();
}

	function setUpSquares() {
		//main loop
		for(var i = 0; i < squares.length; i++) {
			//add event listeners to squares
			squares[i].addEventListener("click", function() {
				
				//grab color of clicked square 
				var clickedColor = this.style.backgroundColor;

				//compare clicked color to picked color
				if(clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
				}else {
					this.style.background = "#232323";
					messageDisplay.textContent = "Try Again";
					}
				});
	}
	}

	function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy") {
			numSquares = 3;
		}else {
			numSquares = 6;
		}
		reset();
		}); 

		}
		}

	function reset() {
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	}



resetButton.addEventListener("click", function() {
	reset();
});



//methods
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < colors.length; i++) {
		//change each color to picked color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color push into array
		arr.push(randomColor());
		
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
