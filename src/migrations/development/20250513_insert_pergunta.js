// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO pergunta(id_modulo, enunciado, pontos)
    VALUES 
        ('4c8afa79-f48c-46fc-890b-fad52e1e169b', 'enunciado da pergunta 1', 20);
  `;

  try {
    await pool.query(query);
    console.log('Informações na tabela "pergunta" inserida com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir na tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();
