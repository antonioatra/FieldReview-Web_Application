const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS opcoes (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        id_pergunta UUID,
        texto TEXT NOT NULL,
        eh_correta BOOLEAN, 
        FOREIGN KEY (id_pergunta) REFERENCES pergunta(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "opcoes" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err.message);
    throw err;
  }
};
