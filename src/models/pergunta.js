const pool = require("../config/database");

//Inicia a chamada dos módulos
module.exports ={
    async create(data) { // cria a função para adicionar novas perguntas
        const query = "INSERT INTO pergunta (id_modulo, enunciado, pontos) VALUES($1, $2, $3)";
        const values = [data.moduleId, data.statement, data.points];

        return pool.query(query, values); // retorna o que foi definido
    },

    async findById(id) { // cria a função para encontrar perguntas pelo id
        const query = "SELECT * FROM pergunta WHERE id = $1";
        const values =[id];

        return pool.query(query, values);
    },

    async findByModuloId (data) { // retorna perguntas de acordo com o módulo que a pergunta está contida
        const query = "SELECT * FROM pergunta  WHERE id_modulo = $1";
        const values = [data.moduleId];

        return pool.query(query, values);
    },

    async update(id, data) { // atualiza pergunta
        const query = "UPDATE pergunta SET enunciado = $1, pontos = $2 WHERE id = $3";
        const values = [data.statement, data.points, id];

        return pool.query(query, values);
    },

    async delete(id) { // deleta perguntas
        const query = "DELETE FROM pergunta WHERE id = $1";
        const values =[id];

        return pool.query(query, values);
    }
};