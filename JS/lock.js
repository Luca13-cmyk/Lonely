var body = document.getElementsByTagName("body")[0];

localStorage.swip ? console.log("permitido") :  body.innerHTML = "<b>Acesso Negado</b>";


var elDocument = document.documentElement;

elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

