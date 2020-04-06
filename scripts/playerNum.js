$(function() {
	$('.1play').click(function() {
		if(!window.localStorage){
			alert("Browser  is not supported localstorage");
			return false;
		}else{
			var storage=window.localStorage;
			storage["playerNum"]=1;
			storage.a=1;
			console.log(storage["playerNum"]);
		window.location.href= "gaming.html";
		}
	});
	$('.2play').click(function() {
		if(!window.localStorage){
			alert("Browser  is not supported localstorage");
			return false;
		}else{
			
			var storage=window.localStorage;
			storage["playerNum"]=2;
			storage.a=2;
			window.location.href="gaming.html";

		}
	});
});