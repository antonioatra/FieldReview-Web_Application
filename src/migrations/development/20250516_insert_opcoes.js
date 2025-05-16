const pool = require('../../config/database');

module.exports = async (perguntas) => {
  const query = `
    INSERT INTO opcoes (id_pergunta, texto, eh_correta)
    VALUES
      ($1, 'Opcao 1', true),
      ($1, 'Opcao 2', false)
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [perguntas[0].id, perguntas[1].id]);
    console.log('Dados fictícios inseridos na tabela "opcoes":', result.rows);
  } catch (err) {
    console.error('Erro ao inserir dados em "opcoes":', err.message);
    throw err;
  }
};
