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
    const values = [data.titulo, id];
    return pool.query(query, values);
  },

  async delete(id) {
    // Função que deleta uma trilha
    const query = 'DELETE FROM trilha WHERE id = $1';
    return pool.query(query, [id]);
  },

  async create(data) {
    // Função que cria a trilha
    const query = 'INSERT INTO trilha (titulo) VALUES ($1) RETURNING *';
    const values = [data.titulo];
    return pool.query(query, values);
  },

  async findById(id) {
    // Função que retorna a trilha pelo id com seus módulos
    const trailQuery = 'SELECT * FROM trilha WHERE id = $1';
    const trailResult = await pool.query(trailQuery, [id]);
    
    if (trailResult.rows.length === 0) {
      return null;
    }
    
    const trail = trailResult.rows[0];
    
    // Buscar módulos da trilha
    const modulesQuery = 'SELECT * FROM modulo WHERE id_trilha = $1 ORDER BY ordem ASC';
    const modulesResult = await pool.query(modulesQuery, [id]);
    
    trail.modules = modulesResult.rows;
    
    return trail;
  },

  async assignToUser(data) {
    const query = `
          INSERT INTO usuario_trilha (id_trilha, id_usuario, prazo, status)
          VALUES ($1, $2, $3, $4) RETURNING *
        `;
    const values = [data.idTrail, data.idUser, data.deadline, data.status];
    return pool.query(query, values);
  },

  async findByUserId(userId) {
    const query = `
      SELECT ut.*, t.titulo
      FROM usuario_trilha ut
      JOIN trilha t ON ut.id_trilha = t.id
      WHERE ut.id_usuario = $1
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  },

  async getCompletedTrailsByUser(userId) {
    // Buscar trilhas onde todos os módulos foram completados
    const query = `
      SELECT DISTINCT t.id, t.titulo, t.descricao, t.imagem, 
             COUNT(m.id) as total_modules,
             COUNT(um.id) as completed_modules
      FROM trilha t
      JOIN usuario_trilha ut ON t.id = ut.id_trilha
      JOIN modulo m ON t.id = m.id_trilha
      LEFT JOIN usuario_modulo um ON m.id = um.id_modulo AND um.id_usuario = $1 AND um.esta_completo = true
      WHERE ut.id_usuario = $1
      GROUP BY t.id, t.titulo, t.descricao, t.imagem
      HAVING COUNT(m.id) = COUNT(um.id) AND COUNT(m.id) > 0
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  },

  async markModuleComplete(userId, moduleId) {
    // Marcar módulo como completo ou inserir se não existir
    const query = `
      INSERT INTO usuario_modulo (id_usuario, id_modulo, esta_completo)
      VALUES ($1, $2, true)
      ON CONFLICT (id_usuario, id_modulo) 
      DO UPDATE SET esta_completo = true, updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `;
    const result = await pool.query(query, [userId, moduleId]);
    return result.rows[0];
  },
};
