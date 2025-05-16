const pool = require('../../config/database');

module.exports = async (usuarios, certificados) => {
  const usuarioMap = usuarios.reduce((map, usuario) => {
    map[usuario.nome] = usuario.id;
    return map;
  }, {});
  const certificadoMap = certificados.reduce((map, cert) => {
    map[cert.titulo] = cert.id;
    return map;
  }, {});

  const query = `
    INSERT INTO usuario_certificado (id_usuario, id_certificado)
    VALUES
      ($1, $2)
    RETURNING id;
  `;

  try {
    const result = await pool.query(query, [usuarioMap['Ana'], certificadoMap['Certificado 1']]);
    console.log('Dados fictícios inseridos na tabela "usuario_certificado":', result.rows);
  } catch (err) {
    console.error('Erro ao inserir dados em "usuario_certificado":', err.message);
    throw err;
  }
};
