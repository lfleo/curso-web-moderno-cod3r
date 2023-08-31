function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // min = 50, max = 40
console.log(rand([992])) // assumindo min como 992
console.log(rand([, 10])) // assumindo min como zero
console.log(rand([])) // zero a 1000
// console.log(rand( )) -- resulta um erro