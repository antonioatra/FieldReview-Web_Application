const Trail = require('../models/trail');
const User = require('../models/user');
const pool = require('../config/database');

exports.store = async (req, res) => {
  try {
    const result = await Trail.create(req.body);
    const trailId = result.rows[0].id;
    
    // Se módulos foram enviados, criar módulos
    if (req.body.modules && Array.isArray(req.body.modules)) {
      const Module = require('../models/module');
      
      for (let i = 0; i < req.body.modules.length; i++) {
        const moduleTitle = req.body.modules[i];
        if (moduleTitle && moduleTitle.trim()) {
          await Module.create({
            trailId: trailId,
            title: moduleTitle.trim(),
            content: `Conteúdo do módulo: ${moduleTitle}`,
            order: i + 1
          });
        }
      }
    }
    
    res.status(201).json({ message: 'Trilha criada com sucesso', trail: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar trilha' });
    console.error('Erro encontrado:', err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Updating trail with ID:', id);
    console.log('Data received:', req.body);
    
    const currentTrail = await Trail.findById(id);
    if (!currentTrail) return res.status(404).json({ error: 'Trilha não encontrada.' });
    
    // Atualizar título da trilha
    const titulo = req.body.titulo || currentTrail.titulo;
    await Trail.update(id, { titulo });
    
    // Se módulos foram enviados, atualizar/criar módulos
    if (req.body.modules && Array.isArray(req.body.modules)) {
      const Module = require('../models/module');
      
      // Deletar módulos existentes da trilha
      await pool.query('DELETE FROM modulo WHERE id_trilha = $1', [id]);
      
      // Criar novos módulos
      for (let i = 0; i < req.body.modules.length; i++) {
        const moduleTitle = req.body.modules[i];
        if (moduleTitle && moduleTitle.trim()) {
          await Module.create({
            trailId: id,
            title: moduleTitle.trim(),
            content: `Conteúdo do módulo: ${moduleTitle}`,
            order: i + 1
          });
        }
      }
    }
    
    res.status(200).json({ message: 'Trilha atualizada com sucesso' });
  } catch (err) {
    console.error('Error updating trail:', err);
    res.status(500).json({ error: 'Erro ao atualizar uma trilha', details: err.message });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Trail.delete(id);
    res.status(200).json({ message: 'Trilha deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar trilha' });
  }
};

exports.showById = async (req, res) => {
  try {
    const { id } = req.params;
    const trail = await Trail.findById(id);
    if (!trail) return res.status(404).json({ error: 'ID não encontrado.' });
    res.status(200).json({ message: 'Trail returned successfully', trail });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar trilha' });
  }
};

exports.showAll = async (req, res) => {
  try {
    const trail = await Trail.findAll();
    res.json(trail);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao retornar trilhas' });
  }
};

exports.assignTrail = async (req, res) => {
  const { id: trailId, userId } = req.params;
  const { deadline } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const trail = await Trail.findById(trailId);
    if (!trail) return res.status(404).json({ error: 'Trilha não encontrada' });

    const result = await Trail.assignToUser({
      idTrail: trailId,
      idUser: userId,
      deadline,
      status: 'pendente',
    });
    res.status(201).json({ message: 'Trilha atribuída com sucesso', assignment: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atribuir trilha', details: err.message });
  }
};

exports.showByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    const trails = await Trail.findByUserId(userId);
    res.status(200).json({ message: 'Trilhas do usuário retornadas com sucesso', trails });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao retornar trilhas do usuário' });
  }
};
