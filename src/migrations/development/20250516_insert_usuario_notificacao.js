const pool = require('../../config/database');

module.exports = async (usuarios, notificacoes) => {
  const usuarioMap = usuarios.reduce((map, usuario) => {
    map[usuario.nome] = usuario.id;
    return map;
  }, {});
  const notificacaoMap = notificacoes.reduce((map, notif) => {
    map[notif.titulo] = notif.id;
    return map;
  }, {});

  const query = `
    INSERT INTO usuario_notificacao (id_usuario, id_notificacao)
    VALUES
      ($1, $2)
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [usuarioMap['Ana'], notificacaoMap['Notificação 1']]);
    console.log('Dados fictícios inseridos na tabela "usuario_notificacao":', result.rows);
  } catch (err) {
    console.error('Erro ao inserir dados em "usuario_notificacao":', err.message);
    throw err;
  }
};
