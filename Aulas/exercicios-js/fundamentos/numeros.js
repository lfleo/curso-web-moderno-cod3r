const peso1 = 1.0 // Se considera um valor inteiro
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // valor em bolean
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Não altera o valor da media (até porque média é uma const), mas sim aplica uma função no valor.
console.log(media.toString()) // Retorna o valor em String
console.log(media.toString(2)) // Retorna o valor em String em binário
console.log(typeof media)
console.log(typeof Number)