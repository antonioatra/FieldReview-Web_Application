const pool = require("../config/database");

module.exports = {

async create(valor) {
    const query = "INSERT INTO notificacao(titulo, descricao) VALUES($1,$2)";
    const values = [valor.titulo, valor.descricao];

    return pool.query(query, values);
},

async findAll() {
    const result = await pool.query('SELECT * FROM notificacao');

    return result.rows;
},

async findById(id) {
    const query = "SELECT * FROM notificacao WHERE id = $1";
    const result = await pool.query(query, [id]);

    return result.rows[0];
},

async update(id, valor) {
    const query = "UPDATE notificacao SET titulo = $1, descricao = $2";
    const values = [valor.titulo, valor.descricao]

    return pool.query(query, values);
},

async delete(id) {
    const query = "DELETE FROM notificacao WHERE id = $1";

    return pool.query(query, [id]);
},

};