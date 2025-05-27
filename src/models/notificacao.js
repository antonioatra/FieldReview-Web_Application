// models/notificacao.js
const db = require("../database");

module.exports = {
  async create(data) {
    const { titulo, descricao, created_at } = data;

    const [result] = await db.query(
      "INSERT INTO notificacao (titulo, descricao, created_at) VALUES ($1, $2, created_at = CURRRENT_TIMESTAMP)",
      [titulo, descricao, created_at]
    );

    return { id: result.insertId, titulo, descricao };
  },

  async addUsuarios(notificacaoId, usuarios) {
    const values = usuarios.map((id_usuario) => [id_usuario, notificacaoId]);

    return db.query(
      "INSERT INTO usuario_notificacao (id_usuario, id_notificacao) VALUES ?",
      [values]
    );
  },

  async findAll() {
    const [rows] = await db.query("SELECT * FROM notificacao");
    return rows;
  },

  async findById(id) { 
    const [rows] = await db.query(
      "SELECT * FROM notificacao WHERE id = ?",
      [id]
    );
    return rows[0];
  },

  async findUser(id_notificacao) { //
    const [rows] = await db.query(
      `SELECT u.* 
       FROM usuario u
       JOIN usuario_notificacao un ON u.id = un.id_usuario
       WHERE un.id_notificacao = ?`,
      [id_notificacao]
    );
    return rows;
  },

  async update(data) {
    const { titulo, descricao, update_at } = data;
    return db.query(
      "UPDATE notificacao SET titulo = ?, descricao = ?, update_at = CURRENT_TIMESTAMP, WHERE id = ?",
      [titulo, descricao, update_at]
    );
  },

  async delete(id) {
    return db.query("DELETE FROM notificacao WHERE id = ?", [id]);
  },

  async deleteVinculos(id_notificacao) {
    return db.query(
      "DELETE FROM usuario_notificacao WHERE id_notificacao = ?",
      [id_notificacao]
    );
  }
};
