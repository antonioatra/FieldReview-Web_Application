const pool = require("../config/database");

module.exports = {
    async findAll() {
        const result = await pool.query("SELECT  * FROM trilha");
        return result.rows;
    },

    async update(id, data) {
        const query = "UPDATE trilha SET titulo = $1, updated_at = $2 WHERE id = $3";
        const values = [data.titulo, new Date(), id];
        return pool.query(query, values);
    },

    async delete(id) {
        const query = "DELETE FROM trilha WHERE id = $1";
        return pool.query(query, [id]);
    },

    async create(data) {
        const query = "INSERT INTO trilha (titulo, created_at) VALUES ($1, $2)";
        const values = [data.titulo, data.created_at || null];
        return pool.query(query, values);
    },

    async findById(id) {
        const query = "SELECT * FROM trilha WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },







}
