const pool = require("../config/database");

module.exports = {

async create(data) {
    const query = "INSERT INTO usuarios(nome, email, senha, cargo) VALUES($1,$2,$3,$4)";
    const values = [data.nome, data.email, data.senha, data.cargo];

    return pool.query(query, values);
},

async findAll() {
    const result = await pool.query('SELECT * FROM usuarios');

    return result.rows;
},

async findById(id) {
    const query = "SELECT * FROM usuarios WHERE id = $1";
    const result = await pool.query(query, [id]);

    return result.rows[0];
},

async update(data) {
    const query = "UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4";
    const values = [data.nome, data.email, data.senha, data.id]

    return pool.query(query, values);
},

async delete(id) {
    const query = "DELETE FROM usuarios WHERE id = $1";

    return pool.query(query, [id]);
},

};