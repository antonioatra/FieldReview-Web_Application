const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO Trilha (titulo, created_at, updated_at)
    VALUES
      ('Trilha de HTML', NOW(), NOW()),
      ('Trilha de CSS', NOW(), NOW()),
      ('Trilha de JavaScript', NOW(), NOW());
  `;

  try {
    await pool.query(query);
    console.log('Dados fictícios inseridos na tabela "Trilha".');
  } catch (err) {
    console.error('Erro ao inserir dados fictícios:', err.message);
  } finally {
    pool.end();
    console.log('Conexão com o banco encerrada.');
  }
}

migrate();
