const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    INSERT INTO usuarios (nome, email, senha, cargo, pontuacao, created_at, update_at)
    VALUES
      ('Ana', 'ana@example.com', 'senha123', 'admin', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ('João', 'joao@example.com', 'senha456', 'user', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING id, nome;
  `;

  try {
    const result = await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "usuarios":', result.rows);
    return result.rows; // Return inserted user IDs
  } catch (err) {
    console.error('Erro ao inserir dados em "usuarios":', err.message);
    throw err;
  }
};
