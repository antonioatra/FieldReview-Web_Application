// models/notificacao.js
const pool = require("../config/database");

module.exports = {

  async create(data) {

    const query = "INSERT INTO notificacao (titulo, descricao, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP)";
    const values=[data.titulo, data.descricao];

    return pool.query(query, values)

  },

  async addUsers(data) {
    const query = "INSERT INTO usuario_notificacao (id_usuario, id_notificacao) VALUES($1, $2)";
    const values = [data.id_usuario, data.id_notificacao];

    return pool.query(query, values);

  },

  async findAll() {
    const query = "SELECT * FROM notificacao";

    return pool.query(query, values);
  },

  async findById(id) { 
    const query = "SELECT * FROM notificacao WHERE id = $1";
    const values = [id];

    return pool.query(query, values)
  
  },

  async findUser(id_not) {
    const query = "SELECT u.* FROM usuario u JOIN usuario_notificacao un ON u.id = un.id_usuario WHERE un.id_notificacao = $1";
    const values=[id_not];

    return pool.query(query, values);
    
  },

  async update(data) {
    const query = "UPDATE notificacao SET titulo = $1, descricao = $2, update_at = CURRENT_TIMESTAMP WHERE id = $4";
    const values = [data.titulo, data.descricao, data.update_at, data.id]

    return pool.query(query, values);
    
  },

  async delete(id) {
    const query = "DELETE FROM notificacao WHERE id = $1";
    const values = [id]

    return pool.query(query, values);
  },

  async deleteUserNotificationRelationship(id_notificacao) {
    const query = "DELETE FROM usuario_notificacao WHERE id_notificacao = $1";
    const values=[id_notificacao];

    return pool.query(query, values);
  }
};
