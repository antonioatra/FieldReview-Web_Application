const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS Usuario_trilha (
      id SERIAL PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES Usuario(id),
      id_trilha VARCHAR(100) REFERENCES Trilha(id),
      status VARCHAR(50),
      prazo DATE
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