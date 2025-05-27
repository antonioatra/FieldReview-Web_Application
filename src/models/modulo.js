const pool = require("../config/database");

module.exports = {

    async create(data) {
        const query = "INSERT INTO modulo(titulo, conteudo, ordem) VALUES($1, $2, $3)";
        const values = [data.titulo, data.conteudo, data.ordem]

        return pool.query(query, values);
    },

    async findById(id) {
        const query = "SELECT * FROM modulo WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },

    async findByTrailId(data) {
        const query = "SELECT * FROM modulo  WHERE id_trilha = $1";
        const values = [data.id_trilha];

        return pool.query(query, values);
    },

    async findByUserId(data) {
        const query = "SELECT * FROM usuario_modulo WHERE id_usuario = $1";
        const values = [data.id_usuario];

        return pool.query(query, values);
    },

    async update(id, data) {
        const query = "UPDATE modulo SET titulo = $1, conteudo = $2, ordem = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4";
        const values = [data.titulo, data.conteudo, data.ordem, id];

        return pool.query(query,values);
    },

    async delete(id) {
        const query = "DELETE FROM modulo WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },
};