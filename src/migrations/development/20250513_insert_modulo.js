const pool = require('../../config/database');

async function migrate () {
  const query = `
    INSERT INTO Modulo (id_trilha, titulo, conteudo, esta_completo, ordem)
    VALUES
      ('trilha1', 'Módulo 1', 'Conteúdo do módulo 1', false, 1),
      ('trilha1', 'Módulo 2', 'Conteúdo do módulo 2', false, 2),
      ('trilha2', 'Módulo 3', 'Conteúdo do módulo 3', false, 1)
  `;

  try {
    await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "Modulo".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
};

migrate();
// module.exports = async function () {
