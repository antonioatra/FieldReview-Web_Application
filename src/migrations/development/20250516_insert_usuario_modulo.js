const pool = require('../../config/database');

module.exports = async (usuarios, modulos) => {
  const usuarioMap = usuarios.reduce((map, usuario) => {
    map[usuario.nome] = usuario.id;
    return map;
  }, {});
  const moduloMap = modulos.reduce((map, modulo) => {
    map[modulo.titulo] = modulo.id;
    return map;
  }, {});

  const query = `
    INSERT INTO usuario_modulo (id_usuario, id_modulo, esta_completo)
    VALUES
      ($1, $2, false)
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [usuarioMap['Ana'], moduloMap['Módulo 1 - Trilha 1']]);
    console.log('Dados fictícios inseridos na tabela "usuario_modulo":', result.rows);
  } catch (err) {
    console.error('Erro ao inserir dados em "usuario_modulo":', err.message);
    throw err;
  }
};
