var playingIndex = 0;
var sourcesCount;
var musicPlaying;
var volume = 0.8;
var lowerVol = 0.2;
var playSpeed = 1;

function playNext() {	

	stop();
	play();
	setPlaySpeed(playSpeed);
}

function play(){
	
	if(!musicPlaying){
		musicPlaying = true;
		setRandomAudio();
		$("#theme")[0].src = $("source")[playingIndex].src;
		setPlaySpeed(playSpeed);
		$("#theme")[0].load();
		$("#theme")[0].play();		
	}
}

function setRandomAudio(){
	let newPlayingIndex;
	do{
		newPlayingIndex = Math.floor((Math.random() * sourcesCount));
	}while(newPlayingIndex == playingIndex);
	playingIndex = newPlayingIndex;
}

function setPlaySpeed(speed){
	playSpeed = speed;
	//$("#theme")[0].playbackRate = playSpeed;
}

function muteUnmuteMusic(){
	
	if(volume == 0){
		if(gameRunning){
			volume = 0.8;
		}
		else{
			volume = lowerVol;
		}		
	}
	else {
		volume = 0;
	}
	$("#theme").prop("volume", volume);	
}

function stop(){
	musicPlaying = false;
	$("#theme")[0].pause();
	$("#theme")[0].currentTime = 0;
}

function setVolume(vol) {
	$("#theme").prop("volume", vol);
}

function lowerVolume() {
	setVolume(lowerVol);	
}

function resetVolume(){	
	setVolume(0.8);
}

function playCrunch(){
	$("#crunch")[0].src = "music/crunch.wav";
	$("#crunch")[0].load();
	$("#crunch")[0].play();	
}

function playTuba(){
	stop();
	$("#crunch")[0].src = "music/tuba.mp3";
	$("#crunch")[0].load();
	$("#crunch")[0].play();	
}

function resetMusic(){
	
	stop();
	playSpeed = 1;
	sourcesCount = $("source").length;
	$("#theme")[0].addEventListener("ended", playNext);
}