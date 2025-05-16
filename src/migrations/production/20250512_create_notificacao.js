const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS notificacao (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        titulo VARCHAR(80) NOT NULL,
        descricao TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "notificacao" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
    throw err;
  }
};
