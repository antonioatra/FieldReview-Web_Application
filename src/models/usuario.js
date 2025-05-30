const pool = require("../config/database");

module.exports = { // Criando as funções do model

async create(data) { // Função que cria os usuários
    const query = "INSERT INTO usuarios(nome, email, senha, cargo) VALUES($1,$2,$3,$4)"; // Cria os usuários dentro do banco de dados
    const values = [data.name, data.email, data.password, data.position]; // Parâmetros que serão adicionados a esse usuário no banco de dados 

    return pool.query(query, values); // Retorna a criação do usuário
},

async findAll() { // Função que pega todos os usuários
    const result = await pool.query('SELECT * FROM usuarios');

    return result.rows;
},

async findById(id) { // Função que pega os usuários por id 
    const query = "SELECT * FROM usuarios WHERE id = $1";
    const result = await pool.query(query, [id]);

    return result.rows[0];
},

async update(id, data) { // Função que atualiza os usuários
    const query = "UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4";
    const values = [data.name, data.email, data.password, id]

    return pool.query(query, values);
},

async delete(id) { // Função que deleta os usuários
    const query = "DELETE FROM usuarios WHERE id = $1";

    return pool.query(query, [id]);
},

};