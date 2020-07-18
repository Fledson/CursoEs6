//======================= EXERCICIO 1 ==============================
const delay = () => new Promise(resolver => setTimeout(resolver, 1000))

const umPorSengundo = async() => {
    try {
        delay(console.log('1s'))
        delay(console.log('2s'))
        delay(console.log('3s'))
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}



//======================= EXERCICIO 2 ==============================
import axios from 'axios'

const getUserFromGithub = async(user) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}`)
        console.log(await res.data)
    } catch (reject) {
        await console.log(`Usuario ${user} não encontrado ${reject}`)
    }
}


//======================= EXERCICIO 3 ==============================
class Github {
    static async getrepositories(rep) {
        try {
            const res = await axios.get(`https://api.github.com/repos/${rep}`)
            await console.log(res.data)
        } catch (reject) {
            await console.log(`Repositorio ${rep} não existe`)
        }
    }
}
setTimeout(() => {
    Github.getrepositories('Fledson/-Ecoleta')
        // Github.getrepositories('Fledson/-teste')
}, 4000);


//======================= EXERCICIO 4 ==============================
const buscarUsuario = async usuario => {
    try {
        const res = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(await res.data)
    } catch (err) {
        console.log(await res.data)
    }
}

function exibir() {
    umPorSengundo()
    getUserFromGithub('Fledson')
    buscarUsuario('Fledson')
}

exibir()