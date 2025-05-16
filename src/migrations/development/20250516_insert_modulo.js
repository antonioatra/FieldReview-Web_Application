const pool = require('../../config/database');

module.exports = async (trilhas) => {
  const trilhaMap = trilhas.reduce((map, trilha) => {
    map[trilha.titulo] = trilha.id;
    return map;
  }, {});

  const query = `
    INSERT INTO modulo (id_trilha, titulo, conteudo, ordem, created_at, updated_at)
    VALUES
      ($1, 'Módulo 1 - Trilha 1', 'Conteúdo do Módulo 1 - Trilha 1', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ($1, 'Módulo 2 - Trilha 1', 'Conteúdo do Módulo 2 - Trilha 1', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      ($2, 'Módulo 1 - Trilha 2', 'Conteúdo do Módulo 1 - Trilha 2', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING id, titulo;
  `;

  try {
    const result = await pool.query(query, [trilhaMap['Trilha 1'], trilhaMap['Trilha 2']]);
    console.log('Dados fictícios inseridos na tabela "modulo":', result.rows);
    return result.rows; // Retorna os IDs dos módulos inseridos
  } catch (err) {
    console.error('Erro ao inserir dados em "modulo":', err.message);
    throw err;
  }
};
