(function(){

    function init(){

        $(".btn-group button").remove();
        $(".btn-group ~ button").remove();


        l = Lonely;

        // Header
             var $header2 = $(".header2");
             var $md_backdrop = $("md-backdrop");

            $(".fa-bars").on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                $header2.addClass("open-bar-per");
                $md_backdrop.show();
                
            }); // event hamburger
            $md_backdrop.on("click", function(e){
                e.preventDefault();
                e.stopPropagation();

                $header2.removeClass("open-bar-per");
                $(this).hide();
            }); // event md-backdrop


            

            

            

            
            $("#accordion").on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                
                $("#accordion-angle").not(":animated").toggleClass("nav-doc-angle-open-per");
                $(".nav-doc-per").slideToggle("slow");
            }); // Accordion


         function loadAjaxPentest(url){
            
            $("#ajax").remove();
            $("#ajax-content").load(url + ' #ajax').hide().fadeIn("slow");

            $.ajax({
                type: "GET",
                timeout: 2000,
                dataType: "html",
    
        beforeSend: function(xhr){
            if (xhr.overrideMimeType){
                xhr.overrideMimeType("text/html; charset = UTF-8");
            }
        },
        statusCode : {
            404: function(jqXHR){ 
                alert("Resquest failed:404 " + jqXHR.statusText + " " + jqXHR.status);
            },
            500 : function(jqXHR){ 
                alert("Resquest failed:500 " + jqXHR.statusText + " " + jqXHR.status);
            }
            
        },
            error: function(){
                alert("err");
            },
                fail: function(){
                    $("#ajax-content").html("casa");
                },
                success: function(){
                    // CLIPBOARD
                    
            $(".codes-per").after('<div class="content-clipboard-per"><button type="button" id="clipboard-button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Copiar comando"><i class="fas fa-clipboard"></i></button></div>');

            $("button[data-toggle=\"tooltip\"]").each(function(){
                $(this).on("click", function(){
                    
                     var $txtShort = $(this).parent().prev().text();
                    let $txt = $txtShort.substring($txtShort.lastIndexOf("#") + 1, $txtShort.indexOf("//"));

                    var $txt2 = $(this).parent().prev();

                    var $inpu = $('<input style="position: absolute; right: -500000px" type="text">');
                    $inpu.val($txt);
                    $txt2.after($inpu);
                    $inpu.select();
                    document.execCommand("copy");
                    $inpu.remove();
                    });
                  }); // CLIPBOARD END
                } // success
            });
            

         } // loadAjax
         var times;
        
          function loadDataJsonSidebar(){
            $.getJSON('../JSON/data.json')
          .done(function(data){
            times = data
        
            for (i = 0; i < times["SIDEBAR"].length; i++){
                $('a[data-navper="' + i + '"]').attr("href", times["SIDEBAR"][i])

            }
            for (i = 0; i < times["LINKS_TOP_BAR"].length; i++){
                $('a[data-link_topbar="' + i + '"]').attr("href", times["LINKS_TOP_BAR"][i]);
            }
            for (i = 0; i < times["CARDS_LINKS"].length; i++){
                $('a[data-card_links="' + i + '"]').attr("href", times["CARDS_LINKS"][i]);
            }
            
            for (i = 0; i < times["FRONT_END_LINKS"].length; i++){
                $('a[data-front_end_links="' + i + '"]').attr("href", times["FRONT_END_LINKS"][i]);
            }

          }).fail(function(){
              alert("Ñ foi possível carregar os dados json")
          });

          } // loadDataJson
          loadDataJsonSidebar()
          
          $(".nav-item a[data-navper='9']").remove();
          
          // ******************************************

            $("#nav-bar-pentest").on("click", "a[data-ajax='toggle']", function(e){
                e.preventDefault();
                e.stopPropagation();

                
                var url = this.href;
                
                $("#nav-bar-pentest a.current").removeClass("current");
                $(this).addClass("current");
                loadAjaxPentest(url);
                
                history.pushState("", url, url);
            }); //event ajax toggle navbar pentest 

            window.onpopstate = function(){
                var path = location.pathname;
                loadAjaxPentest(path);
                let page = path.substring(location.pathname.lastIndexOf("/") + 1);
                $('#nav-bar-pentest a.current').removeClass("current");
                $('#nav-bar-pentest a[href="' + page + '"]').addClass("current");


            } // event onpopstate

             // show hide ScrollTop

    var $top = $(".content-scrollTop-per");
    $(window).on("scroll", function(h,a){
     h = 85;
      a = (($("#nav-bar-pentest").offset().top - $(window).height() + 100) - h);
      
        
    if (a <= $(this).scrollTop()){
        $top.animate({
            'bottom': "0px"
        }, 1000, "linear");
    } else {
        $top.stop(true).animate({
            'bottom': "-600px"
        }, 1000, "linear");
    }

    // end show hide ScrollTop
    
    
    
    
    }); // end animation top

       
            $("a[id=\"scrollTopLink\"]").on("click", function(e){
    
    
                $("html, body").animate({
                    
                    scrollTop: $($(this).attr("href")).offset().top
                }, 1000, "linear");
                return false
            
            }); // end scrolltop

            // load PAGE

            
            
           
            // END LOAD PAGE



            
            $(".dropdown-menu").on("click", "button[data-theme]", function(e){
                e.stopPropagation();
                e.preventDefault();

                if ($(this).attr("data-theme") === "dark"){
                    $("body").addClass("dark-per-theme");
                    localStorage.theme = "dark-per-theme";
                    $(" button.theme-current-per").removeClass("theme-current-per");
                    $(this).addClass("theme-current-per");
                }
                if ($(this).attr("data-theme") === "normal"){
                    $("body").removeClass("dark-per-theme");
                    $(" button.theme-current-per").removeClass("theme-current-per");
                    $(this).addClass("theme-current-per");
                    localStorage.removeItem("theme", "dark-per-theme");
                }

            }); // toggle theme
            var theme_hd2 = document.getElementById("toggleTheme-hd2");
            var body = document.getElementsByTagName("body")[0];
            function toggleTheme_h2(){
                if (theme_hd2.checked){
                    
                    body.classList.add("dark-per-theme");
                    localStorage.theme = "dark-per-theme";
                    localStorage.checkhd2 = "checked";

                } else {
                
                    body.classList.remove("dark-per-theme");
                    localStorage.removeItem("theme", "dark-per-theme");
                    localStorage.removeItem("checkhd2", "checked");


                }
            }
            theme_hd2.addEventListener("input", toggleTheme_h2, false);


            // toggle theme2
            // CLIPBOARD

            $(".codes-per").after('<div class="content-clipboard-per"><button type="button" id="clipboard-button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Copiar comando"><i class="fas fa-clipboard"></i></button></div>');

            $("button[data-toggle=\"tooltip\"]").each(function(){
                $(this).on("click", function(){
                    
                     var $txtShort = $(this).parent().prev().text();
                    let $txt = $txtShort.substring($txtShort.lastIndexOf("#") + 1, $txtShort.indexOf("//"));

                    var $txt2 = $(this).parent().prev();

                    var $inpu = $('<input style="position: absolute; right: -500000px" type="text">');
                    $inpu.val($txt);
                    $txt2.after($inpu);
                    $inpu.select();
                    document.execCommand("copy");
                    $inpu.remove();
                });
            }); // CLIPBOARD END


               $("#changeValue").on("input", function(e){

                var val =  $(this).val();
                $("#changeOutput").text(val + "px");
                $(".codes-per, #navbar-2").css({
                    fontSize: val + "px" 
                });

               }); // Range 
                                       

                // Tempo online
            var navbar2 = $("#navbar-2 ul.mb-2");
            var today = new Date();
            var inicio = new Date("Apr 16, 2019 15:45:55");
            var mes = today.getMonth();

            var diferrence = (today.getTime() - inicio.getTime());
            diferrence = (diferrence / 31556900000);
            var diference2 = (mes - inicio.getMonth());
            if (diferrence < 1){
                let $texto = ("<i style='margin-top:45px;margin-left:15px'>" + ["Tempo online: " + diference2 + " Meses"] + "<i>")
                navbar2.append($texto);

            } else if (diferrence === 1){

                let $texto = ("<i style='margin-top: 45px;'>" + ["Tempo online: " + Math.floor(diferrence)+ " ano" + " " +  diference2 + " Meses"] + "</i>"); 
                navbar2.append($texto);
                
            } else if (diferrence > 1) {
                let $texto = ("<i style='margin-top: 45px;'>" + ["Tempo online: " + Math.floor(diferrence)+ " anos" + " " +  diference2 + " Meses"] + "</i>"); 
               navbar2.append($texto);
            } // end Tempo online
            
            

            

    } // init


   $(init) 

}()); // JS