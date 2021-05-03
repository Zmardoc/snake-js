var realGameSpeed;
var gameSpeed;
var interval;

var speedUpIsSet = false;
var lastRealSpeed;

function changeInterval(){
	clearInterval(interval);
	interval = setInterval(runNextStepGame, realGameSpeed);// game
}

function speedUp(){
	if(gameSpeed < 10){
		if(!speedUpIsSet){
			speedUpIsSet = true;
			lastRealSpeed = realGameSpeed;
			realGameSpeed = 26;	
			setPlaySpeed(2); //music
			changeInterval();//this			
		}		
	}
}
function resetSpeedUp(){
	if(speedUpIsSet){
		speedUpIsSet = false;
		realGameSpeed = lastRealSpeed;
		setPlaySpeed(1 + (gameSpeed - 1)* 0.11); //music
		changeInterval();//this		
	}		
}


function addSpeed(){
	if(gameSpeed < 10){
		realGameSpeed = realGameSpeed - 20 + gameSpeed;		
		gameSpeed++;
		changeInterval();//this
		setPlaySpeed(1 + (gameSpeed - 1) * 0.11);//music
		refreshHud();// index
	}
}

function removeSpeed(speedDiff){
	if(gameSpeed > speedDiff){
		gameSpeed -= speedDiff;			
		realGameSpeed = realGameSpeed + 20 - gameSpeed;				
		changeInterval(); //this
		setPlaySpeed(1 + (gameSpeed - 1) * 0.11); //music
		refreshHud(); //index
	}
}
function pauseInterval(){
	clearInterval(interval);
}
function resumeInterval(){
	interval = setInterval(runNextStepGame, realGameSpeed);// game
}

function resetTimer(){
	
	realGameSpeed = SPEED_START;
	gameSpeed = GAME_SPEED;
	changeInterval();// this
}