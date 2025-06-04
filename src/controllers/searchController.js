const Search = require('../models/search');

exports.search = async (req, res) => {
  try {
    const helpResults = await Search.helpTextualSearch(req.body.searchTerm);
    const moduleResults = await Search.moduloTextualSearch(req.body.searchTerm);

    res.status(200).json({
      help: helpResults,
      modules: moduleResults,
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pelo termo' });
  }
};
