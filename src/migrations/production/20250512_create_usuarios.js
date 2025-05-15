// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email TEXT NOT NULL,
        senha VARCHAR(255) NOT NULL,
        cargo VARCHAR(100) NOT NULL,
        pontuacao INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "usuarios" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();
