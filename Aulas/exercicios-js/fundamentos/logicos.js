function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operação de tipo ou
    const comprarTv50 = trabalho1 && trabalho2 // operação de tipo i
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete // negação lógica -- operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))