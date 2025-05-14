// migrations/migrate.js
const pool = require('../../config/database');

async function migrate() {
  const query = `
    INSERT INTO certificado(titulo, imagem, id_trilha)
    VALUES 
        ('titulo certificado 1', bytea('src/assets/teste.png'), );
  `;

  try {
    await pool.query(query);
    console.log('Informações na tabela "certificado" inserida com sucesso.');
  } catch (err) {
    console.error('Erro ao inserir na tabela:', err.message);
  } finally {
    pool.end();
  }
}

migrate();