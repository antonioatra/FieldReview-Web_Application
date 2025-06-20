const Help = require('../models/helpModel');

exports.store = async (req, res) => {
  try {
    const result = await Help.create(req.body);
    res.status(201).json({ message: 'Ajuda criada com sucesso', help: result });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar ajuda' });
  }
};

exports.show = async (req, res) => {
  try {
    const help = await Help.select();
    res.status(200).json({ message: 'Ajudas retornadas com sucesso', help });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar ajudas' });
  }
};

exports.showById = async (req, res) => {
  try {
    const { id } = req.params;
    const help = await Help.selectById(id);
    res.status(200).json({ message: 'Ajuda retornada com sucesso', help });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar ajuda' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const existingHelp = await Help.selectById(id);
    if (!existingHelp) {
      return res.status(404).json({ error: 'Ajuda não encontrada' });
    }
    // Preenche os campos que nao foram passados com os dados antigos
    req.body.title = req.body.title || existingHelp.titulo;
    req.body.content = req.body.content || existingHelp.conteudo;

    await Help.update(req.body, id);
    res.status(200).json({ message: 'Ajuda atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar ajuda' });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Help.delete(id);
    res.status(200).json({ message: 'Ajuda deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar ajuda' });
  }
};
