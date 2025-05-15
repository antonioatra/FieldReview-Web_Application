// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO usuarios(email, senha)
    VALUES 
        ('John Doe', 'teste123@gmail.com', 'senha123', 'admin');
  `;

  try {
    await pool.query(query);
    console.log('Informações na tabela "usuarios" inserida com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir na tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();
