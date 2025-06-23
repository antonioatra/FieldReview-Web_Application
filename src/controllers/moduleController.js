const Module = require('../models/module');

// Cria um novo módulo
exports.store = async (req, res) => {
  try {
    const module = await Module.create(req.body);
    res.status(201).json({ message: 'Módulo criado com sucesso', data: module.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar módulo.', details: err.message });
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
    // Preenche os campos que nao foram enviados com os valores existentes
    const existingModule = await Module.findById(id);
    if (!existingModule.rows.length) {
      return res.status(404).json({ error: 'Módulo não encontrado' });
    }
    req.body.title = req.body.title || existingModule.rows[0].titulo;
    req.body.content = req.body.content || existingModule.rows[0].conteudo;
    req.body.order = req.body.order || existingModule.rows[0].ordem;
    req.body.drivevideo = req.body.drivevideo || existingModule.rows[0].drivevideo;

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
