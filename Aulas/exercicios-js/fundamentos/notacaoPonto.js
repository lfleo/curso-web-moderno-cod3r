console.log(Math.ceil(6.1)) // Opera um arredondamento

const obj1 = {}
obj1.nome = 'Bola' // Cria dinamicamente um atributo dentro de um objeto
// obj1['nome'] = 'Bola2' // Outro tipo de anotaçao. (mais flexibilidade) nao aconcelhado
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()