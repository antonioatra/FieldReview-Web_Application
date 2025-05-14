// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    CREATE TABLE IF NOT EXISTS pergunta (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        id_modulo INTEGER REFERENCES modulo(id),
        enunciado TEXT NOT NULL,
        pontos INTEGER NOT NULL
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "pergunta" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();