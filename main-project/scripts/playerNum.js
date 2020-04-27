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
	
	$("#option11").click(function(){
		
		if(!window.localStorage){
			alert("Browser  is not supported localstorage");
			return false;
		}else{
			var storage=window.localStorage;
			storage["difficulty"]="easy";
			$("#option11").parent().attr('class','btn bg-olive active');
			$("#option12").parent().attr('class','btn bg-olive ');
			$("#option13").parent().attr('class','btn bg-olive ')
		}

			 
	});
	$("#option12").click(function(){

		if(!window.localStorage){
			alert("Browser  is not supported localstorage");
			return false;
		}else{
			var storage=window.localStorage;
			storage["difficulty"]="medium";
			$("#option11").parent().attr('class','btn bg-olive ');
			$("#option12").parent().attr('class','btn bg-olive active');
			$("#option13").parent().attr('class','btn bg-olive ')
		}

			 
	});
	$("#option13").click(function(){
		if(!window.localStorage){
			alert("Browser  is not supported localstorage");
			return false;
		}else{
			var storage=window.localStorage;
			storage["difficulty"]="carzy";
			$("#option11").parent().attr('class','btn bg-olive ');
			$("#option12").parent().attr('class','btn bg-olive ');
			$("#option13").parent().attr('class','btn bg-olive active')
		}

	});
});