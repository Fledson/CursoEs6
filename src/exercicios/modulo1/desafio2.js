console.log('INICIO DO EXERCICIO 2')

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Listar todas as idades
console.log('==== 2.1 ====')
const allIdades = usuarios.map(allIdades => allIdades.idade)
console.log(allIdades)

//Listar trabalhadores da rocketseat com mais de 18 anos
console.log('==== 2.2 ====')
const trabalhadores = usuarios.filter(trabalhador => trabalhador.empresa === 'Rocketseat' && trabalhador.idade > 18)
console.log(trabalhadores)

//Buscar Trabalhadores do google
console.log('==== 2.3 ====')
const googleOp = usuarios.find(trabalhadorGoogle => trabalhadorGoogle.empresa === 'Google')
console.log(googleOp)

//Multiplicar idade de todos por 2 e depois trazer os que tem idade até 50
console.log('==== 2.4 ====')
const jovensTrabalhadores = usuarios.map(trab => ({...trab, idade: trab.idade * 2 }))
    .filter(trab => trab.idade <= 50)

console.log(jovensTrabalhadores)