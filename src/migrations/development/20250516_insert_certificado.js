const pool = require('../../config/database');

module.exports = async (trilhas) => {
  const trilhaMap = trilhas.reduce((map, trilha) => {
    map[trilha.titulo] = trilha.id;
    return map;
  }, {});

  const query = `
    INSERT INTO certificado (titulo, imagem, id_trilha)
    VALUES
      ('Certificado 1', '\\x89504e470d0a1a0a'::bytea, $1),
      ('Certificado 2', '\\x89504e470d0a1a0a'::bytea, $2)
    RETURNING id, titulo;
  `;

  try {
    const result = await pool.query(query, [trilhaMap['Trilha 1'], trilhaMap['Trilha 2']]);
    console.log('Dados fictícios inseridos na tabela "certificado":', result.rows);
    return result.rows;
  } catch (err) {
    console.error('Erro ao inserir dados em "certificado":', err.message);
    throw err;
  }
};
