const pool = require('../../config/database');

async function migrate () {
  const query = `
    INSERT INTO usuario_modulo (id_usuario, id_modulo, esta_completo)
    SELECT u.id, m.id, false
    FROM usuario u
    JOIN modulo m ON m.titulo = 'Introdução ao Desenvolvimento'  -- Ajuste conforme o título real do módulo
    WHERE u.nome = 'Ana';  -- Ajuste conforme o nome real do usuário
  `;

  try {
    await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "usuario_modulo".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios em "usuario_modulo":', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();
