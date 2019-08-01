$(function () {

    function getData(){
        $.getJSON('../JSON/data.json')
                    .done(function (data) {
                        times = data
    
                        for (i = 0; i < times["LINKS_INDEX"].length; i++) {
    
                            $('a[data-link_index="' + i + '"]').attr("href", times["LINKS_INDEX"][i]);
                        }



    }).fail(function(){
        alert("err")
    });

    } // getData()


    if (localStorage.swi){

        $("#login").remove();
       getData()
} // localStorage




    var times_pass;
    var sn;
    
    $.getJSON("../JSON/data.json")
    .done(function(data){
        times_pass = data;
         sn = times_pass["PASSWORDS"][0];
	     

         function rand(val=sn) {
            return val;
        }

        var $password = $("#password");
        var $button_password = $("#button_password");
        var ps = rand();
        

        $password.on("input", function (e) {
            var times;
            val = $(this).val();
            var hash = md5(val);
            if (hash === ps) {
                getData();
                $('#aviso_switch').addClass("fnt-green")
                    .text('Destrancado');
                    localStorage.swi = 'ok';
            } else {
                $('#aviso_switch').removeClass("fnt-green")
                    .text('Trancado');
                $('a[data-link_index]').attr("href", 'INVALIDO/index.html');
                localStorage.removeItem('swi')
            }
    
        });


    }).fail(function(){
        alert("err");
    });
    


});