const valores = [7.7, 8.9, 6.3, 9.2] // Array com 4 índices começando a partir do zero
console.log(valores[0], valores[3])
console.log(valores[4]) // Não gera erro

valores[4] = 10
console.log(valores)
console.log(valores.length) // Saber quantos elementos tem no Array

valores.push({id: 3}, false, null, 'teste') // Mistura de valores no Array (não é uma boa prática)
console.log(valores)

console.log(valores.pop()) // tira o último valor do Array
delete valores[0] // deleta o ídince desejado
console.log(valores)

console.log(typeof valores) // Array é do tipo object