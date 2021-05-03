var gameRunning = false;
var lost = false;

function setLost(isLost){
	
	lost = isLost;
	if(lost) {		
		$("#lost").show();
	}
	else {		
		$("#lost").hide();
	}	
}

function startNewLife(){
	
	pause();
	resetKeyStack(); //keys	
	resetBonus(); //bonus
	redrawSnake(); //snake	
	refreshHud(); //index	
}

function runNextStepGame(){	
	
	if(gameRunning){
		addManday(); //index
		moveSnake(); //snake		
		collisionLogic(); //collision
		refreshHud(); //index
	}
}

function startStopGame(){
	
	if(gameRunning){
		pause();
	}
	else{
		continueGame();
	}
}

function pause(){
	
	$(".wholePage").show();
	gameRunning = false;
	$(".hud").addClass("blur");
	$("img").addClass("blur");
	$(".snakePart").addClass("blur");
	$(".shit").addClass("blur");
	$(".bonus").addClass("blur");
	lowerVolume(); //music	
}

function continueGame(){
	
	$(".wholePage").hide();
	$(".hud").removeClass("blur");
	$("img").removeClass("blur");
	$(".snakePart").removeClass("blur");
	$(".shit").removeClass("blur");
	$(".bonus").removeClass("blur");
	gameRunning = true;
	resetVolume(); //music	
	play(); //music
}

function resetGame(){	
	
	setLost(false);		
	resetMusic(); //music
	resetWall(); //wall
	resetBonus(); //bonus
	resetSnake(); //snake
	resetShit(); //shit
	resetKeyStack(); //keys	
	resetTimer(); //timer
	pause();
	resetHud(); //index
}	