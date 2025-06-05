const Search = require('../models/search');

exports.search = async (req, res) => {
  console.log('Received search request with term:', req.body);
  try {
    const helpResults = await Search.helpTextualSearch(req.body.searchTerm);
    const moduleResults = await Search.moduleTextualSearch(req.body.searchTerm);
    console.log('Search results:', {
      help: helpResults,
      modules: moduleResults,
    });

    res.status(200).json({
      help: helpResults,
      modules: moduleResults,
    });
  } catch (err) {
    console.error('Error during search:', err);
    res.status(500).json({ error: 'Erro ao buscar pelo termo' });
  }
};
