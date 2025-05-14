const pool = require('../../config/database');

async function migrate () {
  const query = `
    INSERT INTO Usuario_notificacao (id_usuario, id_notificacao)
    SELECT u.id, c.id
    FROM Usuario u
    JOIN Notificacao c ON c.titulo = 'HTML Básico'
    WHERE u.nome = 'Ana';
  `;

  try {
    await pool.query(query);  // Executa a query de inserção
    console.log('Dados fictícios inseridos na tabela "Usuario_notificacao".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios:', err.message);  // Trata possíveis erros
  } finally {
    pool.end();  // Fecha a conexão com o banco
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();
