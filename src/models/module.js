const pool = require('../config/database');

module.exports = {
  //Criando os módulos da entidade módulo

  async create(data) {
    //Função para criar os módulos
    const query = 'INSERT INTO modulo(id_trilha, titulo, conteudo, ordem) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [data.idTrail, data.title, data.content, data.order]; // Pega os parâmetros de criação do módulo

    return pool.query(query, values); //Retorna a criação do módulo
  },

  async findById(id) {
    //Função para encontrar módulo por id
    const query = 'SELECT * FROM modulo WHERE id = $1';
    const values = [id];

    return pool.query(query, values);
  },

  async findByTrailId(id) {
    // Função para encontrar módulo pelo id da trilha
    const query = 'SELECT * FROM modulo  WHERE id_trilha = $1';
    const values = [id];

    return pool.query(query, values);
  },

  async findByUserId(data) {
    // Função para encontrar modulo pelo id do usuário
    const query = 'SELECT * FROM usuario_modulo WHERE id_usuario = $1';
    const values = [data.id_user];

    return pool.query(query, values);
  },

  async update(id, data) {
    //Função para atualizar trilhas
    const query =
      'UPDATE modulo SET titulo = $1, conteudo = $2, ordem = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4';
    const values = [data.title, data.content, data.order, id];

    return pool.query(query, values);
  },

  async delete(id) {
    // Função para deletar trilhas
    const query = 'DELETE FROM modulo WHERE id = $1';
    const values = [id];

    return pool.query(query, values);
  },
};
