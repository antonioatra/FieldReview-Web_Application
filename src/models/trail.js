const pool = require('../config/database');

module.exports = {
  //Cria as funções do model
  async findAll() {
    // Função que pega todas as trilhas
    const result = await pool.query('SELECT  * FROM trilha'); // Seleciona todas as trilhas no banco de dados
    return result.rows; // Retorna as trilhas
  },

  async update(id, data) {
    // Função que atualiza a trilha
    const query = 'UPDATE trilha SET titulo = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2';
    const values = [data.title, id];
    return pool.query(query, values);
  },

  async delete(id) {
    // Função que deleta uma trilha
    const query = 'DELETE FROM trilha WHERE id = $1';
    return pool.query(query, [id]);
  },

  async create(data) {
    // Função que cria a trilha
    const query = 'INSERT INTO trilha (titulo) VALUES ($1)';
    const values = [data.title];
    return pool.query(query, values);
  },

  async findById(id) {
    // Função que retorna a trilha pelo id
    const query = 'SELECT * FROM trilha WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  async assignToUser(data) {
    const query = `
          INSERT INTO usuario_trilha (id_trilha, id_usuario, prazo, status)
          VALUES ($1, $2, $3, $4) RETURNING *
        `;
    const values = [data.idTrail, data.idUser, data.deadline, data.status];
    return pool.query(query, values);
  },
};
