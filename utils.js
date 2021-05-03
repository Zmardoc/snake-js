function getRandomCoordinates(){
	
	x = Math.floor((Math.random() * panelSizeX) - 1);
	y = Math.floor((Math.random() * panelSizeY) - 1);

	if(x <= 0){
		x = 1;
	}
	if(y <= 0){
		y = 1;
	}
	if(x >= panelSizeX){
		x = panelSizeX - 1;
	}
	if(y >= panelSizeY){
		y = panelSizeY - 1;
	}
	return {x : x, y: y};
}