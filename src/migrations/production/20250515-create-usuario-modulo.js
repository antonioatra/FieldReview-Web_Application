const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_modulo (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario UUID,
      id_modulo UUID,
      esta_completo BOOLEAN,
      FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE,
      FOREIGN KEY (id_modulo) REFERENCES modulo(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_modulo" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_modulo:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();