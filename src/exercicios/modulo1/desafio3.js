console.log('INICIO DO EXERCICIO 3')

console.log('==== 3.1 ====')
const arr = [1, 2, 3, 4, 5];
const novo = arr.map(item => item + 10);
console.log(novo)


console.log('==== 3.2 ====')
const usuario = { nome: 'Diego', idade: 23 }

const mostraIdade = (usuario) => usuario.idade
console.log(mostraIdade(usuario))

console.log('==== 3.3 ====')
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))


console.log('==== 3.3 ====')
const promise = () => new Promise((resolve, reject) => resolve())
console.log(promise)