function collisionLogic(){
	
	if(checkColision()){
		pauseInterval(); //timer
		playTuba(); //music
		livesTotal--;
		addMonth(); //index
		
		window.setTimeout(function(){
                 // do whatever you want to do 
			if(livesTotal == 0){
				setLost(true); //game
				pause();
			}
			else{
				startNewLife(); //game
			}				 
        }, 2000);
	}	
}

function checkColision(){
	
	let x = snake[0]['x'];
	let y = snake[0]['y'];
	
	//selfCollision
	for(i = 1; i < snake.length; i++){
		if(snake[i]['x'] == x && snake[i]['y'] == y){
			return true;
		}
	}
	
	for(i = 0; i < walls.length; i++){
		if(walls[i]['x'] == x && walls[i]['y'] == y){
			return true;
		}
	}
	return false;
}