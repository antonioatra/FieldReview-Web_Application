const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS modulo (
      id SERIAL PRIMARY KEY,
      id_trilha VARCHAR(100),
      titulo TEXT,
      conteudo TEXT,
      esta_completo BOOLEAN,
      ordem INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (id_trilha) REFERENCES trilha(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabela "Modulo" criada com sucesso.');
  } catch (err) {
    console.error('Erro ao criar tabela Modulo:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();