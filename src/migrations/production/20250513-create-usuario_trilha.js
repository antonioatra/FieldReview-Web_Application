const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_trilha (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES usuario(id),
      id_trilha VARCHAR(100) REFERENCES trilha(id),
      status VARCHAR(50),
      prazo DATE,
      FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE,
      FOREIGN KEY (id_trilha) REFERENCES trilha(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_trilha" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_trilha:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();