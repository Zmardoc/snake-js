var walls = [];
var panelSizeX;
var panelSizeY;

function createWalls(){

	for(i = 0; i < panelSizeX; i++){		
		for(j = 0; j < panelSizeY; j++){
			if(i == 0 || i == panelSizeX - 1){
				walls.push({"x": i , "y": j });
				$("#panel").append("<div class='wall' style='top: " + j * BIT_Y +"px; left: " + i * BIT_X + "px'></div>");
			}
			else if(j == 0 || j == panelSizeY - 1){
				walls.push({"x": i , "y": j });
				$("#panel").append("<div class='wall' style='top: " + j * BIT_Y +"px; left: " + i * BIT_X + "px'></div>");
			}
		}
	}
}

function resetWall(){
	$(".wall").remove();
	walls = [];
	panelSizeX = Math.floor($("#panel").width() / BIT_X);
	panelSizeY = Math.floor($("#panel").height() / BIT_Y);
	createWalls();
}