const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_notificacao (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario UUID,
      id_notificacao UUID,
      FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE,
      FOREIGN KEY (id_notificacao) REFERENCES notificacao(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_notificacao" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_notificacao:', err.message);
    throw err;
  }
};
