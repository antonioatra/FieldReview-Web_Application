// models/notificacao.js
const pool = require('../config/database');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO notificacao (titulo, descricao) VALUES ($1, $2) RETURNING *';
    const values = [data.titulo, data.descricao];

    return pool.query(query, values);
  },

  async addUsers(data) {
    const query = 'INSERT INTO usuario_notificacao (id_usuario, id_notificacao) VALUES($1, $2)';
    const values = [data.userId, data.notificationId];

    return pool.query(query, values);
  },

  async findAll() {
    const query = 'SELECT * FROM notificacao';
    const result = await pool.query(query);

    return result.rows;
  },

  async findById(id) {
    const query = 'SELECT * FROM notificacao WHERE id = $1';
    const values = [id];

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  async findByUserId(userId) {
    const query = `
      SELECT n.*, un.id_usuario
      FROM notificacao n
      JOIN usuario_notificacao un ON n.id = un.id_notificacao
      WHERE un.id_usuario = $1
    `;
    const values = [userId];

    const result = await pool.query(query, values);
    return result.rows;
  },

  async update(data) {
    const query =
      'UPDATE notificacao SET titulo = $1, descricao = $2, update_at = CURRENT_TIMESTAMP WHERE id = $3';
    const values = [data.titulo, data.descricao, data.id];

    return pool.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM notificacao WHERE id = $1';
    const values = [id];

    return pool.query(query, values);
  },

  async deleteUserNotificationRelationship(id_notificacao) {
    const query = 'DELETE FROM usuario_notificacao WHERE id_notificacao = $1';
    const values = [id_notificacao];

    return pool.query(query, values);
  },
};
