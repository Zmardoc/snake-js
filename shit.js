var shit = [];
var shitEaten;

function eatShit() {
	
	playCrunch()//music
	shitEaten++;
	snakeSize++;
	
	let x = shit['x'];
	let y = shit['y'];
	addSnakePart(x, y);//snake
		
	if(shitEaten % 10 == 0){
		addSpeed();	//timer
	}
	drawCEZBonus(); //bonus
	drawShit();
	if(snakeSize == MESSAGE.length)	{
		pause(); //game
	}
	refreshHud(); //index
}

function drawShit() {
	
	let coordinates = getRandomCoordinates(); //utils
	shit = {"x": coordinates.x, "y": coordinates.y};
	$("#shit").css({left: shit.x * BIT_X, top: shit.y * BIT_Y});
	$("#shit").text(MESSAGE[snake.length]);
}

function resetShit() {
	
	shit = [];
	shitEaten = SHIT_EATEN;
	drawShit();
}