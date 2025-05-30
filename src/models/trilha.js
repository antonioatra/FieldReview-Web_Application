const pool = require("../config/database");

module.exports = { //Cria as funções do model
    async findAll() { // Função que pega todas as trilhas
        const result = await pool.query("SELECT  * FROM trilha"); // Seleciona todas as trilhas no banco de dados
        return result.rows; // Retorna as trilhas 
    },

    async update(id, data) { // Função que atualiza todas as trilhas
        const query = "UPDATE trilha SET titulo = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2";
        const values = [data.title, id];
        return pool.query(query, values);
    },

    async delete(id) { // Função que deleta todas as trilhas
        const query = "DELETE FROM trilha WHERE id = $1";
        return pool.query(query, [id]);
    },

    async create(data) { // Função que cria todas as trilhas
        const query = "INSERT INTO trilha (titulo, created_at) VALUES ($1, $2)";
        const values = [data.titulo, data.created_at || null];
        return pool.query(query, values);
    },

    async findById(id) { // Função que pega todas as trilhas por id
        const query = "SELECT * FROM trilha WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },







}
