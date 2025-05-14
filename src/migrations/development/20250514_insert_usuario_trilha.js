const pool = require('../../config/database');

async function migrate () {
  const query = `
    INSERT INTO Usuario_trilha (id_usuario, id_trilha, status, prazo)
    SELECT u.id, t.id, 'Em andamento', '2025-12-31'
    FROM Usuario u
    JOIN Trilha t ON t.titulo = 'Trilha de Desenvolvimento'  -- Ajuste o título da trilha conforme necessário
    WHERE u.nome = 'Ana';  -- Ajuste o nome do usuário conforme necessário
  `;

  try {
    await pool.query(query);  // Executa a query de inserção
    console.log('Dados fictícios inseridos na tabela "Usuario_trilha".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios:', err.message);  // Tratamento de erro
  } finally {
    pool.end();  // Fecha a conexão com o banco
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();
