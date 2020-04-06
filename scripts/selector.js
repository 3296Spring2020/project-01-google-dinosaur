
var playerNum = localStorage["playerNum"];
if(playerNum=="1"){
	
	console.log(1);
	var script = document.createElement("script");
	script.language = "javascript";
	script.src = "scripts/runner.js";
	document.getElementsByTagName("head")[0].appendChild(script);
	
}else if(playerNum=="2"){
	console.log(2);
	var script = document.createElement("script");
	script.language = "javascript";
	script.src = "scripts/twoRunner.js";
	document.getElementsByTagName("head")[0].appendChild(script);
	
	
}






