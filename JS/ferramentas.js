/* 


Ferramentas para funções com objetivos fundamentais de forma otimizada.
Formas parecidas com o Python

l_. Luca Negrette ._l

* = Somente com números

*/

	function sum(array){ 
		soma = 0;
		for (var i = 0; i < array.length; i++) { // * Soma dos números de um array
			soma += array[i]
		}
		return soma
	} // Sum
	function max(array){
		let valores = array.sort(function(a,b){ // * Maior número de um array
			return a - b;
		});
		return valores[valores.length - 1]
	} // Max
	function min(array){
		let valores = array.sort(function(a,b){ // * Menor número de um array
			return a - b;
		});
		return valores[0]
	} // Min
	function ran(array){
		let valores = array.sort(function(){ // * Retornar o array especificado com uma ordem aleatória
			return 0.5 - Math.random();
		});
		return valores
	} // Ran -> random
	function range(min, max, meth=1){
		// Ex: var numeros =  range(5, 20, -5); * Retornar uma sequência de números especificados com o argumento
	cache = [];
	if (meth === 1) {
		for (i = min; i < max; i++){
			cache.push(i)
		}
	} else if (meth === -1){
		for (i = max; i > min; i-- ){
			cache.push(i)
		}
	} else if (meth > 1){
		for (i = min; i < max; i += meth){
			cache.push(i)
		}
	} else if (meth < -1){
		for (i = max; i > min; i += meth){
			cache.push(i)
		}
	}
	return cache
	} // Range
