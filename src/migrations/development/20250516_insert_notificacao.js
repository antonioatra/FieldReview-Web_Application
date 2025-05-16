const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    INSERT INTO notificacao (titulo, descricao, created_at, updated_at)
    VALUES
      ('Notificação 1', 'Descrição da notificação 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ('Notificação 2', 'Descrição da notificação 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING id, titulo;
  `;

  try {
    const result = await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "notificacao":', result.rows);
    return result.rows; // Retorna os IDs das notificações inseridas
  } catch (err) {
    console.error('Erro ao inserir dados em "notificacao":', err.message);
    throw err;
  }
};
