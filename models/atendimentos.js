const conexao = require('../infraestrutura/conexao.js')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO atendimentos (cliente, pet, servico, status, observacoes) VALUES($1, $2, $3, $4, $5)'
           
        
        atendimento = Object.values(atendimento)
        

        
        conexao.query(sql, atendimento, (erro, resultados) => {
            
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })

    }
}

module.exports = new Atendimento