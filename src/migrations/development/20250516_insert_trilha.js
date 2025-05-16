const pool = require('../../config/database');

module.exports = async () => {
  const query = `
    INSERT INTO trilha (titulo, created_at, updated_at)
    VALUES
      ('Trilha 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ('Trilha 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ('Trilha 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING id, titulo;
  `;

  try {
    const result = await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "trilha":', result.rows);
    return result.rows; // Retorna os IDs das trilhas inseridas
  } catch (err) {
    console.error('Erro ao inserir dados em "trilha":', err.message);
    throw err;
  }
};
