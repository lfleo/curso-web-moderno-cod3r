let num1 = 1
let num2 = 2

num1++ // pós fixada (acrescenta 1 unidade ao valor da variável)
console.log(num1)
--num1 // pré fixada (diminui 1 unidade ao valor da variável)
console.log(num1)

console.log(++num1 === num2--)
/*
 * Só resulta em true porque
 * o incremento é inserido
 * antes da comparação
 * e o decremento depois
 * da comparação
 * 
 * DEIXE SEU CÓDIGO O MAIS SIMPLES
 * POSSÍVEL, MAIS LEGÍVEL O POSSÍVEL
 * 
*/