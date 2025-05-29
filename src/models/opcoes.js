const pool = require("../config/database");

module.exports ={
    async create(data) {
        const query = "INSERT INTO opcoes (texto, eh_correta) VALUES($1, $2)";
        const values = [data.texto, data.eh_correta];

        return pool.query(query, values);
    },

    async findById(id) {
        const query = "SELECT * FROM opcoes WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },

    async delete(id) {
        const query = "DELETE FROM opcoes WHERE id = $1";
        const values = [id];

        return pool.query(query, values);
    },

    async update(id) {
        const query = "UPDATE opcoes SET texto = $1, eh_correta = $2";
        const values = [data.text, data.isCorrect];

        return pool.query(query, values);
    }
 };