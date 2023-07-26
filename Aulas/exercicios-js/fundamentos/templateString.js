const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' // Forma simples de concatenação
const template = `
    Olá
    ${nome}!`
/* 
 * Usando Template String
 * Aqui ele considera até
 * as quebras de linhas.
*/
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`) // Dentro das crases é que irá funcionar a soma

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) // Chamando a função dentro da expresão