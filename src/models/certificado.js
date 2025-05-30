const pool = require("../config/database");

module.exports = {
    async create(data) {
        const query = "INSERT INTO certificado (titulo, imagem, id_trilha) VALUES ($1, $2, $3)";
        const values = [data.title, data.image, data.trailId];

        return pool.query(query, values);
    },

    async findByUserId(data) {
        const query = "SELECT * FROM usuario_certificado WHERE id_usuario = $1";
        const values = [data.userId];

        return pool.query(query, values);
    },

    async update(data, id) {
        const query = "UPDATE certificado SET titulo = $1 WHERE id = $2";
        const values = [data.title, id];

        return pool.query(query, values);
    },
}