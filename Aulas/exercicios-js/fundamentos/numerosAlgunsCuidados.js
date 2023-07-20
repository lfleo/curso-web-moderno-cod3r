console.log(7 / 0) // Infinito. Alguns programas pode dá problemas.
console.log("10" / 2)
/* 
 * String + Number? Em algumas linguagens isso não será 
 * aceito e por isso o Javascript é considerado uma linguagem 
 * de tipagem fraca.
*/

console.log("10,2" / 2) // Tomar cuidado pois caso não seja um número não retornará nada NaN.
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // Imprecissão
/*
 * O resultado será 0.79999999999
 * pois o Javascript não é preciso
 * se assim o fosse geraria uma
 * lentidão.
 * 
 * Essa é uma especificação do ECMA.
 * Outras linguagens também adere esse
 * mesmo conceito.
*/

// console.log(10.toString()) Não consegue chamar o literal para função
console.log((10.345).toFixed(2)) // Mas consegue chamar a função dentro de parênteses.