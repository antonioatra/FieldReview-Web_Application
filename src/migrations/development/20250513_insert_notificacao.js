// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO notificacao(titulo, descricao)
    VALUES 
        ('titulo notificacao 1', 'descricao notificacao 1');
  `;

  try {
    await pool.query(query);
    console.log('Informações na tabela "notificacao" inserida com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir na tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();