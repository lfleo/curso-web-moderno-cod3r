let contador = 1 // contador - variável que vai controlar o laço
while(contador <= 10) { // expressão - dizer se vai continuar ou não
    console.log(`contador = ${contador}`)
    contador++ // incremento
}

for(let i = 1; i <= 10; i++) { // contator, expressão e incremento
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // array
for(let i = 0; i < notas.length; i++) { // contator, expressão e incremento (length seria o tamanho do array)
    console.log(`nota = ${notas[i]}`)
}