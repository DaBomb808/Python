var Uscore= 0;

var highscore= 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "your score: " + Uscore;
	
	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};






//Code for starting a server
//Navigate to your file

//then add the following command

//python -m SimpleHTTPServer 8000