const pool = require('../config/database');

module.exports = {
  async helpTextualSearch(searchTerm) {
    const query = `
        SELECT * FROM help
        WHERE to_tsvector('portuguese', titulo || ' ' || conteudo) @@ plainto_tsquery('portuguese', $1)
    `;
    const values = [searchTerm];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Error executing search query:', error);
      throw error;
    }
  },

  async moduloTextualSearch(searchTerm) {
    const query = `
        SELECT m.* 
        FROM modulo m
        JOIN trilha t ON m.id_trilha = t.id
        WHERE to_tsvector('portuguese', t.titulo) @@ plainto_tsquery('portuguese', $1)
    `;
    const values = [searchTerm];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Error executing modulo search query:', error);
      throw error;
    }
  },
};
