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

  // Add pool to be used in authController
  pool,
};
