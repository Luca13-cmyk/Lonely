


try {
	var loader = document.getElementById("loader_index");
	if (loader) {
		function loadPage(){
			var body = document.getElementsByTagName("body")[0];
			body.removeChild(loader);
		}
		window.addEventListener("load", loadPage, false);
	} else {
		throw new Error("LOADER n disponivel")
	}	
} catch (e) {
	console.log(e.name + ' ' + e.message);
	function loadPage(){
		if (localStorage.theme){
			body.classList.add(localStorage.theme);
		}
		if (localStorage.checkhd2){
            var theme_hd2 = document.getElementById("toggleTheme-hd2");
			theme_hd2.checked = true;
		}
	}
	window.addEventListener("load", loadPage, false);
}

