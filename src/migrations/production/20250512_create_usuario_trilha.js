const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_trilha (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario UUID,
      id_trilha UUID,
      status VARCHAR(50),
      prazo DATE,
      FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE,
      FOREIGN KEY (id_trilha) REFERENCES trilha(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_trilha" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_trilha:', err.message);
    throw err;
  }
};
