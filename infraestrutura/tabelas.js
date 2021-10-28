class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()

    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id serial NOT NULL PRIMARY KEY, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text)'
            

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela atendimentos criada com sucesso.')
            }

        })
    }
}

module.exports = new Tabelas