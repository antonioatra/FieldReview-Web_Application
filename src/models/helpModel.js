const pool = require("../config/database");

module.exports = {
    async create(data){
        const query = "INSERT INTO help(titulo, conteudo, created_at) VALUES($1, $2) RETURNING * ";
        const values = [data.title, data.content];

        return pool.query(query, values);
    },

    async select(data){
        const query = "SELECT * FROM help";
        
        return pool.query(query);
    },

    async update(data, id ){
        const query="UPDATE help SET titulo = $1, conteudo = $2, update_at = CURRENT_TIMESTAMP WHERE id = $3";
        const values = [data.titulo, data.conteudo, id]

        return pool.query(query, values)
    },

    async delete(id) {
        const query = "DELETE FROM help WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },
};
