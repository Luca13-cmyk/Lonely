var body = document.getElementsByTagName("body")[0];

localStorage.swi ? console.log("permitido") :  body.innerHTML = "<b>Acesso Negado</b>";

