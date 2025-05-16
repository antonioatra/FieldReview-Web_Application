const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS pergunta (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        id_modulo UUID,
        enunciado TEXT NOT NULL,
        pontos INTEGER NOT NULL, 
        FOREIGN KEY (id_modulo) REFERENCES modulo(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "pergunta" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
    throw err;
  }
};
