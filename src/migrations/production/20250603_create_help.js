const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS help (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        conteudo TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "help" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
    throw err;
  }
};
