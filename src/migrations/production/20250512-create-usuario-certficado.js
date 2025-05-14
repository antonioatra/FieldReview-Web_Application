const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS Usuario_certificado (
      id SERIAL PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES Usuario(id),
      id_certificado VARCHAR(100) REFERENCES Certificado(id),
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Usuario_certificado" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Usuario_certificado:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();