

var loader = document.getElementById("loader_index");

function loa(){

	var body = document.getElementsByTagName("body")[0];
	
	body.removeChild(loader);


}


window.addEventListener("load", loa, false);
