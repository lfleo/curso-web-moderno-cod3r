// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2 ,3), soma1(0, 0, 0)) // no último não irá somar pois reconhece com false.

// estratagia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Se a for diferente de undefined assume o valor 1
    b = 1 in arguments ? b : 1 // Dentro de arguments existe indice 1, se não pegue o valor de b ou padrão 1
    c = isNaN(c) ? 1 : c // Caso c não for número retorne NaN, caso sim valor padrão (mais segura)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))