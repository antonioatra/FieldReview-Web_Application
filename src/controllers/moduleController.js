const Module = require('../models/module');

// Cria um novo módulo
exports.store = async (req, res) => {
  try {
    await Module.create(req.body);
    res.status(201).json({ message: 'Módulo criado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar módulo.' });
  }
};

// Retorna um módulo por ID
exports.showById = async (req, res) => {
  try { 
    const { id } = req.params;
    const mod = await Module.findById(id);
    res.json(mod.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar módulo.' });
  }
};

// Retorna módulos de uma trilha por ID da trilha
exports.showByTrailId = async (req, res) => {
  try {
    const { id } = req.params;
    const mod = await Module.findByTrailId(id);
    res.json(mod.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar módulos' });
  }
};

// Retorna módulos atribuídos a um usuário
exports.showByUserId = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const mod = await Module.findByUserId({ id_user: userId });
    res.json(mod.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar módulos' });
  }
};

// Atualiza um módulo
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    await Module.update(id, req.body);
    res.status(200).json({ message: 'Módulo atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar módulo' });
  }
};

// Deleta um módulo por ID
exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Module.delete(id);
    res.status(200).json({ message: 'Module deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar módulo' });
  }
};
