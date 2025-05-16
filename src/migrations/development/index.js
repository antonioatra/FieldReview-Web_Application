const path = require('path');
const { Pool } = require('pg');
const pool = require('../../config/database');

const migrations = [
  {
    file: './20250516_insert_trilha.js',
    dependencies: [],
  },
  {
    file: './20250516_insert_usuarios.js',
    dependencies: [],
  },
  {
    file: './20250516_insert_notificacao.js',
    dependencies: [],
  },
  {
    file: './20250516_insert_modulo.js',
    dependencies: ['trilha'],
  },
  {
    file: './20250516_insert_certificado.js',
    dependencies: ['trilha'],
  },
  {
    file: './20250516_insert_pergunta.js',
    dependencies: ['modulo'],
  },
  {
    file: './20250516_insert_opcoes.js',
    dependencies: ['pergunta'],
  },
  {
    file: './20250516_insert_usuario_certificado.js',
    dependencies: ['usuarios', 'certificado'],
  },
  {
    file: './20250516_insert_usuario_notificacao.js',
    dependencies: ['usuarios', 'notificacao'],
  },
  {
    file: './20250516_insert_usuario_trilha.js',
    dependencies: ['usuarios', 'trilha'],
  },
  {
    file: './20250516_insert_usuario_modulo.js',
    dependencies: ['usuarios', 'modulo'],
  },
];

async function runMigrations() {
  const results = {}; // Armazenar resultados das migrações

  for (const migration of migrations) {
    console.log(`Running migration: ${migration.file}`);
    try {
      const migrationFn = require(path.join(__dirname, migration.file));

      // Passa os resultados das migrações anteriores como argumentos
      const args = migration.dependencies.map((dep) => results[dep]);
      const result = await migrationFn(...args);

      // Armazena o resultado com o nome da tabela (derivado do nome do arquivo)
      const tableName = migration.file.match(/insert_(\w+)/)[1];
      results[tableName] = result;
      console.log(`Migration ${migration.file} completed successfully.`);
    } catch (error) {
      console.error(`Error in migration ${migration.file}:`, error.message);
      throw error;
    }
  }

  console.log('All development migrations completed.');
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
