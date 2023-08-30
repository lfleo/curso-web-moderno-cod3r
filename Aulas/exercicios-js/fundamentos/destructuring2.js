/*
 * no caso do objeto usa-se {}
 * em array usa-se []
 * analisar o local onde o [] é usado
 */

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/*
 * cuidado no momento de definir o array
 * e onde será o destructuring
 */