const pool = require('../../config/database');

async function migrate () {
  const query = `
    INSERT INTO Usuario_certificado (id_usuario, id_certificado)
    SELECT u.id, c.id
    FROM Usuario u
    JOIN Certificado c ON c.titulo = 'HTML Básico'
    WHERE u.nome = 'Ana';
  `;

  try {
    await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "Usuario_certificado".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();
// module.exports = async function () {
