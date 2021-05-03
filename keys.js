var directionStack = []; //FIFO
var keyStack = [];

$(window).keyup(function(event){
	
	if(event.keyCode == 32) { //space
		resetSpeedUp();
	}
});
$(window).keydown(function(event){
	switch(event.keyCode){
		
		case Directions.Up:
		case Directions.Down:
		case Directions.Left:
		case Directions.Right:
			addToStackDirection(event.keyCode);
			break;
		case 13: //enter
			//resumeContext()
			startStopGame();
			if(lost){ //game
				resetGame(); //game
			}			
			break;
		case 32: //space
			speedUp();	//timer				
			break;
		case 77: //m
			muteUnmuteMusic(); //music			
			break;
		case 78: //n
			playNext(); //music
			break;
		case 82: //r
			resetGame(); //game
			break;
		case 107: //+
			addSpeed(); //timer
			break;
		default: break;
	}
	reloadKeyStack();
	//console.log(event.keyCode);
});

function getCurrentDirection(){
	return directionStack[0];
}

function addToStackDirection(direction){
	
	let li = directionStack.length;
	if(li > 0 && Math.abs(direction - directionStack[li - 1]) != 2 && direction != directionStack[li - 1]) { //37x39, 38x40
		directionStack.push(direction);
		//nedavat vic jak 2  do fronty
		if(li > 2){
			directionStack.shift();
		}		
	}
}

function reloadKeyStack() {
	
	keyStack = [];
	for(i = 0; i < directionStack.length; i++){
		switch(directionStack[i]){
			case Directions.Up: 
				keyStack.push('&#8593;');
			break;
			case Directions.Down: 
				keyStack.push('&#8595;');	
			break;
			case Directions.Left: 
				keyStack.push('&#8592;');
			break;
			case Directions.Right: 
				keyStack.push('&#8594;');
			break;
		}
	}
}

function getNextDirectionThenRemove(){
	
	let snakeDirection = directionStack[0];
	
	if(directionStack.length > 1){		
		directionStack.shift();
		reloadKeyStack();
	}
	return snakeDirection;
}

function resetKeyStack() {
	
	directionStack = START_KEY_STACK.slice();
	reloadKeyStack();
}