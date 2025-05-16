const path = require('path');
const pool = require('../../config/database');

const migrations = [
  './20250512_create_trilha.js', // Tabela pai
  './20250512_create_usuarios.js', // Tabela pai
  './20250512_create_notificacao.js', // Tabela pai
  './20250512_create_certificado.js', // Depende de trilha
  './20250512_create_modulo.js', // Depende de trilha
  './20250512_create_pergunta.js', // Depende de modulo
  './20250512_create_opcoes.js', // Depende de pergunta
  './20250512_create_usuario_certficado.js', // Depende de usuarios, certificado
  './20250512_create_usuario_notificacao.js', // Depende de usuarios, notificacao
  './20250512_create_usuario_trilha.js', // Depende de usuarios, trilha
  './20250512_create_usuario_modulo.js', // Depende de usuarios, modulo
];

async function runMigrations() {
  for (const file of migrations) {
    console.log(`Running: ${file}`);
    try {
      const migration = require(path.join(__dirname, file));
      await migration();
    } catch (error) {
      console.error(`Error in migration ${file}:`, error.message);
      throw error; // Para a execução se houver erro
    }
  }

  console.log('All production migrations completed.');
}

runMigrations()
  .catch((error) => {
    console.error('Migration error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
    console.log('Database connection closed.');
  });
