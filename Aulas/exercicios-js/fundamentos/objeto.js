const prod1 = {} // Um par de chaves {} representa um objeto
prod1.nome = 'Celular Ultra Mega' // atribuindo nome
prod1.preco = 4998.90 // atribuindo valor
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
 
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90 }' // Isso seria um JSON

console.log(prod2)

/*
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}  
exemplo com conjuntos de chaves e valores um dentro do outro
*/