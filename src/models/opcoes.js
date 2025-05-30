const pool = require("../config/database");

module.exports ={ // Cria as funções do model
    async create(data) { // Função que cria a opção
        const query = "INSERT INTO opcoes (texto, eh_correta) VALUES($1, $2)";
        const values = [data.text, data.isCorrect];

        return pool.query(query, values);
    },

    async findById(id) { // Função que pega opção por id
        const query = "SELECT * FROM opcoes WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },

    async delete(id) { // Função que deleta opção 
        const query = "DELETE FROM opcoes WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },

    async update(id) { // Função que atualiza opção
        const query = "UPDATE opcoes SET texto = $1, eh_correta = $2";
        const values = [data.text, data.isCorrect];

        return pool.query(query, values);
    }
 };