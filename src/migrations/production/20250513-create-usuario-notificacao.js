const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS Usuario_notificacao (
      id SERIAL PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES Usuario(id),
      id_notificacao VARCHAR(100) REFERENCES Notificacao(id),
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