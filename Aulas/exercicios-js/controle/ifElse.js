const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

/* Pode ou não haver chaves
 * já que tem apenas uma
 * sentença de código
*/

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Evitar esse tipo de problema! (string)