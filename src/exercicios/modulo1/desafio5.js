console.log('INICIO DO EXERCICIO 5')

console.log('==== 5.1 ====')

const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr
console.log(`Esse é o valor do array: ${arr}`)
console.log(`Esse é o valor em x: ${x}`)
console.log(`Esse é o valor em x: ${y}`)

function soma(...params) {
    return params.reduce((total, proximo) => total + proximo)
}

console.log(soma(1, 3, 1, 15, 6, 8, 9, 7))



console.log('==== 5.2 ====')

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Fledson' }
const usuario3 = {...usuario, endereco: { cidade: 'Lontras' } }

console.log(usuario)
console.log(usuario2)
console.log(usuario3)