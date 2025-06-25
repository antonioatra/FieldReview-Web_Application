const pool = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO usuarios(nome, email, senha, cargo) VALUES($1,$2,$3,$4) RETURNING *';
    const values = [data.name, data.email, data.password, data.role];

    const result = await pool.query(query, values);
    return result;
  },

  async findAll() {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  },

  async findById(id) {
    const query = 'SELECT * FROM usuarios WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  async update(id, data) {
    let query = `
      UPDATE usuarios 
      SET nome = $1, email = $2, cargo = $3, update_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *`;
    let values = [data.name, data.email, data.role, id];

    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      query = `
        UPDATE usuarios 
        SET nome = $1, email = $2, senha = $3, cargo = $4, update_at = CURRENT_TIMESTAMP
        WHERE id = $5
        RETURNING *`;
      values = [data.name, data.email, hashedPassword, data.role, id];
    }

    const result = await pool.query(query, values);
    return result;
  },

  async delete(id) {
    const query = 'DELETE FROM usuarios WHERE id = $1';
    return pool.query(query, [id]);
  },

  // New method for user stats
  async getUserStats() {
    try {
      // Total users
      const totalUsersResult = await pool.query('SELECT COUNT(*) FROM usuarios');
      const totalUsers = parseInt(totalUsersResult.rows[0].count);

      // Total completed trails across all users
      const completedTrailsQuery = `
        SELECT COUNT(DISTINCT ut.id_trilha) as completed_trails
        FROM usuario_trilha ut
        JOIN trilha t ON ut.id_trilha = t.id
        JOIN modulo m ON t.id = m.id_trilha
        LEFT JOIN usuario_modulo um ON m.id = um.id_modulo AND um.id_usuario = ut.id_usuario
        GROUP BY ut.id_trilha, ut.id_usuario
        HAVING COUNT(m.id) = COUNT(CASE WHEN um.esta_completo = true THEN 1 END) AND COUNT(m.id) > 0
      `;
      const completedTrailsResult = await pool.query(completedTrailsQuery);
      const totalCompletedTrails = completedTrailsResult.rows.reduce(
        (sum, row) => sum + parseInt(row.completed_trails),
        0,
      );

      // Average progress across all users and their assigned trails
      const progressQuery = `
        SELECT ut.id_usuario, ut.id_trilha,
               COUNT(m.id)::integer as total_modules,
               COUNT(CASE WHEN um.esta_completo = true THEN 1 END)::integer as completed_modules
        FROM usuario_trilha ut
        JOIN modulo m ON ut.id_trilha = m.id_trilha
        LEFT JOIN usuario_modulo um ON m.id = um.id_modulo AND um.id_usuario = ut.id_usuario
        GROUP BY ut.id_usuario, ut.id_trilha
      `;
      const progressResult = await pool.query(progressQuery);
      const progressData = progressResult.rows;
      const totalProgress = progressData.reduce((sum, row) => {
        const progress =
          row.total_modules === 0 ? 0 : (row.completed_modules / row.total_modules) * 100;
        return sum + progress;
      }, 0);
      const averageProgress =
        progressData.length > 0 ? Math.round(totalProgress / progressData.length) : 0;

      // Total points (assuming 1 point per completed module)
      const pointsQuery = `
        SELECT COUNT(*) as total_completed_modules
        FROM usuario_modulo
        WHERE esta_completo = true
      `;
      const pointsResult = await pool.query(pointsQuery);
      const totalPoints = parseInt(pointsResult.rows[0].total_completed_modules);

      return {
        totalUsers,
        totalCompletedTrails,
        averageProgress,
        totalPoints,
      };
    } catch (error) {
      console.error('Error fetching user stats:', error);
      throw new Error('Database error while fetching user stats');
    }
  },

  // Add pool to be used in authController
  pool,
};
