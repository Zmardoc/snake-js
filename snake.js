var snake = [];
var snakeSize;

function createSnake(){

	let startingX = Math.floor(panelSizeX / 2);
	let startingY = Math.floor(panelSizeY / 2) + 13;
	for(i = 0; i < snakeSize; i++){
		addSnakePart(startingX, (startingY + i));
	}
	drawSnake();
}

function addSnakePart(x, y) {	

	snake.push({"x": x, "y": y});
	let index = snake.length - 1;	
	
	let letter = '';
	if(MESSAGE.length >= snake.length){		
		letter = MESSAGE[index];
	}
	$("#panel").append("<div id='snake" + index + "' class='snakePart'><span>" + letter + "</span></div>");
}

function addTextDirection(index){
	
	let classToAdd = "";
	$("#snake" + index+ " span").removeClass();	
	classToAdd = getSnakePartDirection(index);	
	$("#snake" + index + " span").addClass(classToAdd);
}

function getSnakeBlock(index){
	if(index >= 0 && index < snake.length){
		let x = snake[index]['x'];
		let y = snake[index]['y'];		
		return {'x': x, 'y': y};
	}
	return null;
}

function getSnakePartDirection(index){
	
	let xDif, yDif;
	let currentBlock = getSnakeBlock(index);
	let previousBlock = getSnakeBlock(index - 1);
	let nextBlock = getSnakeBlock(index + 1);	
	let isHead = previousBlock == null;
	let isTail = nextBlock == null;
	let dir = "";	
	
	if(!isHead && !isTail){ //prostredek tela		
		xDif = previousBlock['x'] - nextBlock['x'];
		yDif = previousBlock['y'] - nextBlock['y'];
	}
	else if(isHead){//hlava		
		xDif = currentBlock['x'] - nextBlock['x'];
		yDif = currentBlock['y'] - nextBlock['y'];
	}
	else {
		xDif = previousBlock['x'] - currentBlock['x'];
		yDif = previousBlock['y'] - currentBlock['y'];
	}
	
	if(xDif < 0){
		dir = "top";
	}
	else if(xDif > 0){
		dir = "bottom";
	}	
	if(yDif < 0){
		dir += "right";
	}
	else if(yDif > 0){
		dir += "left";
	}
	return dir;
}

function getNextHeadPosition(){
	
	let x = snake[0]['x'];
	let y = snake[0]['y'];
	let snakeDirection = getNextDirectionThenRemove(); //keys
	
	switch(snakeDirection){
		case Directions.Up: y--; break;
		case Directions.Down: y++; break;
		case Directions.Left: x--; break;
		case Directions.Right: x++;	break;
	}
	return {"x": x, "y": y};	
}

function repositionSnake(position){
	
	snake.unshift(position);
	snake.splice(-1,1);
	drawSnake();	
}

function moveSnake(){

	let nextHeadPosition = getNextHeadPosition();
	
	if(shit['x'] == snake[0]['x'] && shit['y'] == snake[0]['y']){
		eatShit();
	}
	if(bonus && bonus['x'] == snake[0]['x'] && bonus['y'] == snake[0]['y']){
		eatBonus();
	}
	repositionSnake(nextHeadPosition);	
}

function drawSnake() {
	
	for(i = 0; i < snake.length; i++){
		let currentBlock = getSnakeBlock(i);
		$("#snake" + i).css({'left': currentBlock['x'] * BIT_X, 'top': currentBlock['y'] * BIT_Y});	
		addTextDirection(i);		
	}
}

function redrawSnake(){
	
	$(".snakePart").remove();
	snake = [];
	createSnake();
}

function resetSnake(){
	
	snakeSize = SNAKE_SIZE;
	$(".snakePart").remove();	
	snake = [];
	createSnake();
}