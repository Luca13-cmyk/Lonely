(function(){

	function init(){

		/* 

			**************** VARIABLES GLOBALS  **************

		*/
			var body = document.getElementById('body');

		/* 

			**************** VARIABLES GLOBALS JQUERY **************

		*/

			var $body = $("body");


		/*  

			**************** LOCAL STORAGE **************

		*/

			// localStorage.theme
			// localStorage.checkhd2


		/*

			**************** EVENTS HEADER **************

		*/



			var $header2 = $(".header2");
	    	var $md_backdrop = $("md-backdrop");
	    	
	    	$(".fa-align-right").on("click", function(e){
	    		e.preventDefault();
	    		e.stopPropagation();
	    		$header2.addClass("open-bar-per");
	    		$md_backdrop.show();

	    	}); // Hamburger event

	    	$md_backdrop.on("click", function(e){
	    		e.preventDefault();
	    		e.stopPropagation();
	    		$header2.removeClass("open-bar-per");
	    		$md_backdrop.hide();
	    	}); // md event


	    	/* 

			**************** EVENT LOAD **************



			*/

			$(window).on("load", function(){

				if (localStorage.theme) {
					$body.addClass(localStorage.theme);
					
				}
				if (localStorage.checkhd2){
					$("#toggleTheme-hd2").click();
					$("#toggleTheme-hd1").click();
				}
				

			}); // event load


	    	/* 

			**************** EVENTS TOGGLE THEME **************

			*/
			


			var toggleTheme_hd2 = document.getElementById("toggleTheme-hd2");

			function toggle_theme(){
				if (toggleTheme_hd2.checked){
					$body.addClass("dark-per-theme");
					localStorage.theme = 'dark-per-theme';
					localStorage.checkhd2 = "checked";
				} else {
					$body.removeClass("dark-per-theme");
					localStorage.removeItem("theme", "dark-per-theme");
					localStorage.removeItem("checkhd2", "checked");
				}
			}

			toggleTheme_hd2.addEventListener("input", toggle_theme, false);
		 

		// hd1



		

			var toggleTheme_hd1 = document.getElementById("toggleTheme-hd1");

			function toggle_themehd1(){
				if (toggleTheme_hd1.checked){
					$body.addClass("dark-per-theme");
					localStorage.theme = 'dark-per-theme';
					localStorage.checkhd2 = "checked";
				} else {
					$body.removeClass("dark-per-theme");
					localStorage.removeItem("theme", "dark-per-theme");
					localStorage.removeItem("checkhd2", "checked");
				}
			}

			toggleTheme_hd1.addEventListener("input", toggle_themehd1, false);

		
			/* 

			**************** EVENTS SCROLLSPY **************

			*/

var alturas = {};
$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top; // ex: alturas['section_2'] = 600
}); // each section

// 

$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop()  >= alturas[seccao] - 400) {
      $('.links-hd-1, .link-respo').removeClass('active-per'); // removemos a classe ative
      $('.link-respo[data-section="' +seccao+ '"]').addClass('active-per'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
      $('.links-hd-1[data-section="' +seccao+ '"]').addClass('active-per'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
    }
  }
}); // event scroll

			

	} // init

	$(init)

}()); // function