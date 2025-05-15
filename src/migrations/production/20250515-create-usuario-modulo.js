const pool = require('../../config/database');

async function migrate () {
  const query = `
    CREATE TABLE IF NOT EXISTS usuario_modulo (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      id_usuario VARCHAR(100) REFERENCES usuario(id),
      id_modulo VARCHAR(100) REFERENCES modulo(id),
      esta_completo BOOLEAN
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