const pool = require('../config/database');

module.exports = { // Cria as funções do model
    async create(data) { // Função que cria a opção
        const query = "INSERT INTO opcoes (id_pergunta, texto, eh_correta) VALUES($1, $2, $3) RETURNING *";
        const values = [data.idQuestion, data.text, data.isCorrect];
        console.log('Values de create do option: ',values)

    return pool.query(query, values);
  },

  async findById(id) {
    // Função que pega opção por id
    const query = 'SELECT * FROM opcoes WHERE id = $1';
    const values = [id];

    return pool.query(query, values);
  },

  async delete(id) {
    // Função que deleta opção
    const query = 'DELETE FROM opcoes WHERE id = $1';
    const values = [id];

    return pool.query(query, values);
  },

    async update(id, data) { // Função que atualiza opção
        const query = "UPDATE opcoes SET texto = $1, eh_correta = $2 WHERE id = $3";
        const values = [data.text, data.isCorrect, id];

    return pool.query(query, values);
  },

    async findByQuestionId(data) {
        const query = "SELECT * FROM opcoes WHERE id_pergunta = $1";
        const values = [data.questionId];

    const result = await pool.query(query, values);
    return result; // Retorna todas as opções associadas à pergunta
  },
};
