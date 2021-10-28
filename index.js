const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao.js')
const Tabelas = require('./infraestrutura/tabelas.js')

conexao.connect()
conexao.query('SELECT NOW()', (erro, res) => {

    if (erro) {
        console.log(erro)
    } else {

        console.log('conectado ao Postgresql com sucesso')

        Tabelas.init(conexao)


        //conexao.end()
    
        const app = customExpress()
    
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))


    }
    
})



