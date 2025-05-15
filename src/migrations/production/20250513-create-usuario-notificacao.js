const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_notificacao (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES usuario(id),
      id_notificacao VARCHAR(100) REFERENCES notificacao(id),
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_notificacao" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_notificacao:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();