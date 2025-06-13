const pool = require("../config/database");

module.exports = {
    async create(data){
        const query = "INSERT INTO help(titulo, conteudo, created_at) VALUES($1, $2, CURRENT_TIMESTAMP) RETURNING *";
        const values = [data.title || data.titulo, data.content || data.conteudo];

        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async select(){
        const query = "SELECT * FROM help ORDER BY created_at DESC";
        
        const result = await pool.query(query);
        return result.rows;
    },

    async selectById(id){
        const query = "SELECT * FROM help WHERE id = $1";
        const values = [id];
        
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async update(data, id){
        const query = "UPDATE help SET titulo = $1, conteudo = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *";
        const values = [data.titulo || data.title, data.conteudo || data.content, id];

        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async delete(id) {
        const query = "DELETE FROM help WHERE id = $1 RETURNING *";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows[0];
    },
};
