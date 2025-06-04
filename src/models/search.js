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

  async moduleTextualSearch(searchTerm) {
    const query = `
      SELECT * FROM modulo
      WHERE to_tsvector('portuguese', titulo || ' ' || conteudo) @@ plainto_tsquery('portuguese', $1)
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
