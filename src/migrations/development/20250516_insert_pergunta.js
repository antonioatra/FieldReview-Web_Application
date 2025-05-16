const pool = require('../../config/database');

module.exports = async (modulos) => {
  const moduloMap = modulos.reduce((map, modulo) => {
    map[modulo.titulo] = modulo.id;
    return map;
  }, {});

  const query = `
    INSERT INTO pergunta (id_modulo, enunciado, pontos)
    VALUES
      ($1, 'Pergunta 1', 20)
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [moduloMap['Módulo 1 - Trilha 1']]);
    console.log('Dados fictícios inseridos na tabela "pergunta":', result.rows);
    return result.rows;
  } catch (err) {
    console.error('Erro ao inserir dados em "pergunta":', err.message);
    throw err;
  }
};
