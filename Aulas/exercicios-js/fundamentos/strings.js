const escola = "Cod3r"

console.log(escola.charAt(4)) // pega um caractere da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Tabela Unicode
console.log(escola.indexOf('3')) // pega um caractere que faz parte da string

console.log(escola.substring(1)) // imprimi do digito a frente
console.log(escola.substring(0, 3)) // imprimi o digito limitado

console.log('Escola '.concat(escola).concat("!")) // concatena/junta os dados
console.log('Escola '+ escola + "!") // outra forma de concatenar
/* Em contexto de número o + irá somar, mas no contexto de string irá concatenar */
console.log(escola.replace(3, 'e')) // substitue

console.log('Ana,Maria,Pedro'.split(','))