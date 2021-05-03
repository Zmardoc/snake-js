var bonus = null;

function eatBonus(){
	removeSpeed(parseInt($("#bonus").text()));
	resetBonus();
}

function drawCEZBonus(){
	if(gameSpeed > 6 && bonus == null){		
		let chance = Math.random();
		let coordinates = getRandomCoordinates();
		
		if(chance > 0.93 && chance <= 0.97){
			//-1		
			bonus = {"x": coordinates.x, "y": coordinates.y, "diff": -1}				
			$("#panel").append("<div class='bonus' id='bonus'>1</div>");
			$("#bonus").css({left: bonus.x * BIT_X, top: bonus.y * BIT_Y});
		}
		else if(chance > 0.97){
			//-2
			bonus = {"x": coordinates.x, "y": coordinates.y, "diff": -2}		
			$("#panel").append("<div class='bonus' id='bonus'>2</div>");
			$("#bonus").css({left: bonus.x * BIT_X, top: bonus.y * BIT_Y});
		}		
	}
}

function resetBonus(){	
	bonus = null;
	$("#bonus").remove();
}