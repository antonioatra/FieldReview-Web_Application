// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO opcoes(id_pergunta, texto, eh_correta)
    VALUES 
        ('4c8afa79-f48c-46fc-890b-fad52e1e169b' , 'texto da opção 1', true);
  `;

  try {
    await pool.query(query);
    console.log('Informações na tabela "opcoes" inserida com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir na tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();
