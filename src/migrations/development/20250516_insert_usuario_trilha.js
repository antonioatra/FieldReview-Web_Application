const pool = require('../../config/database');

module.exports = async (usuarios, trilhas) => {
  const usuarioMap = usuarios.reduce((map, usuario) => {
    map[usuario.nome] = usuario.id;
    return map;
  }, {});
  const trilhaMap = trilhas.reduce((map, trilha) => {
    map[trilha.titulo] = trilha.id;
    return map;
  }, {});

  const query = `
    INSERT INTO usuario_trilha (id_usuario, id_trilha, status, prazo)
    VALUES
      ($1, $2, 'Em andamento', '2025-12-31')
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [usuarioMap['Ana'], trilhaMap['Trilha 1']]);
    console.log('Dados fictícios inseridos na tabela "usuario_trilha":', result.rows);
  } catch (err) {
    console.error('Erro ao inserir dados em "usuario_trilha":', err.message);
    throw err;
  }
};
