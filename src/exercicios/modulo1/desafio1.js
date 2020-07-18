console.log('INICIO DO EXERCICIO 1')
class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        return this.admin === true
    }
}

class Admin extends Usuario {
    constructor() {
        super()
        this.admin = true
    }
}

const user1 = new Usuario('email@teste.com', 'senha123')
const adm = new Admin('email@teste.com', 'senha123')

console.log(user1.isAdmin())
console.log(adm.isAdmin())