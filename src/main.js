// class list {
//     constructor() {
//         this.data = []
//     }

//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     }
// }

// class TodoList extends list {
//     constructor() {
//         super()

//         this.usuario = 'fledson'
//     }

//     mostraUsuario() {
//         console.log(this.usuario)
//     }
// }


// const minhaLista = new TodoList()

// document.getElementById('addTodo').onclick = () => {
//     minhaLista.add('Novo')
//     minhaLista.mostraUsuario()
// }

// =======================CLASSE STATIC============================================
// Classe statica não exerga toda a classe, esse metodo só pega o retorno
// class matematica {
//     static soma(a, b) {
//         return a + b
//     }
// }

// console.log(matematica.soma(3, 5))

// =======================OPERAÇÃO COM VETORES============================================
// const arr = [1, 3, 4, 5, 8, 9]

// //MAP percorre o vetor e faz a ação programada. o "item" passado é o vetor
// //O segundo parametro é o index que é a posicão. (opcional)
// const newArr = arr.map((item, index) => {
//     return item + index
// })

// console.log(newArr)

// //Retornar 1 numero do array
// const sum = arr.reduce((total, next) => {
//     return total + next
// })

// console.log(sum);

// //Filtrar informações no array
// // arrow fuction mais reduzida, com um parametro (sem parenteses)
// // arrow fuction mais reduzida, com o retorno depois da arrow
// const filter = arr.filter(item => item % 2 === 0)

// console.log(filter)

// // Localizar item dentro do array
// const find = arr.find((item) => {
//     return item === 4
// })

// console.log(find);

// // ARROW FUNCTION COM OBJETO
// const teste = () => ({ nome: 'Fledson' })

// console.log(teste())

// =======================DESESTRUTURAÇÃO============================================

// const usuario = {
//     nome: 'Fledson',
//     idade: 23,
//     endereco: {
//         casa: '3',
//         cidade: 'são luis',
//         uf: 'ma'
//     },
// }

// const { nome, idade, endereco: { cidade } } = usuario
// console.log(nome, idade, cidade)

// //desestruturação dentro da função
// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }

// mostraNome(usuario)

// =======================OPERADORES REST / SPREAD ============================================
// REST serve para pegar o resto das propriedades
// Rest com objetos
// const usuario = {
//     nome: 'Fledson',
//     idade: 24,
//     curso: 'Ciencia da Computação'
// }

// const { nome, ...resto } = usuario
// console.log(nome);
// console.log(resto);

// // Rest com array
// var numeros = [1, 2, 5, 8, 9]
// const [a, b, ...c] = numeros
// console.log(a);
// console.log(b);
// console.log(c);

// // Rest com functions
// function somaa(a, b, ...params) {
//     return params
// }

// console.log(soma(1, 34, 2, 5))

// SPREAD repassa o valor para outra estrutura

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const arr3 = [...arr1, ...arr2]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

////usando o  Spread para reaproveitar uma informação para outro usuario
// const usuario = {
//     nome: "fledson",
//     idade: 24,
//     empresa: 'manna'
// }

// const usuario2 = {...usuario, nome: 'Zeref' }

// console.log(usuario);
// console.log(usuario2);

// ======================= TEMPLATE LITERALS ============================================
// const nome = 'Fledson'
// const idade = 24

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); //concatenação
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`); //template literals

// ======================= Object Short Syntax ============================================
// const nome = 'Fledson'
// const idade = 24

// const usuario = {
//     nome,
//     idade,
//     empresa: 'Manná Commerce'
// }

// console.log(usuario)
// importando um default e um export normal
// import soma, { sub } from './funcoes'
// import soma from './soma'
// importando tudo
// import * as funcoes from '../funcoes'
// console.log(funcoes.soma(2, 4))
// console.log(funcoes.sub(2, 1));
// console.log(funcoes)

// ===================== Async / Await =============================
// Criação de uma promisse
// const minhaPromisse = () => new Promise((resolve, reject) => {
//         setTimeout(() => { resolve('OK') }, 2000);
//     })
//     // // Chamada a promisse - o then tem informações positivas do retorno
//     // // O catch traz informações dos erros
//     // minhaPromisse().then(response => {
//     //     console.log(response)
//     // }).catch(err => {
//     //     console.log(err)
//     // })

// //Função normal ()
// async function executaPromise() {
//     //Só se usua await dentro de uma função assincrona (async)
//     // Com o await a proxima linha so executa depois que a primeira executar
//     console.log(await minhaPromisse())
//     console.log(await minhaPromisse())
//     console.log(await minhaPromisse())

//     // console.log(response)
// }

// //Com Arrow Function
// const executaPromisee = async() => {
//     console.log(await minhaPromisse())
//     console.log(await minhaPromisse())
//     console.log(await minhaPromisse())

// }

// executaPromisee()

// ===================== USANDO AXIOS ===========================
// import axios from 'axios'

// class api {
//     static async getUserInfo(username) {
//         // Try catch para tratar os erros
//         try {
//             // consumindo a api com axios
//             const response = await axios.get(`https://api.github.com/users/${username}`)
//             console.log(response)
//         } catch (error) {
//             console.error('Usuario não encontrado ' + error)
//         }


//     }
// }

// api.getUserInfo('fledsson')
// api.getUserInfo('fledson')


// importando aquivos do exercicio para executarem no babel
// import './exercicios/modulo2/modulo2Desafio'
// import './exercicios/modulo3/modulo3Desafios'