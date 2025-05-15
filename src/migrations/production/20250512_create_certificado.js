// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    CREATE TABLE IF NOT EXISTS certificado (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      titulo VARCHAR(80) NOT NULL,
      imagem BYTEA NOT NULL,
      id_trilha INTEGER REFERENCES trilha(id)
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "certificado" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();